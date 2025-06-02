import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface CommunitySectionProps {
  setActiveSection?: (section: string) => void;
}

const CommunitySection = ({ setActiveSection }: CommunitySectionProps) => {
  const { toast } = useToast();

  const handleJoinCommunity = () => {
    toast({
      title: "Welcome to Threads of the Quilt!",
      description: "Thank you for your interest in joining our community. Membership registration will be available soon.",
    });
  };

  const handleLearnHistory = () => {
    if (setActiveSection) {
      setActiveSection('historical');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 px-4">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-amber-800 mb-4">Threads of the Quilt Community</h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Join a vibrant community of history enthusiasts, theater lovers, and advocates for women's stories. 
          Together, we're weaving the forgotten threads of history back into the cultural fabric of our time.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950 text-white shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Badge className="bg-yellow-600 text-black text-lg px-4 py-2 font-bold">
              Monthly Membership
            </Badge>
          </div>
          <CardTitle className="text-3xl mb-2">Threads of the Quilt</CardTitle>
          <p className="text-amber-100 text-lg">
            Weaving history, community, and storytelling together
          </p>
          <div className="text-center mt-4">
            <span className="text-5xl font-bold text-yellow-400">$15</span>
            <span className="text-xl text-amber-200 ml-2">/month</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Exclusive Content & Access</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Monthly newsletter with behind-the-scenes stories and historical insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Exclusive access to rehearsal footage and production updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Early access to new performances and special events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Digital archive of historical documents and photographs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Community & Learning</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Monthly virtual workshops on women's history and storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Live Q&A sessions with cast members and historians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Private community forum for discussions and connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-lg">✦</span>
                  <span>Member-only events and special performances</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-700/30 rounded-lg p-6 text-center border border-amber-600/50">
            <h4 className="text-xl font-bold text-yellow-400 mb-3">Special Founding Member Benefits</h4>
            <p className="text-amber-100 mb-4">
              Join in our first year and receive exclusive founding member perks including a signed cast photo, 
              priority seating at live events, and your name in our digital hall of supporters.
            </p>
            <Badge className="bg-yellow-500 text-black px-3 py-1">
              Limited Time Offer
            </Badge>
          </div>

          <div className="text-center space-y-4">
            <Button 
              onClick={handleJoinCommunity}
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Join Threads of the Quilt Community
            </Button>
            <p className="text-amber-200 text-sm">
              Cancel anytime • No long-term commitment • Support independent theater
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold text-amber-800">Why Join Our Community?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl text-amber-700 mb-3">🎭</div>
              <h4 className="font-bold text-amber-800 mb-2">Support Live Theater</h4>
              <p className="text-gray-700 text-sm">
                Your membership directly supports independent theater and helps bring these important stories to life.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl text-amber-700 mb-3">📚</div>
              <h4 className="font-bold text-amber-800 mb-2">Learn History</h4>
              <p className="text-gray-700 text-sm mb-3">
                Discover untold stories of remarkable women who shaped Sedona and the American West.
              </p>
              <Button 
                onClick={handleLearnHistory}
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Explore Their Stories
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl text-amber-700 mb-3">🤝</div>
              <h4 className="font-bold text-amber-800 mb-2">Build Community</h4>
              <p className="text-gray-700 text-sm">
                Connect with like-minded individuals who value history, culture, and the power of storytelling.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
