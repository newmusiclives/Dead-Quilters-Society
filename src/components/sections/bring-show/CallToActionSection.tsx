import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <Card className="bg-gradient-to-r from-amber-800 to-red-800 text-white shadow-2xl">
      <CardContent className="p-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make History in Your Community?
        </h3>
        <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
          Join us in celebrating the extraordinary women who built our communities. This isn't just a performance—it's a movement to preserve their stories while creating substantial funds for your organization's mission.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all">
            Start Your Partnership
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 px-10 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all">
            Schedule Consultation
          </Button>
        </div>
        <p className="text-lg mt-6 opacity-90">
          <strong>Limited partnerships available.</strong> Contact us today to secure your community's production.
        </p>
      </CardContent>
    </Card>
  );
};

export default CallToActionSection;
