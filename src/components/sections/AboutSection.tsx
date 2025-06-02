import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { performances } from "@/data/performances";

interface AboutSectionProps {
  setActiveSection: (section: string) => void;
}

const AboutSection = ({ setActiveSection }: AboutSectionProps) => (
  <div className="space-y-8">
    <div className="text-center py-8">
      <h2 className="text-4xl font-bold text-amber-800 mb-4">About The Show</h2>
      <p className="text-xl max-w-4xl mx-auto text-gray-700">
        A groundbreaking theatrical production celebrating the untold stories of five extraordinary women who shaped Sedona's history
      </p>
    </div>

    <Card className="p-8">
      <CardHeader>
        <CardTitle className="text-3xl text-amber-800">The Story Behind the Stories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg leading-relaxed">
          "The Dead Quilter's Society" was created by Emmy Award-winning writer Dev Ross and award-winning 
          songwriter/composer Shondra Jepperson. This original production tells the real stories of five women 
          from Sedona's history, exploring the ripple effects of their actions on our community—effects that 
          are still evident today.
        </p>
        <p className="text-lg leading-relaxed">
          Through a unique blend of music, storytelling, and theatrical performance, we bring to life the 
          forgotten narratives of visionaries, activists, healers, builders, and pioneers who dared to dream 
          and act in a time when women's voices were often silenced.
        </p>
        <p className="text-lg leading-relaxed">
          Each performance weaves together historical accuracy with compelling human drama, creating an 
          immersive experience that honors these women's legacies while inspiring audiences to recognize 
          the profound impact that individual courage and vision can have on entire communities.
        </p>
      </CardContent>
    </Card>

    {/* Performances Section */}
    <Card className="p-8" id="performances">
      <CardHeader>
        <CardTitle className="text-3xl text-amber-800 text-center mb-6">Upcoming Performances</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performances.map((performance, index) => (
            <Card key={index} className="border-l-4 border-amber-600 overflow-hidden">
              <div className="w-full h-48 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1605810230434-7631ac76ec81', // theater screens
                    '1473177104440-ffee2f376098', // cathedral interior
                    '1526374965328-7f61d4dc18c5'  // performance venue
                  ][index % 3]}?w=400&h=300&fit=crop&crop=center`}
                  alt={`${performance.venue} theater`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2">{performance.venue}</h3>
                <p className="font-semibold mb-1">{performance.date}</p>
                <p className="text-gray-600 mb-2">{performance.location}</p>
                {performance.special && (
                  <Badge className="bg-orange-100 text-orange-800 mb-3">{performance.special}</Badge>
                )}
                <div className="mt-4">
                  <Button className="bg-amber-600 hover:bg-amber-700 w-full">Get Tickets</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Creative Team Section */}
    <Card className="p-8">
      <CardHeader>
        <CardTitle className="text-3xl text-amber-800 text-center mb-6">Meet the Creative Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-800 mb-2">Dev Ross</h3>
            <p className="text-gray-600 font-semibold mb-3">Emmy Award-Winning Writer</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dev Ross brings years of experience in crafting compelling narratives that honor historical truth 
              while creating engaging theatrical experiences. Their Emmy Award-winning work demonstrates a 
              commitment to storytelling that both educates and inspires.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-800 mb-2">Shondra Jepperson</h3>
            <p className="text-gray-600 font-semibold mb-3">Music Composer & Songwriter</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Award-winning composer and songwriter Shondra Jepperson creates the musical heart of the production. 
              Her compositions capture the essence of each historical era while weaving together melodies that 
              bring these remarkable women's stories to life through song.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-amber-800 mb-2">Paul Saunders</h3>
            <p className="text-gray-600 font-semibold mb-3">Marketing & Tour Management</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Paul Saunders oversees the strategic marketing and tour management for The Dead Quilter's Society, 
              ensuring that these important stories reach audiences far beyond Sedona. His expertise helps bring 
              this cultural preservation project to communities nationwide.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-amber-800">The Creative Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our production combines traditional theatrical storytelling with innovative digital elements, 
            creating a multi-layered experience that bridges past and present.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Original music inspired by each woman's era and story</li>
            <li>• Authentic historical research and consultation</li>
            <li>• Immersive staging that brings Sedona's landscape to life</li>
            <li>• Community engagement through the Digital Quilt project</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-amber-800">Why These Stories Matter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            In an era where women's contributions to history are often overlooked, these five women's 
            stories offer powerful examples of leadership, innovation, and resilience.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Architectural vision that shaped spiritual tourism</li>
            <li>• Environmental activism that protected natural resources</li>
            <li>• Healthcare innovation that saved countless lives</li>
            <li>• Community building that fostered cultural diversity</li>
            <li>• Entrepreneurial spirit that opened doors for others</li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Card className="bg-gradient-to-r from-amber-800 to-amber-900 text-white">
      <CardContent className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">More Than Entertainment</h3>
        <p className="text-lg mb-6">
          The Dead Quilter's Society is a cultural preservation project, an educational initiative, 
          and a celebration of the enduring power of women's stories to inspire and transform.
        </p>
        <div className="space-x-4">
          <Button 
            onClick={() => setActiveSection('historical')}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            Meet the Women
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AboutSection;
