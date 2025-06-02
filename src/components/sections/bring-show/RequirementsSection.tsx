import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const RequirementsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-amber-800 flex items-center justify-center">
          <MapPin className="mr-3 text-amber-600" size={28} />
          Simple Requirements & Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-amber-800 mb-4 text-lg">What You Need:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Venue:</strong> 200-800 seats with basic stage and lighting</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Timeline:</strong> 6 months advance booking minimum</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Sales period:</strong> 3 months to sell Founder Squares</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span><strong>Setup:</strong> 2 days for technical and rehearsals</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-800 mb-4 text-lg">We Provide Complete Support:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Professional marketing materials and templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Digital platform for Founder Square sales</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Press releases and social media content</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 mt-1">•</span>
                <span>Dedicated support coordinator</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequirementsSection;
