import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/data/quiltSquares";

interface PricingCardsProps {
  onPurchase: (tierName: string) => void;
}

const PricingCards = ({ onPurchase }: PricingCardsProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {pricingTiers.map((tier, index) => (
        <Card key={index} className="text-center">
          <CardHeader>
            <CardTitle className="text-amber-800">{tier.name}</CardTitle>
            <div className="text-3xl font-bold text-amber-900">{tier.price}</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="text-sm">{feature}</li>
              ))}
            </ul>
            <Button 
              onClick={() => onPurchase(tier.name)}
              className="w-full bg-amber-600 hover:bg-amber-700"
            >
              Purchase
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCards;
