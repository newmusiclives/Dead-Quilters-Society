import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Heart } from "lucide-react";

const PartnershipOfferSection = () => {
  return (
    <Card className="border-4 border-red-600 bg-gradient-to-br from-red-50 to-red-100 shadow-xl">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <Badge className="bg-red-700 text-white text-xl px-8 py-3 rounded-full">
            <Heart className="mr-2" size={20} />
            EXCLUSIVE FOUNDER PARTNERSHIP
          </Badge>
        </div>
        <CardTitle className="text-3xl md:text-4xl text-red-800 mb-4">
          100 Founder Squares = Your Community Production
        </CardTitle>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          When your women's group sells 100 Founder Squares at $300 each, we bring our full production to your local theater for four unforgettable performances.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/70 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <Users className="mr-3 text-red-600" size={28} />
              Your Community Provides
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-lg">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <div>
                  <strong>100 Founder Square sales</strong> - Connect with local families to honor their matriarchs ($30,000 investment)
                </div>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <div>
                  <strong>Performance venue</strong> - Your local theater (400+ seats recommended)
                </div>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <div>
                  <strong>Local promotion</strong> - We provide all marketing materials and support
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/70 p-6 rounded-xl">
            <h4 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <Star className="mr-3 text-red-600" size={28} />
              We Deliver Everything
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start text-lg">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <div>
                  <strong>Complete professional production</strong> - Cast, crew, and all technical elements
                </div>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <div>
                  <strong>Four performances</strong> - Friday & Saturday evenings, Saturday matinee, Sunday closing
                </div>
              </li>
              <li className="flex items-start text-lg">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <div>
                  <strong>Marketing & sales support</strong> - Templates, graphics, and guidance
                </div>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnershipOfferSection;
