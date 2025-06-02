// Default quilt square images for standard tier
export const defaultQuiltImages = [
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop', // orange flowers
  'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=400&fit=crop', // desert sand
  'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop', // pine trees
  'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop', // yellow lights
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop', // forest heat
];

export const getRandomQuiltImage = () => {
  return defaultQuiltImages[Math.floor(Math.random() * defaultQuiltImages.length)];
};

export interface QuiltSquare {
  id: number | string;
  tier: string;
  honoreeName: string;
  purchaserName: string;
  tribute: string;
  photos: string[];
  date: string;
  isPlaceholder?: boolean;
}

export const quiltSquares: QuiltSquare[] = [
  {
    id: 1,
    tier: 'legacy',
    honoreeName: 'Rosa Parks',
    purchaserName: 'Sarah Johnson',
    tribute: 'A woman who changed the world by refusing to give up her seat. Your courage continues to inspire generations of women to stand up for what is right.',
    photos: ['https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400', 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400', 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400'],
    date: '2025-05-20'
  },
  {
    id: 2,
    tier: 'legacy',
    honoreeName: 'Marie Curie',
    purchaserName: 'Dr. Jennifer Smith',
    tribute: 'The first woman to win a Nobel Prize, and the only person to win Nobel Prizes in two different sciences. Your dedication to discovery opened doors for women in science.',
    photos: ['https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400', 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400', 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400'],
    date: '2025-05-19'
  },
  {
    id: 3,
    tier: 'premium',
    honoreeName: 'Eleanor Roosevelt',
    purchaserName: 'Mary Wilson',
    tribute: 'A champion of human rights and the longest-serving First Lady. You redefined what it meant to be a woman in public service.',
    photos: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'],
    date: '2025-05-18'
  },
  {
    id: 4,
    tier: 'standard',
    honoreeName: 'My Grandmother Helen',
    purchaserName: 'Anonymous',
    tribute: 'She taught me that strength comes not from what you can do, but from overcoming the things you thought you couldn\'t.',
    photos: ['https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop'],
    date: '2025-05-17'
  },
  {
    id: 5,
    tier: 'legacy',
    honoreeName: 'Frida Kahlo',
    purchaserName: 'Maria Rodriguez',
    tribute: 'A revolutionary artist who turned pain into beauty and showed the world that art can heal. Your self-portraits continue to inspire women to embrace their authentic selves.',
    photos: ['https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400', 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400'],
    date: '2025-05-16'
  },
  {
    id: 6,
    tier: 'premium',
    honoreeName: 'Maya Angelou',
    purchaserName: 'Linda Thompson',
    tribute: 'A poet whose words lifted spirits and opened minds. You showed us that our stories have power and that rising above adversity makes us stronger.',
    photos: ['https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400'],
    date: '2025-05-15'
  },
  {
    id: 7,
    tier: 'premium',
    honoreeName: 'Amelia Earhart',
    purchaserName: 'Captain Susan Davis',
    tribute: 'A pioneer who soared through glass ceilings and showed women that the sky is not the limit. Your adventurous spirit continues to inspire us to reach new heights.',
    photos: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400'],
    date: '2025-05-14'
  },
  {
    id: 8,
    tier: 'standard',
    honoreeName: 'My Mother Patricia',
    purchaserName: 'Emily Chen',
    tribute: 'A woman who juggled work, family, and dreams with grace. You showed me that love is the strongest force in the universe.',
    photos: ['https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=400&fit=crop'],
    date: '2025-05-13'
  },
  {
    id: 9,
    tier: 'standard',
    honoreeName: 'My Aunt Dorothy',
    purchaserName: 'Rebecca Miller',
    tribute: 'The family historian who kept our stories alive. Your wisdom and humor made every family gathering special.',
    photos: ['https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop'],
    date: '2025-05-12'
  },
  {
    id: 10,
    tier: 'legacy',
    honoreeName: 'Malala Yousafzai',
    purchaserName: 'Teachers Union Local 405',
    tribute: 'A young woman who proved that education is the most powerful weapon for change. Your courage in standing up for girls\' education continues to inspire the world.',
    photos: ['https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400', 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400'],
    date: '2025-05-11'
  },
  {
    id: 11,
    tier: 'premium',
    honoreeName: 'Ruth Bader Ginsburg',
    purchaserName: 'Women\'s Law Association',
    tribute: 'A trailblazing justice who fought tirelessly for gender equality. Your dissents became battle cries for a more just world.',
    photos: ['https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400'],
    date: '2025-05-10'
  },
  {
    id: 12,
    tier: 'standard',
    honoreeName: 'My Teacher Mrs. Rodriguez',
    purchaserName: 'Class of 2010',
    tribute: 'You believed in us when we didn\'t believe in ourselves. Your dedication shaped countless futures.',
    photos: ['https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=400&fit=crop'],
    date: '2025-05-09'
  }
];

// Placeholder square that appears on every load
export const placeholderSquare: QuiltSquare = {
  id: 'placeholder',
  tier: 'standard',
  honoreeName: 'Honor Someone Special',
  purchaserName: 'Your Square Could Be Here',
  tribute: 'Create a lasting tribute in our Digital Quilt Memorial.',
  photos: [getRandomQuiltImage()],
  date: new Date().toISOString().split('T')[0],
  isPlaceholder: true
};

export const pricingTiers = [
  {
    name: 'Standard Square',
    price: '$25',
    features: ['Honoree\'s name', '150-word tribute', 'Place in digital quilt display', 'Beautiful default quilt pattern'],
    tier: 'standard'
  },
  {
    name: 'Premium Square',
    price: '$100',
    features: ['Honoree\'s name', 'Upload one photo', '300-word tribute', 'Enhanced display styling'],
    tier: 'premium'
  },
  {
    name: 'Legacy Square',
    price: '$200',
    features: ['Honoree\'s name', 'Upload up to 3 photos', '500-word tribute', 'Photo carousel display'],
    tier: 'legacy'
  }
];
