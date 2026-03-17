// ===== DURHAM AREAS =====
export const durhamAreas = [
  { id: 'nevilles-cross', name: 'Nevilles Cross', distanceToCampus: '0.8 miles', walkTime: '15 min', avgRent: 575, vibe: 'Quiet residential, popular with postgrads', lat: 54.770, lng: -1.590 },
  { id: 'gilesgate', name: 'Gilesgate', distanceToCampus: '0.5 miles', walkTime: '10 min', avgRent: 520, vibe: 'Central, great for city access', lat: 54.778, lng: -1.560 },
  { id: 'langley-moor', name: 'Langley Moor', distanceToCampus: '2.5 miles', walkTime: '45 min', avgRent: 440, vibe: 'Affordable suburb, bus route', lat: 54.755, lng: -1.600 },
  { id: 'viaduct', name: 'Viaduct', distanceToCampus: '0.3 miles', walkTime: '6 min', avgRent: 620, vibe: 'Premium location near campus', lat: 54.773, lng: -1.575 },
  { id: 'city-centre', name: 'City Centre', distanceToCampus: '0.4 miles', walkTime: '8 min', avgRent: 650, vibe: 'Heart of Durham, walkable everywhere', lat: 54.776, lng: -1.573 },
  { id: 'claypath', name: 'Claypath', distanceToCampus: '0.3 miles', walkTime: '5 min', avgRent: 600, vibe: 'Trendy, close to shops and nightlife', lat: 54.778, lng: -1.568 },
  { id: 'framwellgate-moor', name: 'Framwellgate Moor', distanceToCampus: '1.5 miles', walkTime: '28 min', avgRent: 480, vibe: 'Quiet suburb, good bus links', lat: 54.790, lng: -1.585 },
];

