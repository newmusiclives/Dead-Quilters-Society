import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { historicalFigures } from "@/data/historicalFigures";

const HistoricalSection = () => (
  <div className="space-y-8">
    <div className="text-center py-8">
      <h2 className="text-4xl font-bold text-amber-800 mb-4">The Five Historical Women</h2>
      <p className="text-xl max-w-4xl mx-auto text-gray-700">
        Meet the remarkable women whose stories we bring to life, and the talented actresses who portray them
      </p>
    </div>
    
    {/* All 5 characters in uniform grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
      {historicalFigures.map((figure, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden h-full flex flex-col max-w-sm">
              <div className="w-full h-64 relative overflow-hidden">
                <img 
                  src={figure.image} 
                  alt={`${figure.name} - ${figure.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-amber-800 text-lg leading-tight">{figure.name}</CardTitle>
                <Badge className="w-fit text-xs">{figure.role}</Badge>
                <p className="text-sm text-gray-600">{figure.years}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-gray-700 mb-3 text-sm line-clamp-3">{figure.description}</p>
                <div className="bg-amber-50 p-2 rounded">
                  <p className="text-sm text-amber-800 font-medium">Portrayed by</p>
                  <p className="text-sm font-semibold text-amber-700">{figure.actress}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Click to learn more...</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl text-amber-800">{figure.name}</DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-amber-600">{figure.role}</Badge>
                <span className="text-gray-600">{figure.years}</span>
              </div>
            </DialogHeader>
            <div className="space-y-6 mt-4">
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src={figure.image} 
                  alt={`${figure.name} - ${figure.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Biography</h4>
                <p className="text-gray-700 leading-relaxed">{figure.fullBio}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {figure.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-700 flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Legacy</h4>
                <p className="text-gray-700 leading-relaxed">{figure.legacy}</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="text-lg font-semibold text-amber-800 mb-2">In The Show</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Portrayed by:</strong> <span className="text-amber-700 font-semibold">{figure.actress}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Experience {figure.name}'s remarkable story come to life through music, 
                  storytelling, and theatrical performance in "The Dead Quilter's Society."
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  </div>
);

export default HistoricalSection;
