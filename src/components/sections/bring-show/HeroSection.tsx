import { Star, Users, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Community
          <span className="block text-yellow-300">With Stories That Matter</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed opacity-90">
          Partner with us to bring this powerful celebration of women's history to your town. 
          A unique opportunity to honor local heroes while raising substantial funds for your organization.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <div className="flex items-center">
            <Star className="mr-2 text-yellow-300" size={24} />
            <span>Professional Production</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 text-yellow-300" size={24} />
            <span>Community Building</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-2 text-yellow-300" size={24} />
            <span>Significant Fundraising</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
