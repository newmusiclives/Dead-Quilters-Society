import { Card, CardContent } from "@/components/ui/card";
import { quiltSquares } from "@/data/quiltSquares";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-400">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-800">{quiltSquares.length}</div>
          <div className="text-sm text-yellow-700">Total Squares</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-orange-100 to-orange-200 border-orange-400">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-orange-800">
            {quiltSquares.filter(s => s.tier === 'legacy').length}
          </div>
          <div className="text-sm text-orange-700">Legacy Squares</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-amber-100 to-amber-200 border-amber-400">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-amber-800">
            {quiltSquares.filter(s => s.tier === 'premium').length}
          </div>
          <div className="text-sm text-amber-700">Premium Squares</div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-yellow-800">
            {quiltSquares.filter(s => s.tier === 'standard').length}
          </div>
          <div className="text-sm text-yellow-700">Standard Squares</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsSection;
