import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { historicalFigures } from "@/data/historicalFigures";

interface CastMembersSectionProps {
  setActiveSection: (section: string) => void;
}

const CastMembersSection = ({ setActiveSection }: CastMembersSectionProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-800 text-center mb-8">Meet Our Talented Cast</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
        {historicalFigures.map((figure, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col max-w-sm">
            <div className="w-full h-64 relative overflow-hidden rounded-t-lg">
              <img 
                src={figure.image} 
                alt={`${figure.actress} as ${figure.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="flex-shrink-0 text-center">
              <CardTitle className="text-amber-800 text-lg leading-tight">{figure.actress}</CardTitle>
              <p className="text-sm text-gray-600 font-medium">portrays</p>
              <p className="text-amber-700 font-semibold">{figure.name}</p>
              <Badge className="w-fit mx-auto text-xs">{figure.role}</Badge>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between text-center">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{figure.description}</p>
              <Button 
                onClick={() => setActiveSection('historical')}
                className="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3 py-2"
              >
                Learn About {figure.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CastMembersSection;
