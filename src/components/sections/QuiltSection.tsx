import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import QuiltGrid from "./digital-quilt/QuiltGrid";
import PricingCards from "./quilt/PricingCards";
import QuiltSquareOrderForm from "@/components/forms/QuiltSquareOrderForm";
import { quiltSquares, placeholderSquare, QuiltSquare } from "@/data/quiltSquares";

const QuiltSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  const [showOrderForm, setShowOrderForm] = useState(false);

  // Include placeholder square in the display
  const allSquares: QuiltSquare[] = [...quiltSquares, placeholderSquare];

  const filteredSquares = allSquares.filter(square => {
    // Always show placeholder square unless specifically filtering it out
    if (square.isPlaceholder && tierFilter !== 'all') {
      return tierFilter === 'standard';
    }
    
    const matchesSearch = square.honoreeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         square.purchaserName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = tierFilter === 'all' || square.tier === tierFilter;
    return matchesSearch && matchesTier;
  });

  const handlePurchase = (tierName: string) => {
    setShowOrderForm(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-amber-800 text-center mb-4">Digital Quilt Memorial</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-8">
          Honor the important women in your life by purchasing a square in our Digital Quilt. 
          Each square becomes part of a growing memorial celebrating women's contributions to our communities and lives.
        </p>
      </div>

      <PricingCards onPurchase={handlePurchase} />

      <Card className="border-4 border-red-800 bg-gradient-to-br from-yellow-200 to-orange-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">Looking for Something More Special?</h3>
          <p className="text-lg mb-4">
            Partner with your women's group to bring The Dead Quilter's Society to your local theater!
          </p>
          <Button 
            onClick={() => window.location.href = '/bring-the-show'}
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3"
          >
            Learn About Founder Squares & Community Partnerships
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search by honoree or purchaser name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Select value={tierFilter} onValueChange={setTierFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="All Tiers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tiers</SelectItem>
            <SelectItem value="standard">Standard ($25)</SelectItem>
            <SelectItem value="premium">Premium ($100)</SelectItem>
            <SelectItem value="legacy">Legacy ($200)</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Refresh Display</Button>
      </div>

      <div className="text-center mb-6">
        <Button 
          onClick={() => window.location.href = '/digital-quilt'}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
        >
          View Full Digital Quilt
        </Button>
      </div>

      <QuiltGrid 
        squares={filteredSquares} 
        onPurchaseClick={() => setShowOrderForm(true)}
      />

      <Dialog open={showOrderForm} onOpenChange={setShowOrderForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-amber-800">Purchase a Digital Quilt Square</DialogTitle>
          </DialogHeader>
          <QuiltSquareOrderForm onClose={() => setShowOrderForm(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuiltSection;
