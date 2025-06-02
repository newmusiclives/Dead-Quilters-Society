import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BrandKit = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("colors");
  
  // Brand colors state
  const [primaryColor, setPrimaryColor] = useState("#8B4513");
  const [secondaryColor, setSecondaryColor] = useState("#D2B48C");
  const [accentColor, setAccentColor] = useState("#CD5C5C");
  
  // Typography state
  const [headingFont, setHeadingFont] = useState("Playfair Display");
  const [bodyFont, setBodyFont] = useState("Roboto");
  const [fontSize, setFontSize] = useState("16px");
  
  // Logo state
  const [logoUrl, setLogoUrl] = useState("https://placehold.co/400x200/8B4513/FFFFFF?text=Dead+Quilters+Society");
  const [logoAltText, setLogoAltText] = useState("Dead Quilters Society Logo");
  
  // Brand voice state
  const [brandDescription, setBrandDescription] = useState(
    "The Dead Quilters Society is a theatrical group that celebrates the art of quilting through innovative performances. Our voice is warm, nostalgic, and slightly irreverent, honoring tradition while embracing modern storytelling."
  );
  const [missionStatement, setMissionStatement] = useState(
    "To preserve and celebrate the rich history of quilting through immersive theatrical experiences that educate, entertain, and inspire communities."
  );

  const handleSave = (section: string) => {
    // In a real app, this would save to the database
    toast({
      title: "Brand Kit Updated",
      description: `${section} settings have been saved successfully.`,
    });
  };

  return (
    <TabsContent value="brand-kit" className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Brand Kit</h2>
        <Button onClick={() => handleSave("All")}>Save All Changes</Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="voice">Brand Voice</TabsTrigger>
        </TabsList>
        
        {/* Colors Section */}
        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Define your organization's color palette</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                    />
                  </div>
                  <div 
                    className="h-20 rounded-md" 
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                    />
                  </div>
                  <div 
                    className="h-20 rounded-md" 
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="accentColor"
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                    />
                  </div>
                  <div 
                    className="h-20 rounded-md" 
                    style={{ backgroundColor: accentColor }}
                  ></div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-4">Color Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: primaryColor, color: "#fff" }}>
                    <h4 className="text-xl font-bold mb-2">Primary Color</h4>
                    <p>This is how text looks on your primary color background.</p>
                    <Button 
                      className="mt-4" 
                      style={{ backgroundColor: accentColor, color: "#fff" }}
                    >
                      Accent Button
                    </Button>
                  </div>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: secondaryColor }}>
                    <h4 className="text-xl font-bold mb-2">Secondary Color</h4>
                    <p>This is how text looks on your secondary color background.</p>
                    <Button 
                      className="mt-4" 
                      style={{ backgroundColor: primaryColor, color: "#fff" }}
                    >
                      Primary Button
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button onClick={() => handleSave("Colors")}>Save Color Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Typography Section */}
        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>Define your organization's typography</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="headingFont">Heading Font</Label>
                  <Input
                    id="headingFont"
                    value={headingFont}
                    onChange={(e) => setHeadingFont(e.target.value)}
                  />
                  <div className="p-4 border rounded-md">
                    <h1 style={{ fontFamily: headingFont }} className="text-3xl font-bold">Heading 1</h1>
                    <h2 style={{ fontFamily: headingFont }} className="text-2xl font-bold">Heading 2</h2>
                    <h3 style={{ fontFamily: headingFont }} className="text-xl font-bold">Heading 3</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="bodyFont">Body Font</Label>
                  <Input
                    id="bodyFont"
                    value={bodyFont}
                    onChange={(e) => setBodyFont(e.target.value)}
                  />
                  <div className="p-4 border rounded-md">
                    <p style={{ fontFamily: bodyFont }} className="mb-2">This is a paragraph in your body font.</p>
                    <p style={{ fontFamily: bodyFont }} className="text-sm">This is smaller text in your body font.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="fontSize">Base Font Size</Label>
                <Input
                  id="fontSize"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                />
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-4">Typography Preview</h3>
                <div className="p-6 border rounded-lg" style={{ fontSize }}>
                  <h1 style={{ fontFamily: headingFont }} className="text-3xl font-bold mb-4">The Dead Quilters Society</h1>
                  <h2 style={{ fontFamily: headingFont }} className="text-2xl font-bold mb-3">Our Theatrical Heritage</h2>
                  <p style={{ fontFamily: bodyFont }} className="mb-4">
                    The Dead Quilters Society brings together the art of quilting and theatrical performance
                    in a unique celebration of craft, history, and storytelling.
                  </p>
                  <h3 style={{ fontFamily: headingFont }} className="text-xl font-bold mb-2">Upcoming Shows</h3>
                  <p style={{ fontFamily: bodyFont }}>
                    Join us for our next performance and experience the magic of quilting brought to life on stage.
                  </p>
                </div>
              </div>
              
              <Button onClick={() => handleSave("Typography")}>Save Typography Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Logo Section */}
        <TabsContent value="logo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Logo</CardTitle>
              <CardDescription>Manage your organization's logo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="logoUrl">Logo URL</Label>
                  <Input
                    id="logoUrl"
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                  />
                  
                  <Label htmlFor="logoAltText">Logo Alt Text</Label>
                  <Input
                    id="logoAltText"
                    value={logoAltText}
                    onChange={(e) => setLogoAltText(e.target.value)}
                  />
                  
                  <div className="pt-4">
                    <Button variant="outline">Upload New Logo</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label>Logo Preview</Label>
                  <div className="p-4 border rounded-md flex items-center justify-center">
                    <img 
                      src={logoUrl} 
                      alt={logoAltText} 
                      className="max-w-full max-h-48"
                    />
                  </div>
                  
                  <div className="p-4 border rounded-md bg-gray-800 flex items-center justify-center">
                    <img 
                      src={logoUrl} 
                      alt={logoAltText} 
                      className="max-w-full max-h-48"
                    />
                  </div>
                </div>
              </div>
              
              <Button onClick={() => handleSave("Logo")}>Save Logo Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Brand Voice Section */}
        <TabsContent value="voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Voice</CardTitle>
              <CardDescription>Define your organization's voice and messaging</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="brandDescription">Brand Description</Label>
                <Textarea
                  id="brandDescription"
                  value={brandDescription}
                  onChange={(e) => setBrandDescription(e.target.value)}
                  rows={4}
                />
              </div>
              
              <div className="space-y-4">
                <Label htmlFor="missionStatement">Mission Statement</Label>
                <Textarea
                  id="missionStatement"
                  value={missionStatement}
                  onChange={(e) => setMissionStatement(e.target.value)}
                  rows={4}
                />
              </div>
              
              <div className="space-y-4">
                <Label>Tone Guidelines</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Warm & Nostalgic</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Evoke feelings of comfort and tradition while honoring quilting heritage.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Educational</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Share knowledge about quilting history and techniques in an accessible way.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Slightly Irreverent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Bring a touch of humor and playfulness to our theatrical approach.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Button onClick={() => handleSave("Brand Voice")}>Save Brand Voice Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </TabsContent>
  );
};

export default BrandKit;
