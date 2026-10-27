export interface OriginalCategory {
  id: string;
  index: string;
  title: string;
  description: string;
  color: string;
  items: string[];
  image: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: 'computer-parts' | 'cctv-security' | 'networking';
  price: string;
  badge?: string;
  description: string;
  image: string;
}

export const ORIGINAL_HERO_PANELS: OriginalCategory[] = [
  {
    id: 'computer-parts',
    index: '01 / 04',
    title: 'COMPUTER HARDWARE & ACCESSORIES',
    description: 'Wireless & wired mouse, mechanical keyboards, USB cables, adapters, power cables, and HDMI/VGA display cables for home and enterprise.',
    color: 'from-blue-600 to-indigo-800',
    items: ['Wireless & Wired Mouse', 'Mechanical Keyboards', 'USB Cables & Adapters', 'Power Cables', 'HDMI & VGA Cables'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cctv-security',
    index: '02 / 04',
    title: 'CCTV & SECURITY HARDWARE',
    description: 'High-definition IP & analog cameras, NVR systems, PoE network switches, security monitors, and high-performance DVR recorders for 24/7 surveillance.',
    color: 'from-blue-700 to-slate-900',
    items: ['IP & Analog Cameras', 'NVR Systems', 'PoE Switches', 'Security Monitors', 'DVR Recorders'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'networking',
    index: '03 / 04',
    title: 'NETWORKING INFRASTRUCTURE',
    description: 'Enterprise networking solutions including Cat6 high-speed Ethernet cables, unmanaged & managed switches, dual-band Wi-Fi routers, adapters, and patch panels.',
    color: 'from-indigo-600 to-slate-900',
    items: ['Ethernet Cables', 'Network Switches', 'WiFi Routers', 'Network Adapters', 'Patch Panels'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'wholesale-supply',
    index: '04 / 04',
    title: 'WHOLESALE SUPPLY & SUPPORT',
    description: 'Bulk supply of computer parts and CCTV systems for businesses, retailers, and educational institutes with official GST billing and warranty support.',
    color: 'from-sky-600 to-slate-900',
    items: ['Bulk Orders', 'Competitive Pricing', 'Quality Products', 'Fast Delivery'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
];

export interface CategoryCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  count: string;
}

export const ORIGINAL_CATEGORIES: CategoryCardData[] = [
  {
    id: 'computer-parts',
    title: 'Computer Hardware & Parts',
    subtitle: 'Essential Accessories & Peripherals',
    description: 'Wireless & wired mouse, mechanical keyboards, USB cables, power adapters, HDMI & VGA cables.',
    items: [
      'Wireless & Wired Mouse',
      'Mechanical Keyboards',
      'USB Cables & Adapters',
      'Power Cables',
      'HDMI & VGA Cables',
    ],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80',
    count: '01',
  },
  {
    id: 'cctv-security',
    title: 'CCTV & Security Systems',
    subtitle: 'Surveillance & Monitoring Solutions',
    description: 'IP & analog cameras, NVR/DVR systems, PoE switches, security displays, and night vision units.',
    items: [
      'IP & Analog Cameras',
      'NVR Systems',
      'PoE Switches',
      'Security Monitors',
      'DVR Recorders',
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80',
    count: '02',
  },
  {
    id: 'networking',
    title: 'Networking Infrastructure',
    subtitle: 'Connectivity & Routers',
    description: 'Cat6 Ethernet cables, gigabit network switches, dual-band Wi-Fi routers, adapters, and patch panels.',
    items: [
      'Ethernet Cables',
      'Network Switches',
      'WiFi Routers',
      'Network Adapters',
      'Patch Panels',
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80',
    count: '03',
  },
];

export const ORIGINAL_FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'fp-1',
    name: 'Gaming Mouse',
    category: 'computer-parts',
    price: '₹500 - ₹2000',
    badge: 'Popular',
    description: 'High precision optical sensor, programmable DPI buttons, and ergonomic grip for daily and gaming use.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fp-2',
    name: 'Mechanical Keyboard',
    category: 'computer-parts',
    price: '₹1500 - ₹5000',
    badge: 'Best Seller',
    description: 'Tactile mechanical switches, durable keycaps, anti-ghosting, and multi-mode RGB backlighting.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fp-3',
    name: 'IP Camera',
    category: 'cctv-security',
    price: '₹2000 - ₹8000',
    badge: 'Security Must-Have',
    description: 'Full HD/4K clarity, night vision infrared, motion detection alerts, and remote smartphone streaming.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fp-4',
    name: 'PoE Switch',
    category: 'cctv-security',
    price: '₹3000 - ₹15000',
    badge: 'Surveillance Hub',
    description: 'Power over Ethernet ports for running IP cameras cleanly over single Cat6 cables without separate power lines.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fp-5',
    name: 'USB Cables',
    category: 'computer-parts',
    price: '₹50 - ₹500',
    badge: 'Essentials',
    description: 'Fast charging, braided high-speed data transfer cables: Type-C, Micro-USB, and USB 3.0 extensions.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fp-6',
    name: 'Network Switch',
    category: 'networking',
    price: '₹1000 - ₹10000',
    badge: 'Connectivity',
    description: '5-Port, 8-Port, and 16-Port Gigabit desktop and rackmount switches for reliable office networking.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  chips: string[];
  linkText: string;
}

export const ORIGINAL_SERVICES: ServiceItem[] = [
  {
    id: 'computers-laptops',
    title: 'Computers & Laptops',
    badge: 'NEW + REFURBISHED',
    description: 'Business desktops, laptops, workstations and selected accessories for individual and bulk requirements.',
    chips: ['Business Laptops', 'Desktops', 'Refurbished'],
    linkText: 'Explore computers & laptops',
  },
  {
    id: 'cctv-products',
    title: 'CCTV Products',
    badge: 'NEW SYSTEMS',
    description: 'IP and HD cameras, DVR/NVR systems, storage and selected surveillance accessories for businesses.',
    chips: ['IP Cameras', 'DVR / NVR', 'Storage'],
    linkText: 'Explore CCTV products',
  },
  {
    id: 'networking-infrastructure',
    title: 'Networking & Cabling',
    badge: 'CONNECTIVITY UNITS',
    description: 'High-speed Cat6 Ethernet cables, gigabit switches, dual-band Wi-Fi routers, adapters and patch panels.',
    chips: ['Ethernet Cables', 'PoE Switches', 'Routers'],
    linkText: 'Explore networking units',
  },
  {
    id: 'refurbished-wholesale',
    title: 'Refurbished & Wholesale',
    badge: 'VALUE OPTIONS',
    description: 'Pre-owned and certified computer parts, bulk wholesale components and warranty support for cost-effective setups.',
    chips: ['Tested Assets', 'Bulk Enquiry', 'Upgrades'],
    linkText: 'Explore wholesale assets',
  },
];

export interface Distributor {
  name: string;
  logo: string;
  desc: string;
}

export const ORIGINAL_DISTRIBUTORS: Distributor[] = [
  { name: 'Avertek', logo: '/avertek.png', desc: 'Always Technology' },
  { name: 'Secureye', logo: '/secureeye.png', desc: 'Security Surveillance' },
  { name: 'Hama', logo: '/hamma.png', desc: 'Smart Accessories' },
  { name: 'Ideakard', logo: '/ideakard.png', desc: 'Dream Ahead' },
  { name: 'Pinnacle', logo: '/pinnacle.png', desc: 'Matter of Convenience' },
  { name: 'VC Next', logo: '/vc_next.png', desc: 'Next-Gen Technology' },
  { name: 'Enter', logo: '/enter.png', desc: 'Peripherals & Accessories' },
];

export const ORIGINAL_TESTIMONIALS = [
  {
    name: 'Rajesh Patel',
    business: 'Patel Electronics',
    rating: 5,
    text: 'Version Computers provided excellent CCTV products for our store. Quality products and competitive prices!',
  },
  {
    name: 'Priya Shah',
    business: 'Shah Enterprises',
    rating: 5,
    text: 'Best place for computer parts in Rajkot. Always have genuine products and competitive prices.',
  },
  {
    name: 'Amit Kumar',
    business: 'Kumar Trading',
    rating: 5,
    text: 'Their CCTV products helped secure our warehouse. Highly recommend Version Computers for security equipment.',
  },
];
