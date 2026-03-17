export const students = [
  {
    id: 's1',
    name: 'Alex Thompson',
    university: 'University of Manchester',
    courseYear: 'Year 2, Computer Science',
    budgetRange: { min: 500, max: 700 },
    preferredAreas: ['Fallowfield', 'Withington', 'Victoria Park'],
    lifestyle: {
      sleepSchedule: 'Night Owl',
      cleanliness: 'Very Clean',
      guestFrequency: 'Occasional',
      noiseTolerance: 'Medium',
      smoking: 'Non-smoker',
      studyStyle: 'Library-focused',
      socialVibe: 'Chilled Social'
    },
    bio: "Hey! I'm Alex. I spend most of my time coding or at the gym. Looking for a house that's clean and relatively quiet during the week.",
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
    tags: ['Tech Enthusiast', 'Gamer', 'Gym-goer'],
    idealHouseSize: 4
  },
  {
    id: 's2',
    name: 'Sarah Jenkins',
    university: 'Manchester Metropolitan',
    courseYear: 'Year 3, Fashion Design',
    budgetRange: { min: 600, max: 800 },
    preferredAreas: ['City Centre', 'Salford Quays'],
    lifestyle: {
      sleepSchedule: 'Early Bird',
      cleanliness: 'Moderate',
      guestFrequency: 'Frequent',
      noiseTolerance: 'High',
      smoking: 'Social-smoker',
      studyStyle: 'Home-studio',
      socialVibe: 'Outgoing Party'
    },
    bio: "Fashion student with too many clothes! I love hosting dinners and drinks. Ideally looking for a social house near the centre.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    tags: ['Creative', 'Cook', 'Social Butterfly'],
    idealHouseSize: 3
  },
  {
    id: 's3',
    name: 'Jordan Lee',
    university: 'University of Manchester',
    courseYear: 'Year 1, Economics',
    budgetRange: { min: 450, max: 600 },
    preferredAreas: ['Fallowfield', 'Rusholme'],
    lifestyle: {
      sleepSchedule: 'Regular',
      cleanliness: 'Moderate',
      guestFrequency: 'Rare',
      noiseTolerance: 'Low',
      smoking: 'Non-smoker',
      studyStyle: 'Quiet Room',
      socialVibe: 'Quiet & Private'
    },
    bio: "First year student looking for a focused environment. I'm pretty quiet but happy to chat over tea.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    tags: ['Bookworm', 'Piano Player', 'Quiet'],
    idealHouseSize: 5
  },
  {
    id: 's4',
    name: 'Maya Patel',
    university: 'University of Manchester',
    courseYear: 'Year 2, Medicine',
    budgetRange: { min: 550, max: 750 },
    preferredAreas: ['Victoria Park', 'Oxford Road'],
    lifestyle: {
      sleepSchedule: 'Regular',
      cleanliness: 'Very Clean',
      guestFrequency: 'Occasional',
      noiseTolerance: 'Medium',
      smoking: 'Non-smoker',
      studyStyle: 'Intense Home Study',
      socialVibe: 'Balanced'
    },
    bio: "Med student, so I'm often at the hospital or studying. I need a clean space to relax and recharge.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    tags: ['Coffee Addict', 'Runner', 'Organized'],
    idealHouseSize: 4
  }
];

export const houses = [
  {
    id: 'h1',
    address: '42 Egerton Road, Fallowfield',
    price: 650,
    billsIncluded: true,
    bedrooms: 4,
    bathrooms: 2,
    furnished: true,
    distance: '0.8 miles from campus',
    commuteTime: '15 min walk',
    description: 'Beautifully renovated 4-bedroom house in the heart of Fallowfield. Garden, spacious lounge, and modern kitchen.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop'
    ],
    features: ['Garden', 'Smart TV', 'High-speed WiFi', 'Dishwasher'],
    redFlags: ['Street parking is limited', 'Smallest room is quite compact']
  },
  {
    id: 'h2',
    address: '15 Highview Avenue, Victoria Park',
    price: 580,
    billsIncluded: false,
    bedrooms: 5,
    bathrooms: 3,
    furnished: true,
    distance: '0.4 miles from campus',
    commuteTime: '8 min walk',
    description: 'Huge Victorian property with high ceilings and original features. Perfect for a larger group wanting to be close to University.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop'
    ],
    features: ['En-suite rooms', 'Large kitchen', 'Secure bike storage'],
    redFlags: ['Older heating system', 'Basement is slightly damp']
  }
];

export const groups = [
  {
    id: 'g1',
    name: 'The Night Owls',
    members: ['s1', 's4'], // Alex and Maya
    formedDate: '2026-03-01',
    sharedPreferences: {
      budgetMax: 750,
      areas: ['Victoria Park', 'Oxford Road'],
      houseSize: 4
    }
  }
];
