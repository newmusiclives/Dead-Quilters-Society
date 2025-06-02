import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { quiltSquares, placeholderSquare, QuiltSquare } from "@/data/quiltSquares";
import PageNavigation from "@/components/shared/PageNavigation";
import StatsSection from "@/components/sections/digital-quilt/StatsSection";
import ControlsSection from "@/components/sections/digital-quilt/ControlsSection";
import QuiltGrid from "@/components/sections/digital-quilt/QuiltGrid";
import QuiltSquareOrderForm from "@/components/forms/QuiltSquareOrderForm";

const DigitalQuilt = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  const [sortedSquares, setSortedSquares] = useState<QuiltSquare[]>([]);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const shuffleAndPrioritize = () => {
    const legacy = quiltSquares.filter(s => s.tier === 'legacy');
    const premium = quiltSquares.filter(s => s.tier === 'premium');
    const standard = quiltSquares.filter(s => s.tier === 'standard');
    
    // Shuffle each tier
    const shuffleLegacy = [...legacy].sort(() => Math.random() - 0.5);
    const shufflePremium = [...premium].sort(() => Math.random() - 0.5);
    const shuffleStandard = [...standard].sort(() => Math.random() - 0.5);
    
    // Create rows with prioritized distribution (5 squares per row)
    const rowSize = 5;
    const arrangedSquares: QuiltSquare[] = [];
    
    let legacyIndex = 0;
    let premiumIndex = 0;
    let standardIndex = 0;
    
    // Calculate total squares needed
    const totalSquares = legacy.length + premium.length + standard.length + 1; // +1 for placeholder
    const totalRows = Math.ceil(totalSquares / rowSize);
    
    for (let row = 0; row < totalRows; row++) {
      const rowSquares: QuiltSquare[] = [];
      
      // Fill each row with priority: Legacy > Premium > Standard
      for (let col = 0; col < rowSize; col++) {
        if (legacyIndex < shuffleLegacy.length) {
          rowSquares.push(shuffleLegacy[legacyIndex]);
          legacyIndex++;
        } else if (premiumIndex < shufflePremium.length) {
          rowSquares.push(shufflePremium[premiumIndex]);
          premiumIndex++;
        } else if (standardIndex < shuffleStandard.length) {
          rowSquares.push(shuffleStandard[standardIndex]);
          standardIndex++;
        }
      }
      
      // Shuffle the row to randomize the order while maintaining tier priority
      const shuffledRow = rowSquares.sort(() => Math.random() - 0.5);
      arrangedSquares.push(...shuffledRow);
    }
    
    // Insert placeholder at a random position
    const randomIndex = Math.floor(Math.random() * (arrangedSquares.length + 1));
    arrangedSquares.splice(randomIndex, 0, placeholderSquare);
    
    setSortedSquares(arrangedSquares);
  };

  useEffect(() => {
    shuffleAndPrioritize();
  }, []);

  const filteredSquares = sortedSquares.filter(square => {
    // Always show placeholder square unless specifically filtering it out
    if (square.isPlaceholder && tierFilter !== 'all') {
      return tierFilter === 'standard';
    }
    
    const matchesSearch = square.honoreeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         square.purchaserName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = tierFilter === 'all' || square.tier === tierFilter;
    return matchesSearch && matchesTier;
  });

  const handleRefresh = () => {
    shuffleAndPrioritize();
    setSearchTerm('');
    setTierFilter('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <PageNavigation currentPage="digital-quilt" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-800">Digital Quilt Memorial</h1>
          <p className="text-lg text-amber-700 mt-2">
            A living memorial celebrating the women who shaped our lives
          </p>
        </div>

        <ControlsSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          tierFilter={tierFilter}
          setTierFilter={setTierFilter}
          onRefresh={handleRefresh}
        />

        <StatsSection />

        <QuiltGrid 
          squares={filteredSquares} 
          onPurchaseClick={() => setShowOrderForm(true)}
        />

        <div className="text-center mt-8">
          <p className="text-amber-700 mb-4">
            Want to add your own square to honor a special woman in your life?
          </p>
          <Button 
            onClick={() => setShowOrderForm(true)}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Purchase a Square
          </Button>
        </div>
      </div>

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

export default DigitalQuilt;