// ===== STUDENTS =====
export const students = [
  {
    id: 's1', name: 'Alex Thompson', avatar: 'https://i.pravatar.cc/150?img=11',
    email: 'alex.thompson@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Computer Science', college: 'Collingwood',
    age: 20, gender: 'Male',
    budget: { min: 500, max: 650 }, preferredAreas: ['viaduct', 'city-centre', 'claypath'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Shared', sleepSchedule: 'Night Owl', cleanliness: 'Clean',
    noiseTolerance: 'Medium', guestFrequency: 'Occasional', smoking: 'Non-smoker',
    studyStyle: 'Library', socialVibe: 'Balanced', genderPref: 'No preference',
    dealbreakers: ['Smoking indoors', 'Pets'],
    bio: 'CS student who codes at night and loves hiking on weekends. Looking for chill housemates who keep common areas tidy.',
  },
  {
    id: 's2', name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?img=5',
    email: 'sarah.jenkins@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'English Literature', college: 'St Marys',
    age: 20, gender: 'Female',
    budget: { min: 450, max: 600 }, preferredAreas: ['nevilles-cross', 'viaduct', 'city-centre'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Ensuite preferred', sleepSchedule: 'Early Bird', cleanliness: 'Very Clean',
    noiseTolerance: 'Low', guestFrequency: 'Rarely', smoking: 'Non-smoker',
    studyStyle: 'Home', socialVibe: 'Quiet', genderPref: 'Female only',
    dealbreakers: ['Loud parties', 'Smoking'],
    bio: 'Bookworm who enjoys quiet evenings, early mornings, and the occasional coffee shop study session.',
  },
  {
    id: 's3', name: 'James Okafor', avatar: 'https://i.pravatar.cc/150?img=12',
    email: 'james.okafor@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Business & Management', college: 'Hatfield',
    age: 21, gender: 'Male',
    budget: { min: 550, max: 700 }, preferredAreas: ['city-centre', 'claypath', 'viaduct'],
    moveInDate: 'July 2026', preferredHouseSize: 5,
    bathroomPref: 'Shared', sleepSchedule: 'Night Owl', cleanliness: 'Clean',
    noiseTolerance: 'High', guestFrequency: 'Often', smoking: 'Non-smoker',
    studyStyle: 'Library', socialVibe: 'Social', genderPref: 'No preference',
    dealbreakers: ['Smoking indoors'],
    bio: 'Social butterfly, gym 5x a week. Big on hosting dinners and watching football with mates.',
  },
  {
    id: 's4', name: 'Maya Patel', avatar: 'https://i.pravatar.cc/150?img=25',
    email: 'maya.patel@durham.ac.uk', verified: true,
    year: 'Year 3', course: 'Biomedical Sciences', college: 'Josephine Butler',
    age: 21, gender: 'Female',
    budget: { min: 480, max: 580 }, preferredAreas: ['nevilles-cross', 'gilesgate', 'framwellgate-moor'],
    moveInDate: 'July 2026', preferredHouseSize: 3,
    bathroomPref: 'Ensuite preferred', sleepSchedule: 'Early Bird', cleanliness: 'Very Clean',
    noiseTolerance: 'Low', guestFrequency: 'Rarely', smoking: 'Non-smoker',
    studyStyle: 'Home', socialVibe: 'Quiet', genderPref: 'Female only',
    dealbreakers: ['Smoking', 'Late night noise'],
    bio: 'Final year medic. Need a quiet, clean space for dissertation work. Love cooking and yoga.',
  },
  {
    id: 's5', name: 'Tom Richardson', avatar: 'https://i.pravatar.cc/150?img=13',
    email: 'tom.richardson@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'History', college: 'Van Mildert',
    age: 20, gender: 'Male',
    budget: { min: 420, max: 550 }, preferredAreas: ['langley-moor', 'framwellgate-moor', 'gilesgate'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Shared', sleepSchedule: 'Night Owl', cleanliness: 'Relaxed',
    noiseTolerance: 'High', guestFrequency: 'Often', smoking: 'Social smoker',
    studyStyle: 'Library', socialVibe: 'Social', genderPref: 'No preference',
    dealbreakers: [],
    bio: 'History nerd, rugby player, and enthusiastic cook (varying results). Looking for a fun house.',
  },
  {
    id: 's6', name: 'Chloe Williams', avatar: 'https://i.pravatar.cc/150?img=9',
    email: 'chloe.williams@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Psychology', college: 'Trevelyan',
    age: 20, gender: 'Female',
    budget: { min: 500, max: 620 }, preferredAreas: ['viaduct', 'city-centre', 'nevilles-cross'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Shared', sleepSchedule: 'Regular', cleanliness: 'Clean',
    noiseTolerance: 'Medium', guestFrequency: 'Occasional', smoking: 'Non-smoker',
    studyStyle: 'Mix', socialVibe: 'Balanced', genderPref: 'No preference',
    dealbreakers: ['Smoking indoors'],
    bio: 'Psych student who runs the film society. Love a good movie night and Sunday roasts.',
  },
  {
    id: 's7', name: 'Daniel Kim', avatar: 'https://i.pravatar.cc/150?img=14',
    email: 'daniel.kim@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Physics', college: 'Grey',
    age: 20, gender: 'Male',
    budget: { min: 520, max: 640 }, preferredAreas: ['claypath', 'city-centre', 'gilesgate'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Shared', sleepSchedule: 'Night Owl', cleanliness: 'Clean',
    noiseTolerance: 'Medium', guestFrequency: 'Occasional', smoking: 'Non-smoker',
    studyStyle: 'Library', socialVibe: 'Balanced', genderPref: 'No preference',
    dealbreakers: ['Pets'],
    bio: 'Physics major, pianist, and coffee addict. I study late but keep headphones on.',
  },
  {
    id: 's8', name: 'Emily Watson', avatar: 'https://i.pravatar.cc/150?img=16',
    email: 'emily.watson@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Law', college: 'St Chads',
    age: 20, gender: 'Female',
    budget: { min: 550, max: 680 }, preferredAreas: ['city-centre', 'viaduct', 'claypath'],
    moveInDate: 'July 2026', preferredHouseSize: 5,
    bathroomPref: 'Ensuite preferred', sleepSchedule: 'Early Bird', cleanliness: 'Very Clean',
    noiseTolerance: 'Low', guestFrequency: 'Rarely', smoking: 'Non-smoker',
    studyStyle: 'Home', socialVibe: 'Quiet', genderPref: 'Female only',
    dealbreakers: ['Smoking', 'Regular parties'],
    bio: 'Law student with strong opinions on contract law and even stronger opinions on kitchen cleanliness.',
  },
  {
    id: 's9', name: 'Ryan Hughes', avatar: 'https://i.pravatar.cc/150?img=17',
    email: 'ryan.hughes@durham.ac.uk', verified: true,
    year: 'Year 3', course: 'Economics', college: 'University',
    age: 21, gender: 'Male',
    budget: { min: 480, max: 600 }, preferredAreas: ['gilesgate', 'langley-moor', 'framwellgate-moor'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Shared', sleepSchedule: 'Regular', cleanliness: 'Clean',
    noiseTolerance: 'Medium', guestFrequency: 'Occasional', smoking: 'Non-smoker',
    studyStyle: 'Mix', socialVibe: 'Balanced', genderPref: 'No preference',
    dealbreakers: [],
    bio: 'Final year econ student, part-time barista. Looking for value and good vibes.',
  },
  {
    id: 's10', name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?img=26',
    email: 'priya.sharma@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Chemistry', college: 'Aidan',
    age: 19, gender: 'Female',
    budget: { min: 460, max: 560 }, preferredAreas: ['nevilles-cross', 'gilesgate', 'viaduct'],
    moveInDate: 'July 2026', preferredHouseSize: 3,
    bathroomPref: 'Shared', sleepSchedule: 'Early Bird', cleanliness: 'Very Clean',
    noiseTolerance: 'Low', guestFrequency: 'Rarely', smoking: 'Non-smoker',
    studyStyle: 'Home', socialVibe: 'Quiet', genderPref: 'Female only',
    dealbreakers: ['Smoking', 'Loud music'],
    bio: 'Vegetarian chemist who spends weekends hiking and baking. Love a clean, cosy house.',
  },
  {
    id: 's11', name: 'Marcus Green', avatar: 'https://i.pravatar.cc/150?img=18',
    email: 'marcus.green@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Geography', college: 'Collingwood',
    age: 20, gender: 'Male',
    budget: { min: 500, max: 620 }, preferredAreas: ['city-centre', 'viaduct', 'claypath'],
    moveInDate: 'July 2026', preferredHouseSize: 5,
    bathroomPref: 'Shared', sleepSchedule: 'Night Owl', cleanliness: 'Relaxed',
    noiseTolerance: 'High', guestFrequency: 'Often', smoking: 'Non-smoker',
    studyStyle: 'Library', socialVibe: 'Social', genderPref: 'No preference',
    dealbreakers: [],
    bio: 'Geography student, DJ on weekends. Looking for a house that can handle the occasional pre-drinks.',
  },
  {
    id: 's12', name: 'Olivia Chen', avatar: 'https://i.pravatar.cc/150?img=20',
    email: 'olivia.chen@durham.ac.uk', verified: true,
    year: 'Year 2', course: 'Medicine', college: 'John Snow',
    age: 20, gender: 'Female',
    budget: { min: 530, max: 650 }, preferredAreas: ['viaduct', 'city-centre', 'nevilles-cross'],
    moveInDate: 'July 2026', preferredHouseSize: 4,
    bathroomPref: 'Ensuite preferred', sleepSchedule: 'Early Bird', cleanliness: 'Very Clean',
    noiseTolerance: 'Medium', guestFrequency: 'Occasional', smoking: 'Non-smoker',
    studyStyle: 'Mix', socialVibe: 'Balanced', genderPref: 'No preference',
    dealbreakers: ['Smoking'],
    bio: 'Med student, early riser. Love cooking elaborate meals and hosting tasteful dinner parties.',
  },
];

// ===== PROPERTIES =====
export const properties = [
  {
    id: 'p1', title: '4-Bed Victorian Terrace',
    address: '12 Sutton Street', area: 'viaduct',
    rent: 2200, rentPP: 550, bedrooms: 4, bathrooms: 2,
    billsIncluded: false, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [3, 4],
    description: 'Charming Victorian terrace just minutes from campus. Spacious living room, modern kitchen with dishwasher, and a small private garden. Two bathrooms upstairs. Recently redecorated with new carpets throughout.',
    features: ['Garden', 'Dishwasher', 'Double glazing', 'Central heating', 'Washing machine'],
    photos: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600'],
    landlordId: 'l1',
    estBills: 60,
  },
  {
    id: 'p2', title: '5-Bed End Terrace with Garden',
    address: '34 Whinney Hill', area: 'gilesgate',
    rent: 2500, rentPP: 500, bedrooms: 5, bathrooms: 2,
    billsIncluded: true, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [4, 5],
    description: 'Spacious 5-bedroom end terrace in popular Gilesgate. All bills included in rent. Large garden, two shower rooms, and comfortable living space. 10 minute walk to Science Site.',
    features: ['All bills included', 'Garden', 'Dryer', 'Bike storage', 'Recently refurbished'],
    photos: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600'],
    landlordId: 'l1',
    estBills: 0,
  },
  {
    id: 'p3', title: 'Modern 3-Bed Apartment',
    address: '8 Freeman\'s Place', area: 'city-centre',
    rent: 2100, rentPP: 700, bedrooms: 3, bathrooms: 2,
    billsIncluded: false, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [3],
    description: 'Stylish city centre apartment with open plan kitchen-living area. Two modern bathrooms including one ensuite. Fantastic views of the cathedral. Secure entry system.',
    features: ['City centre', 'Ensuite master', 'Secure entry', 'Modern kitchen', 'Cathedral views'],
    photos: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600'],
    landlordId: 'l2',
    estBills: 70,
  },
  {
    id: 'p4', title: '4-Bed Semi-Detached House',
    address: '22 Crossgate Peth', area: 'nevilles-cross',
    rent: 2000, rentPP: 500, bedrooms: 4, bathrooms: 1,
    billsIncluded: false, furnished: true,
    availableDate: 'August 2026', suitableGroupSize: [3, 4],
    description: 'Quiet semi-detached house in leafy Nevilles Cross. Large rear garden, driveway parking, and a converted attic bedroom. Perfect for students who want a calmer living environment.',
    features: ['Driveway parking', 'Large garden', 'Attic room', 'Quiet street', 'Near Tesco'],
    photos: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600'],
    landlordId: 'l1',
    estBills: 55,
  },
  {
    id: 'p5', title: '6-Bed Detached on Claypath',
    address: '45 Claypath', area: 'claypath',
    rent: 3300, rentPP: 550, bedrooms: 6, bathrooms: 3,
    billsIncluded: false, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [5, 6],
    description: 'Huge 6-bedroom detached property right on Claypath. Three bathrooms, massive kitchen-diner, and a separate lounge. Walking distance to everything. Ideal for a big social group.',
    features: ['3 bathrooms', 'Large kitchen-diner', 'Separate lounge', 'Central location', 'Newly renovated'],
    photos: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600'],
    landlordId: 'l2',
    estBills: 50,
  },
  {
    id: 'p6', title: '3-Bed Cottage near Campus',
    address: '7 Albert Street', area: 'viaduct',
    rent: 1800, rentPP: 600, bedrooms: 3, bathrooms: 1,
    billsIncluded: true, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [3],
    description: 'Cosy stone-built cottage just off the Viaduct. All bills included. Small but well-maintained with a lovely courtyard garden. 5 minutes to campus on foot.',
    features: ['All bills included', 'Courtyard', 'Stone character', 'Close to campus', 'Cosy living room'],
    photos: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600'],
    landlordId: 'l1',
    estBills: 0,
  },
  {
    id: 'p7', title: '4-Bed House on Framwellgate',
    address: '19 Front Street', area: 'framwellgate-moor',
    rent: 1800, rentPP: 450, bedrooms: 4, bathrooms: 1,
    billsIncluded: false, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [3, 4],
    description: 'Affordable 4-bedroom house in Framwellgate Moor. Good bus links to campus, quiet residential street. Includes washing machine, dryer, and a decent-sized garden. Great value for budget-conscious students.',
    features: ['Budget-friendly', 'Bus route', 'Garden', 'Dryer', 'Quiet area'],
    photos: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600'],
    landlordId: 'l2',
    estBills: 55,
  },
  {
    id: 'p8', title: '5-Bed Terrace on Gilesgate',
    address: '28 Gilesgate', area: 'gilesgate',
    rent: 2375, rentPP: 475, bedrooms: 5, bathrooms: 2,
    billsIncluded: false, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [4, 5],
    description: 'Well-maintained terrace on Gilesgate main road. Recently updated kitchen and bathrooms. Walking distance to campus, shops, and Tesco. Good-sized bedrooms, two with double beds.',
    features: ['Updated kitchen', 'Two bathrooms', 'Near shops', 'Double beds', 'Walking to campus'],
    photos: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600'],
    landlordId: 'l1',
    estBills: 58,
  },
  {
    id: 'p9', title: '3-Bed Budget Flat',
    address: '5 Hawthorn Terrace', area: 'langley-moor',
    rent: 1200, rentPP: 400, bedrooms: 3, bathrooms: 1,
    billsIncluded: false, furnished: false,
    availableDate: 'August 2026', suitableGroupSize: [2, 3],
    description: 'Affordable unfurnished flat in Langley Moor. Perfect for students on a budget. Regular bus service to campus. Needs some furnishing but rent is very competitive.',
    features: ['Very affordable', 'Bus service', 'Quiet neighbourhood', 'Supermarket nearby', 'Off-street parking'],
    photos: ['https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600'],
    landlordId: 'l2',
    estBills: 50,
  },
  {
    id: 'p10', title: '4-Bed Luxury House',
    address: '3 Cathedral Close', area: 'city-centre',
    rent: 2800, rentPP: 700, bedrooms: 4, bathrooms: 3,
    billsIncluded: true, furnished: true,
    availableDate: 'July 2026', suitableGroupSize: [4],
    description: 'Premium city centre property with cathedral views. Three ensuite bathrooms, underfloor heating, and a chef\'s kitchen. All bills included. For students who want the best Durham has to offer.',
    features: ['All bills included', '3 ensuites', 'Underfloor heating', 'Cathedral views', 'Premium fixtures'],
    photos: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600'],
    landlordId: 'l2',
    estBills: 0,
  },
];

// ===== GROUPS =====
export const groups = [
  {
    id: 'g1', name: 'The Viaduct Crew', memberIds: ['s1', 's3', 's6'], maxSize: 4, needsMore: 1,
    status: 'Recruiting', preferredAreas: ['viaduct', 'city-centre', 'claypath'],
    avgBudget: 573, targetHouseSize: 4,
    chatMessages: [
      { sender: 's1', text: 'Hey team! Found some great houses near Viaduct 🏠', time: '10:30 AM', date: 'Today' },
      { sender: 's3', text: 'Nice! Budget-wise we\'re looking good if we find a 4-bed', time: '10:45 AM', date: 'Today' },
      { sender: 's6', text: 'I saw one on Sutton Street that looked amazing', time: '11:02 AM', date: 'Today' },
      { sender: 'system', text: '🏡 New property match: "4-Bed Victorian Terrace" on Sutton Street — 88% group fit', time: '11:15 AM', date: 'Today' },
      { sender: 's1', text: 'That\'s the one! Should we request a viewing?', time: '11:20 AM', date: 'Today' },
      { sender: 's3', text: 'I\'m free Saturday afternoon if that works for everyone?', time: '11:25 AM', date: 'Today' },
    ],
  },
  {
    id: 'g2', name: 'Quiet Study House', memberIds: ['s2', 's4', 's10'], maxSize: 3, needsMore: 0,
    status: 'Complete', preferredAreas: ['nevilles-cross', 'gilesgate'],
    avgBudget: 530, targetHouseSize: 3,
    chatMessages: [
      { sender: 's2', text: 'Hi both! So glad we matched. The Nevilles Cross cottage looks perfect for us.', time: '9:00 AM', date: 'Yesterday' },
      { sender: 's4', text: 'Agreed! Quiet area, right budget, and all bills included.', time: '9:15 AM', date: 'Yesterday' },
      { sender: 's10', text: 'Love it. Should we book a viewing this week?', time: '9:30 AM', date: 'Yesterday' },
      { sender: 'system', text: '✅ Viewing request sent for "3-Bed Cottage near Campus" — awaiting landlord confirmation', time: '9:45 AM', date: 'Yesterday' },
    ],
  },
  {
    id: 'g3', name: 'The Party Palace', memberIds: ['s5', 's11'], maxSize: 5, needsMore: 3,
    status: 'Recruiting', preferredAreas: ['city-centre', 'claypath', 'gilesgate'],
    avgBudget: 520, targetHouseSize: 5,
    chatMessages: [
      { sender: 's5', text: 'Right lads, we need 3 more for a massive house on Claypath!', time: '8:00 PM', date: 'Yesterday' },
      { sender: 's11', text: 'Putting the word out. That 6-bed looks unreal 🔥', time: '8:10 PM', date: 'Yesterday' },
      { sender: 'system', text: '👥 Your group is recruiting — 3 compatible students have been recommended', time: '8:30 PM', date: 'Yesterday' },
    ],
  },
];

// ===== LANDLORDS =====
export const landlords = [
  {
    id: 'l1', name: 'Durham Student Lets', email: 'info@durhamstudentlets.co.uk',
    avatar: 'https://i.pravatar.cc/150?img=60', phone: '0191 384 xxxx',
    propertyIds: ['p1', 'p2', 'p4', 'p6', 'p8'],
    bio: 'Family-run letting agency serving Durham students since 2005. We pride ourselves on responsive maintenance and fair tenancy agreements.',
    verified: true, responseTime: 'Within 24 hours', rating: 4.7,
    viewingRequests: [
      { id: 'vr1', groupId: 'g2', propertyId: 'p6', status: 'Pending', requestedDate: 'Saturday 22 Mar, 2:00 PM', message: 'Hi, we\'re a group of 3 very clean, quiet students. Would love to view the cottage!', submittedAt: 'Yesterday' },
    ],
  },
  {
    id: 'l2', name: 'Castle Properties Durham', email: 'lettings@castleproperties.co.uk',
    avatar: 'https://i.pravatar.cc/150?img=68', phone: '0191 375 xxxx',
    propertyIds: ['p3', 'p5', 'p7', 'p9', 'p10'],
    bio: 'Premium and budget student accommodation in Durham. Large portfolio covering all major student areas. Professional management team.',
    verified: true, responseTime: 'Within 12 hours', rating: 4.5,
    viewingRequests: [],
  },
];

// ===== MATCHING LOGIC =====
export function calculateCompatibility(a, b) {
  let score = 0;
  let reasons = [];
  let frictions = [];

  // Budget overlap (max 20)
  const budgetOverlap = Math.max(0, Math.min(a.budget.max, b.budget.max) - Math.max(a.budget.min, b.budget.min));
  const maxRange = Math.max(a.budget.max - a.budget.min, b.budget.max - b.budget.min) || 1;
  const budgetScore = Math.min(20, Math.round((budgetOverlap / maxRange) * 20));
  score += budgetScore;
  if (budgetScore >= 15) reasons.push('Strong budget alignment');
  else if (budgetScore < 8) frictions.push('Different budget ranges');

  // Area overlap (max 15)
  const commonAreas = a.preferredAreas.filter(ar => b.preferredAreas.includes(ar));
  const areaScore = Math.min(15, commonAreas.length * 5);
  score += areaScore;
  if (commonAreas.length >= 2) reasons.push(`Shared area interest: ${commonAreas.map(id => durhamAreas.find(a => a.id === id)?.name).join(', ')}`);
  if (commonAreas.length === 0) frictions.push('No shared area preferences');

  // Sleep schedule (max 12)
  const sleepMap = { 'Early Bird': 0, 'Regular': 1, 'Night Owl': 2 };
  const sleepDiff = Math.abs((sleepMap[a.sleepSchedule] || 1) - (sleepMap[b.sleepSchedule] || 1));
  const sleepScore = sleepDiff === 0 ? 12 : sleepDiff === 1 ? 7 : 2;
  score += sleepScore;
  if (sleepDiff === 0) reasons.push(`Both ${a.sleepSchedule.toLowerCase()}s`);
  if (sleepDiff === 2) frictions.push('Very different sleep schedules');

  // Cleanliness (max 12)
  const cleanMap = { 'Very Clean': 2, 'Clean': 1, 'Relaxed': 0 };
  const cleanDiff = Math.abs((cleanMap[a.cleanliness] || 1) - (cleanMap[b.cleanliness] || 1));
  const cleanScore = cleanDiff === 0 ? 12 : cleanDiff === 1 ? 7 : 2;
  score += cleanScore;
  if (cleanDiff === 0) reasons.push('Same cleanliness standards');
  if (cleanDiff === 2) frictions.push('Very different cleanliness expectations');

  // Noise tolerance (max 10)
  const noiseMap = { 'Low': 0, 'Medium': 1, 'High': 2 };
  const noiseDiff = Math.abs((noiseMap[a.noiseTolerance] || 1) - (noiseMap[b.noiseTolerance] || 1));
  const noiseScore = noiseDiff === 0 ? 10 : noiseDiff === 1 ? 6 : 2;
  score += noiseScore;
  if (noiseDiff === 0) reasons.push('Compatible noise tolerance');
  if (noiseDiff === 2) frictions.push('Very different noise tolerance');

  // Guest frequency (max 8)
  const guestMap = { 'Rarely': 0, 'Occasional': 1, 'Often': 2 };
  const guestDiff = Math.abs((guestMap[a.guestFrequency] || 1) - (guestMap[b.guestFrequency] || 1));
  const guestScore = guestDiff === 0 ? 8 : guestDiff === 1 ? 5 : 1;
  score += guestScore;
  if (guestDiff === 0) reasons.push('Similar guest preferences');

  // Smoking compatibility (max 8)
  const smokingCompat = (a.smoking === b.smoking) ? 8 : (a.smoking === 'Non-smoker' && b.smoking !== 'Non-smoker') ? 2 : 5;
  score += smokingCompat;
  if (a.smoking === b.smoking) reasons.push('Same smoking preference');
  if (a.smoking === 'Non-smoker' && b.smoking === 'Social smoker') frictions.push('Smoking preference conflict');

  // Social vibe (max 8)
  const vibeMap = { 'Quiet': 0, 'Balanced': 1, 'Social': 2 };
  const vibeDiff = Math.abs((vibeMap[a.socialVibe] || 1) - (vibeMap[b.socialVibe] || 1));
  const vibeScore = vibeDiff === 0 ? 8 : vibeDiff === 1 ? 5 : 1;
  score += vibeScore;
  if (vibeDiff === 0) reasons.push(`Both enjoy a ${a.socialVibe.toLowerCase()} vibe`);
  if (vibeDiff === 2) frictions.push('Very different social preferences');

  // House size (max 7)
  const sizeDiff = Math.abs(a.preferredHouseSize - b.preferredHouseSize);
  const sizeScore = sizeDiff === 0 ? 7 : sizeDiff === 1 ? 4 : 1;
  score += sizeScore;
  if (sizeDiff === 0) reasons.push(`Both want a ${a.preferredHouseSize}-bed house`);

  return { score: Math.min(100, score), reasons, frictions };
}

export function calculateGroupHouseFit(group, house, allStudents) {
  const members = group.memberIds.map(id => allStudents.find(s => s.id === id)).filter(Boolean);
  if (!members.length) return { score: 0, reasons: [], issues: [] };

  let score = 0;
  let reasons = [];
  let issues = [];

  // Size match (max 25)
  const sizeOk = house.suitableGroupSize.includes(members.length) || house.suitableGroupSize.includes(group.maxSize);
  const bedroomFit = house.bedrooms >= members.length;
  if (sizeOk && bedroomFit) { score += 25; reasons.push(`${house.bedrooms} beds fits your group of ${members.length}`); }
  else if (bedroomFit) { score += 15; reasons.push('Enough bedrooms available'); }
  else { score += 5; issues.push(`Only ${house.bedrooms} beds for ${members.length} people`); }

  // Budget match (max 25)
  const avgBudgetMax = members.reduce((s, m) => s + m.budget.max, 0) / members.length;
  const avgBudgetMin = members.reduce((s, m) => s + m.budget.min, 0) / members.length;
  const totalCostPP = house.rentPP + (house.billsIncluded ? 0 : house.estBills);
  if (totalCostPP <= avgBudgetMax && totalCostPP >= avgBudgetMin) { score += 25; reasons.push(`£${totalCostPP}/pp fits your group budget`); }
  else if (totalCostPP <= avgBudgetMax) { score += 18; reasons.push('Within upper budget range'); }
  else if (totalCostPP <= avgBudgetMax * 1.1) { score += 10; issues.push(`£${totalCostPP}/pp is slightly above average budget`); }
  else { score += 3; issues.push(`£${totalCostPP}/pp exceeds group budget`); }

  // Area match (max 20)
  const areaPrefs = [...new Set(members.flatMap(m => m.preferredAreas))];
  if (areaPrefs.includes(house.area)) { score += 20; reasons.push(`${durhamAreas.find(a => a.id === house.area)?.name} is a preferred area`); }
  else { score += 5; issues.push('Area not in group preferences'); }

  // Bills included (max 10)
  if (house.billsIncluded) { score += 10; reasons.push('All bills included — no surprises'); }
  else { score += 5; }

  // Bathroom ratio (max 10)
  const ratio = house.bathrooms / members.length;
  if (ratio >= 0.5) { score += 10; reasons.push('Good bathroom-to-person ratio'); }
  else if (ratio >= 0.33) { score += 6; }
  else { score += 2; issues.push('Limited bathroom availability'); }

  // Move-in date (max 10)
  const dateMatch = members.every(m => m.moveInDate === house.availableDate);
  if (dateMatch) { score += 10; reasons.push('Move-in date aligns perfectly'); }
  else { score += 5; }

  return { score: Math.min(100, score), reasons, issues };
}
