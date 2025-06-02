import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutIntroSection = () => {
  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle className="text-3xl text-amber-800 text-center">A Cultural Legacy & Investment Opportunity</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed mb-6">
          In the heart of Sedona, where red rocks meet boundless sky, a remarkable story is taking shape—one 
          that weaves together the forgotten threads of five extraordinary women whose lives and legacies have 
          shaped this community. The Dead Quilter's Society isn't just a production; it's a movement to preserve 
          history, celebrate female resilience, and share Sedona's unique cultural heritage with the world.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutIntroSection;
