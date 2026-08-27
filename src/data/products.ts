import { Product } from '../types';
import voltStrikerImage from '../assets/images/regenerated_image_1787829293787.jpg';
import stealthBlackProImage from '../assets/images/regenerated_image_1787829297636.jpg';
import kineticTrackPantsImage from '../assets/images/regenerated_image_1787829638629.jpg';
import cricketChampionshipImage from '../assets/images/regenerated_image_1787829645655.jpg';
import fullSquadSetVoltImage from '../assets/images/regenerated_image_1787829648158.jpg';
import blazeCrimsonImage from '../assets/images/regenerated_image_1787829649448.jpg';
import cyberFrostBlueImage from '../assets/images/regenerated_image_1787829964247.jpg';
import techFleeceJoggersImage from '../assets/images/regenerated_image_1787829970258.jpg';

export const OWNER_PHONE_RAW = '917007499344';
export const OWNER_WHATSAPP_NUMBER = '+917007499344';
export const OWNER_WHATSAPP_DISPLAY = '+91 70074 99344';

export const SIZE_CHART = [
  { size: 'S', chest: '36" (91 cm)', length: '26.5"', shoulder: '16.5"' },
  { size: 'M', chest: '38" (96 cm)', length: '27.5"', shoulder: '17.5"' },
  { size: 'L', chest: '40" (101 cm)', length: '28.5"', shoulder: '18.5"' },
  { size: 'XL', chest: '42" (106 cm)', length: '29.5"', shoulder: '19.5"' },
  { size: '2XL', chest: '44" (112 cm)', length: '30.5"', shoulder: '20.5"' },
  { size: '3XL', chest: '46" (117 cm)', length: '31.5"', shoulder: '21.5"' },
];

