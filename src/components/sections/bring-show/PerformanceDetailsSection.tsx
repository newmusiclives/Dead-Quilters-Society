import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const PerformanceDetailsSection = () => {
  return (
    <Card className="bg-gradient-to-r from-purple-50 to-indigo-100 border-2 border-purple-300">
      <CardHeader>
        <CardTitle className="text-3xl text-purple-800 text-center flex items-center justify-center">
          <Calendar className="mr-3 text-purple-600" size={32} />
          Your Community's Special Weekend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-purple-800 mb-4 text-xl">Performance Schedule:</h4>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white/70 rounded-lg">
                <Badge className="mr-4 bg-purple-600">Friday</Badge>
                <div>
                  <div className="font-semibold">Opening Night Gala - 7:30 PM</div>
                  <div className="text-sm text-gray-600">VIP reception for Founder families</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/70 rounded-lg">
                <Badge className="mr-4 bg-purple-600">Saturday</Badge>
                <div>
                  <div className="font-semibold">Matinee & Evening - 2:00 PM & 7:30 PM</div>
                  <div className="text-sm text-gray-600">Two shows to maximize attendance</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/70 rounded-lg">
                <Badge className="mr-4 bg-purple-600">Sunday</Badge>
                <div>
                  <div className="font-semibold">Closing Celebration - 7:00 PM</div>
                  <div className="text-sm text-gray-600">Final tribute to your community's women</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-purple-800 mb-4 text-xl">Opening Night Special Features:</h4>
            <div className="space-y-3">
              <div className="flex items-start p-3 bg-white/70 rounded-lg">
                <span className="text-purple-600 mr-3 mt-1">★</span>
                <div>
                  <strong>200 VIP guests</strong> - All Founder Square purchasers receive 2 premium tickets
                </div>
              </div>
              <div className="flex items-start p-3 bg-white/70 rounded-lg">
                <span className="text-purple-600 mr-3 mt-1">★</span>
                <div>
                  <strong>Pre-show reception</strong> - Wine, appetizers, and community celebration
                </div>
              </div>
              <div className="flex items-start p-3 bg-white/70 rounded-lg">
                <span className="text-purple-600 mr-3 mt-1">★</span>
                <div>
                  <strong>Recognition ceremony</strong> - Honor all women featured in Founder Squares
                </div>
              </div>
              <div className="flex items-start p-3 bg-white/70 rounded-lg">
                <span className="text-purple-600 mr-3 mt-1">★</span>
                <div>
                  <strong>Cast meet & greet</strong> - Personal time with our professional performers
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceDetailsSection;
