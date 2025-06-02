import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { performances } from "@/data/performances";

const PerformancesSection = () => (
  <div className="space-y-8">
    <h2 className="text-4xl font-bold text-amber-800 text-center mb-8">Upcoming Performances</h2>
    <div className="space-y-4">
      {performances.map((performance, index) => (
        <Card key={index} className="border-l-4 border-amber-600">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-amber-800 mb-2">{performance.venue}</h3>
            <p className="font-semibold mb-1">{performance.date}</p>
            <p className="text-gray-600 mb-2">{performance.location}</p>
            {performance.special && (
              <Badge className="bg-orange-100 text-orange-800">{performance.special}</Badge>
            )}
            <div className="mt-4">
              <Button className="bg-amber-600 hover:bg-amber-700">Get Tickets</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default PerformancesSection;