export const QUALITY_COMPARISON_DATA = {
  normal: {
    name: 'Normal Quality',
    price: 650,
    badge: '180 GSM Micro-Poly',
    tagline: 'High-performance standard sportswear engineered for daily practice, turf matches, and workouts.',
    idealFor: 'Practice sessions, friendly weekend games, campus tournaments & gym training',
  },
  premium: {
    name: 'Premium Quality',
    price: 800,
    badge: '220 GSM Pro Jacquard',
    tagline: 'Elite championship grade engineered for state/national leagues, pro academies & high-friction sports.',
    idealFor: 'Official leagues, pro club tournaments, corporate trophies & intense outdoor games',
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'vyro-volt-striker',
    name: 'VYRO Volt Striker Match Jersey',
    tagline: 'High-visibility fluorescent match kit engineered for maximum speed & agility.',
    category: 'jerseys',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Interlock Micro-Polyester with HydroWick finish, standard ventilation side panels.',
      premium: '220 GSM Jacquard Dot-Matrix Poly with 4-Way Kinetic Stretch, laser micro-perforations & anti-odor silver ion thread.',
    },
    images: [
      voltStrikerImage,
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Volt Cyber Green', hex: '#00ff41', code: 'volt' },
      { name: 'Pitch Black', hex: '#111111', code: 'black' },
      { name: 'Hyper Orange', hex: '#ff5500', code: 'orange' },
      { name: 'Solar Cobalt', hex: '#0066ff', code: 'blue' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Football', 'Turf', 'Athletics'],
    isFeatured: true,
    badge: 'Bestseller',
    description: 'Engineered for high-intensity tournament play. Features aggressive geometric angular sublimation that never fades, crack, or peel. Lightweight breathable micro-weave guarantees cool dryness even under extreme humidity.',
  },
  {
    id: 'vyro-stealth-black-pro',
    name: 'VYRO Stealth Pro Performance Jersey',
    tagline: 'Monochrome dominance with textured matte finish for pro teams.',
    category: 'jerseys',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Birdseye Moisture Wicking Mesh, athletic tapered cut.',
      premium: '220 GSM Heavy-Duty Pro Jacquard with reinforced double-lock bonded stitching & friction-free flat seams.',
    },
    images: [
      stealthBlackProImage,
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Phantom Carbon', hex: '#1c1c1c', code: 'carbon' },
      { name: 'Cyber Lime Trim', hex: '#00ff41', code: 'lime' },
      { name: 'Titanium Grey', hex: '#555555', code: 'grey' },
      { name: 'Midnight Navy', hex: '#0a192f', code: 'navy' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Football', 'Cricket', 'Gym & Training'],
    isFeatured: true,
    badge: 'Tournament Choice',
    description: 'Clean, aggressive, and intimidation-focused. The Stealth Pro jersey offers unmatched aerodynamic drag reduction and ergonomic raglan sleeves for unrestricted arm movement.',
  },
  {
    id: 'vyro-blaze-crimson',
    name: 'VYRO Crimson Blaze Tournament Tee',
    tagline: 'Vibrant fiery gradient pattern with high-airflow honeycomb back zone.',
    category: 'jerseys',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Aerocool Poly Blend, anti-pilling and quick-dry certified.',
      premium: '220 GSM Pro Honeycomb Stretch knit with dynamic cooling channels and sublimation lock technology.',
    },
    images: [
      blazeCrimsonImage,
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Blaze Crimson', hex: '#ff1a40', code: 'crimson' },
      { name: 'Obsidian Black', hex: '#0e0e0e', code: 'black' },
      { name: 'Gold Pulse', hex: '#f59e0b', code: 'gold' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Football', 'Cricket', 'Turf'],
    isFeatured: false,
    badge: 'Popular',
    description: 'Turn heads when stepping onto the ground. The Crimson Blaze kit blends fiery orange and deep red gradients with cooling underarm mesh vents to keep your core temperature low.',
  },
  {
    id: 'vyro-cricket-championship',
    name: 'VYRO Pro Cricket Championship Shirt',
    tagline: 'Full day match comfort with anti-UV collar & sweat absorption zones.',
    category: 'jerseys',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Soft-Touch Dryfit with ribbed sports polo collar.',
      premium: '220 GSM Diamond-Knit UV50+ Shield poly with ventilated spine channel and reinforced button placket.',
    },
    images: [
      cricketChampionshipImage,
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Royal Blue & Gold', hex: '#1e3a8a', code: 'royal' },
      { name: 'Emerald Forest', hex: '#065f46', code: 'emerald' },
      { name: 'Classic Pure White', hex: '#f8fafc', code: 'white' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Cricket', 'Corporate Sports'],
    isFeatured: true,
    badge: 'Cricket Series',
    description: 'Designed specifically for cricket teams demanding long-duration breathability, flexibility while bowling, and sweat-free fielding comfort across 50-over or T20 games.',
  },
  {
    id: 'vyro-cyber-frost-blue',
    name: 'VYRO Cyber Frost Arctic Jersey',
    tagline: 'Cooling ice-blue geometric mesh with dynamic ventilation.',
    category: 'jerseys',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Interlock Quick-Drying Fabric with sublimated cyan accents.',
      premium: '220 GSM HydroFreeze Jacquard Knit that reacts to body heat to accelerate moisture evaporation.',
    },
    images: [
      cyberFrostBlueImage,
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Arctic Ice Blue', hex: '#00d2ff', code: 'cyan' },
      { name: 'Deep Sea Navy', hex: '#031b4e', code: 'navy' },
      { name: 'Glacier Silver', hex: '#e2e8f0', code: 'silver' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Football', 'Esports', 'Badminton'],
    isFeatured: false,
    badge: 'Cooling Tech',
    description: 'Engineered with our lightest weave construction. Perfect for summer night matches and intense indoor turf tournaments where heat dissipation is critical.',
  },
  {
    id: 'vyro-kinetic-track-pants',
    name: 'VYRO Kinetic Tapered Sports Track Pants',
    tagline: '4-way kinetic stretch bottoms with deep zip pockets and ankle zippers.',
    category: 'pants',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Poly-Spandex Athletic Terry with dual side zipper security pockets.',
      premium: '220 GSM Pro Kinetic Sculpt Fabric with reinforced knee articulation, waterproof zip seals & custom drawcord.',
    },
    images: [
      kineticTrackPantsImage,
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Jet Stealth Black', hex: '#111111', code: 'black' },
      { name: 'Charcoal Asphalt', hex: '#262626', code: 'charcoal' },
      { name: 'Deep Navy', hex: '#0f172a', code: 'navy' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Football', 'Gym & Training', 'Running'],
    isFeatured: true,
    badge: 'Bestseller Pants',
    description: 'The ultimate athletic bottom wear. Tailored with a slim tapered leg that will not interfere with football boots, running shoes, or sprint training.',
  },
  {
    id: 'vyro-tech-fleece-joggers',
    name: 'VYRO Tech-Training Slim Joggers',
    tagline: 'Ergonomic training bottoms built for warmups, gym sessions & travel.',
    category: 'pants',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Lightweight Performance Poly-Cotton loopback with ribbed ankle cuffs.',
      premium: '220 GSM High-Density Stretch Double-Knit with anti-sag knee memory and heat-bonded accents.',
    },
    images: [
      techFleeceJoggersImage,
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Shadow Black', hex: '#141414', code: 'black' },
      { name: 'Heather Grey', hex: '#4b5563', code: 'grey' },
      { name: 'Cyber Trim Black', hex: '#0f172a', code: 'navy' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Gym & Training', 'Running', 'Travel'],
    isFeatured: false,
    badge: 'Pro Fit',
    description: 'Engineered for athletes on the move. Provides thermal comfort during early morning warm-ups while breathing freely when your heart rate climbs.',
  },
  {
    id: 'vyro-full-squad-set-volt',
    name: 'VYRO Complete Volt 2-Piece Tournament Set',
    tagline: 'Full coordinated kit: Volt Striker Jersey + Kinetic Match Pants.',
    category: 'sets',
    normalPrice: 650,
    premiumPrice: 800,
    fabricSpecs: {
      normal: '180 GSM Matching Micro-Poly Full 2-Piece Kit (Shirt + Pants).',
      premium: '220 GSM Pro Jacquard Match-Grade Full Uniform Kit with custom team numbering & sponsor graphics.',
    },
    images: [
      fullSquadSetVoltImage,
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    ],
    colors: [
      { name: 'Volt & Black Coordinated', hex: '#00ff41', code: 'volt' },
      { name: 'All Obsidian Stealth', hex: '#111111', code: 'black' },
      { name: 'Royal White', hex: '#1e3a8a', code: 'royal' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    sports: ['Football', 'Cricket', 'Tournament Teams'],
    isFeatured: true,
    badge: 'Full Kit Value',
    description: 'Get your entire match uniform in one go. Includes both the high-performance moisture-wicking top and coordinated athletic bottoms at discounted bundle pricing.',
  },
];
