import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ControlsSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  tierFilter: string;
  setTierFilter: (tier: string) => void;
  onRefresh: () => void;
}

const ControlsSection = ({ 
  searchTerm, 
  setSearchTerm, 
  tierFilter, 
  setTierFilter, 
  onRefresh 
}: ControlsSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Input
        placeholder="Search by honoree or purchaser name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1"
      />
      <Select value={tierFilter} onValueChange={setTierFilter}>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="All Tiers" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tiers</SelectItem>
          <SelectItem value="legacy">Legacy ($200)</SelectItem>
          <SelectItem value="premium">Premium ($100)</SelectItem>
          <SelectItem value="standard">Standard ($25)</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={onRefresh} variant="outline">
        Refresh Layout
      </Button>
    </div>
  );
};

export default ControlsSection;
