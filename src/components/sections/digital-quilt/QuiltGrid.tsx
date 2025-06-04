import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { getTierStyles } from "@/utils/quiltStyles";
import { getRandomQuiltImage, QuiltSquare } from "@/data/quiltSquares";

interface QuiltGridProps {
  squares: QuiltSquare[];
  onPurchaseClick?: () => void;
}

const QuiltGrid = ({ squares, onPurchaseClick }: QuiltGridProps) => {
  const getSquareImage = (square: QuiltSquare) => {
    if (square.photos && square.photos.length > 0) {
      return square.photos[0];
    }
    if (square.tier === 'standard') {
      return getRandomQuiltImage();
    }
    return null;
  };

  const getPlaceholderStyles = () => {
    return 'border-dashed border-4 border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ring-2 ring-amber-300 ring-opacity-50';
  };

  return (
    <div className="bg-gradient-to-br from-amber-700 to-amber-800 p-8 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {squares.map((square) => (
          <Dialog key={square.id}>
            <DialogTrigger asChild>
              <Card className={`cursor-pointer hover:scale-105 transition-transform ${
                square.isPlaceholder ? getPlaceholderStyles() : getTierStyles(square.tier)
              }`}>
                <CardContent className="p-4 text-center">
                  <div className="mb-3">
                    <AspectRatio ratio={1} className="bg-gray-200 rounded overflow-hidden">
                      {square.isPlaceholder ? (
                        <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                          <div className="text-amber-800 text-6xl font-bold opacity-30">+</div>
                        </div>
                      ) : (
                        <img 
                          src={getSquareImage(square) || getRandomQuiltImage()}
                          alt={square.honoreeName}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </AspectRatio>
                  </div>
                  <h4 className={`font-bold mb-1 text-sm ${
                    square.isPlaceholder ? 'text-amber-800 text-base' : 'text-amber-900'
                  }`}>
                    {square.honoreeName}
                  </h4>
                  <p className={`text-xs mb-1 ${
                    square.isPlaceholder ? 'text-amber-700 font-medium' : 'text-gray-700'
                  }`}>
                    {square.isPlaceholder ? square.tribute.substring(0, 60) + '...' : square.tribute.substring(0, 40) + '...'}
                  </p>
                  <p className={`text-xs ${
                    square.isPlaceholder ? 'text-amber-600 font-semibold' : 'text-gray-600'
                  }`}>
                    {square.purchaserName}
                  </p>
                  <Badge className={`mt-2 text-xs font-bold ${
                    square.isPlaceholder ? 'bg-amber-600 hover:bg-amber-700 px-4 py-1' : 
                    square.tier === 'founder' ? 'bg-red-800' : 'bg-amber-800'
                  }`}>
                    {square.isPlaceholder ? 'START HERE' : square.tier.toUpperCase()}
                  </Badge>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-amber-800">{square.honoreeName}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {square.isPlaceholder ? (
                  <div className="text-center space-y-4">
                    <div className="text-6xl text-amber-600 mb-4">💛</div>
                    <p className="text-lg font-semibold text-amber-800">Create a Beautiful Memorial</p>
                    <p className="text-base">Honor a special woman in your life by purchasing a square in our Digital Quilt Memorial.</p>
                    <div className="bg-amber-50 p-4 rounded-lg space-y-3 text-left">
                      <div className="border-l-4 border-amber-500 pl-3">
                        <p className="font-semibold text-amber-800">Standard Square ($25)</p>
                        <p className="text-sm text-gray-700">Name, 150-word tribute, beautiful quilt pattern</p>
                      </div>
                      <div className="border-l-4 border-amber-600 pl-3">
                        <p className="font-semibold text-amber-800">Premium Square ($100)</p>
                        <p className="text-sm text-gray-700">Name, photo, 300-word tribute, enhanced styling</p>
                      </div>
                      <div className="border-l-4 border-amber-700 pl-3">
                        <p className="font-semibold text-amber-800">Legacy Square ($200)</p>
                        <p className="text-sm text-gray-700">Name, up to 3 photos, 500-word tribute, carousel display</p>
                      </div>
                    </div>
                    <Button 
                      onClick={onPurchaseClick}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold"
                    >
                      Create Your Square
                    </Button>
                  </div>
                ) : (
                  <>
                    <Badge className={`w-fit ${square.tier === 'founder' ? 'bg-red-800' : 'bg-amber-800'}`}>
                      {square.tier.toUpperCase()} SQUARE
                    </Badge>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Photos:</h4>
                      {square.tier === 'legacy' && square.photos.length > 1 ? (
                        <Carousel className="w-full max-w-xs mx-auto">
                          <CarouselContent>
                            {square.photos.map((photo: string, photoIndex: number) => (
                              <CarouselItem key={photoIndex}>
                                <AspectRatio ratio={1} className="bg-gray-200 rounded overflow-hidden">
                                  <img 
                                    src={photo}
                                    alt={`${square.honoreeName} - Photo ${photoIndex + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </AspectRatio>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(square.photos && square.photos.length > 0 ? square.photos : [getSquareImage(square)]).map((photo: string, photoIndex: number) => (
                            <AspectRatio key={photoIndex} ratio={1} className="bg-gray-200 rounded overflow-hidden">
                              <img 
                                src={photo || getRandomQuiltImage()}
                                alt={`${square.honoreeName} - Photo ${photoIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tribute:</h4>
                      <p className="text-gray-700">{square.tribute}</p>
                    </div>
                    <div>
                      <p><strong>Honored by:</strong> {square.purchaserName}</p>
                      <p><strong>Date Added:</strong> {square.date}</p>
                    </div>
                  </>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default QuiltGrid;
