import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X, Upload, Plus } from "lucide-react";
import { pricingTiers } from "@/data/quiltSquares";

interface QuiltSquareOrderFormProps {
  onClose: () => void;
}

interface FormData {
  tier: string;
  honoreeName: string;
  purchaserName: string;
  purchaserEmail: string;
  purchaserPhone: string;
  tribute: string;
  photos: File[];
}

const QuiltSquareOrderForm = ({ onClose }: QuiltSquareOrderFormProps) => {
  const [selectedTier, setSelectedTier] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);

  const form = useForm<FormData>({
    defaultValues: {
      tier: '',
      honoreeName: '',
      purchaserName: '',
      purchaserEmail: '',
      purchaserPhone: '',
      tribute: '',
      photos: []
    }
  });

  const getMaxPhotos = (tier: string) => {
    switch (tier) {
      case 'legacy': return 3;
      case 'premium': return 1;
      default: return 0;
    }
  };

  const getMaxWords = (tier: string) => {
    switch (tier) {
      case 'legacy': return 500;
      case 'premium': return 300;
      case 'standard': return 150;
      default: return 150;
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxPhotos = getMaxPhotos(selectedTier);
    
    if (uploadedPhotos.length + files.length > maxPhotos) {
      alert(`You can only upload ${maxPhotos} photo(s) for this tier.`);
      return;
    }

    const newPhotos = [...uploadedPhotos, ...files];
    setUploadedPhotos(newPhotos);

    // Create preview URLs for square display
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPhotoPreviewUrls([...photoPreviewUrls, ...newPreviewUrls]);

    form.setValue('photos', newPhotos);
  };

  const removePhoto = (index: number) => {
    const newPhotos = uploadedPhotos.filter((_, i) => i !== index);
    const newPreviewUrls = photoPreviewUrls.filter((_, i) => i !== index);
    
    setUploadedPhotos(newPhotos);
    setPhotoPreviewUrls(newPreviewUrls);
    form.setValue('photos', newPhotos);
  };

  const needsFollowUp = (tier: string, hasPhotos: boolean) => {
    return (tier === 'premium' || tier === 'legacy') && !hasPhotos;
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    
    const hasPhotos = uploadedPhotos.length > 0;
    const requiresFollowUp = needsFollowUp(selectedTier, hasPhotos);
    
    if (requiresFollowUp) {
      console.log('Follow-up required: Premium/Legacy square purchased without photos');
      alert('Thank you for your purchase! Since no photos were uploaded, we will follow up with you via email to collect photos for your square.');
    } else {
      alert('Thank you for your purchase! Your square will be added to the quilt soon.');
    }
    
    // Here you would typically send the data to your backend
    // Include follow-up flag in the data
    const submissionData = {
      ...data,
      requiresFollowUp,
      submissionDate: new Date().toISOString()
    };
    
    console.log('Submission data:', submissionData);
    onClose();
  };

  const selectedTierData = pricingTiers.find(tier => tier.tier === selectedTier);

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Tier Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-800">Choose Your Square Type</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricingTiers.map((tier) => (
                <Card 
                  key={tier.tier}
                  className={`cursor-pointer transition-all ${
                    selectedTier === tier.tier 
                      ? 'ring-2 ring-amber-500 bg-amber-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setSelectedTier(tier.tier);
                    form.setValue('tier', tier.tier);
                    // Reset photos when changing tier
                    setUploadedPhotos([]);
                    setPhotoPreviewUrls([]);
                    form.setValue('photos', []);
                  }}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-amber-800">{tier.name}</CardTitle>
                    <div className="text-2xl font-bold text-amber-900">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {tier.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {selectedTier && (
            <>
              {/* Honoree Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-800">Honoree Information</h3>
                <FormField
                  control={form.control}
                  name="honoreeName"
                  rules={{ required: "Honoree name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name of Person Being Honored *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the name of the woman you're honoring" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tribute"
                  rules={{ 
                    required: "Tribute is required",
                    maxLength: {
                      value: getMaxWords(selectedTier),
                      message: `Tribute must be ${getMaxWords(selectedTier)} words or less`
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tribute Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your tribute message here..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Maximum {getMaxWords(selectedTier)} words for {selectedTierData?.name}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Photo Upload */}
              {getMaxPhotos(selectedTier) > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-amber-800">Photos (Optional)</h3>
                  <p className="text-sm text-gray-600">
                    {selectedTier === 'premium' || selectedTier === 'legacy' 
                      ? 'If you don\'t upload photos now, we\'ll follow up with you after purchase to collect them.'
                      : 'You can upload photos for your square.'
                    }
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('photo-upload')?.click()}
                        disabled={uploadedPhotos.length >= getMaxPhotos(selectedTier)}
                        className="flex items-center gap-2"
                      >
                        <Upload size={16} />
                        Upload Photo
                      </Button>
                      <span className="text-sm text-gray-600">
                        {uploadedPhotos.length} / {getMaxPhotos(selectedTier)} photos uploaded
                      </span>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        multiple={getMaxPhotos(selectedTier) > 1}
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </div>
                    
                    {photoPreviewUrls.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {photoPreviewUrls.map((url, index) => (
                          <div key={index} className="relative">
                            <AspectRatio ratio={1} className="bg-gray-100 rounded border overflow-hidden">
                              <img
                                src={url}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2 h-6 w-6 p-0"
                              onClick={() => removePhoto(index)}
                            >
                              <X size={12} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedTier === 'standard' && (
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Standard squares:</strong> A beautiful default quilt pattern image will be used for your square.
                  </p>
                </div>
              )}

              {/* Purchaser Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-800">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="purchaserName"
                    rules={{ required: "Your name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="purchaserEmail"
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="purchaserPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Order Summary */}
              <Card className="bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>{selectedTierData?.name}</span>
                    <span className="font-semibold">{selectedTierData?.price}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>{selectedTierData?.price}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Complete Purchase
                </Button>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
};

export default QuiltSquareOrderForm;
