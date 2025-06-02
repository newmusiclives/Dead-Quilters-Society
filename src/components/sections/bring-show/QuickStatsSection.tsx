import { Card, CardContent } from "@/components/ui/card";

const QuickStatsSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="text-center border-2 border-amber-200">
        <CardContent className="p-6">
          <div className="text-4xl font-bold text-amber-800 mb-2">$30,000</div>
          <p className="text-lg text-gray-700">Founder Square Investment</p>
          <p className="text-sm text-gray-600 mt-2">100 squares × $300 each</p>
        </CardContent>
      </Card>
      <Card className="text-center border-2 border-amber-200">
        <CardContent className="p-6">
          <div className="text-4xl font-bold text-amber-800 mb-2">80%</div>
          <p className="text-lg text-gray-700">Revenue Share</p>
          <p className="text-sm text-gray-600 mt-2">Of remaining revenue after investment</p>
        </CardContent>
      </Card>
      <Card className="text-center border-2 border-amber-200">
        <CardContent className="p-6">
          <div className="text-4xl font-bold text-amber-800 mb-2">2,000</div>
          <p className="text-lg text-gray-700">Total Available Tickets</p>
          <p className="text-sm text-gray-600 mt-2">4 shows × 500 seats</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickStatsSection;
