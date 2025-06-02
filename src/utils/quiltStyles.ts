export const getTierStyles = (tier: string) => {
  switch(tier) {
    case 'founder':
      return 'border-red-800 bg-gradient-to-br from-yellow-300 to-orange-400 border-4';
    case 'legacy':
      return 'border-orange-600 bg-gradient-to-br from-yellow-200 to-yellow-300';
    case 'premium':
      return 'border-yellow-700 bg-gradient-to-br from-amber-100 to-amber-200';
    default:
      return 'border-amber-800 bg-amber-50';
  }
};
