// Product data for the catalog
export interface Product {
  id: string
  name: string
  category: string
  image: string
  images?: string[]           // Additional product images (gallery)
  description?: string        // Full product description
  modelNumber?: string        // Product SKU / model code
  price?: string              // Display price (e.g., "£599.99")
  specs: {
    maxSpeed: string
    range: string
    weight: string
    capacity: string
  }
  detailedSpecs?: {           // Extended technical specifications
    label: string
    value: string
  }[]
  features: string[]
  certifications: string[]
  moq: number
  featured?: boolean
  colors?: string[]           // Available colors
  whatsIncluded?: string[]   // Box contents
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export const productCategories: ProductCategory[] = [
  {
    id: 'travel-scooters',
    name: 'Travel Scooters',
    description: 'Lightweight, foldable designs perfect for travel and easy transport. Airline-approved options available.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    productCount: 13
  },
  {
    id: '4-wheel-scooters',
    name: '4-Wheel Scooters',
    description: 'Maximum stability and comfort for everyday use. Ideal for outdoor terrain and longer distances.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    productCount: 18
  },
  {
    id: '3-wheel-scooters',
    name: '3-Wheel Scooters',
    description: 'Enhanced maneuverability for tight spaces and indoor use. Compact turning radius.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    productCount: 10
  },
  {
    id: 'heavy-duty',
    name: 'Heavy Duty Scooters',
    description: 'High capacity models for larger users. Reinforced frames and powerful motors.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    productCount: 8
  },
  {
    id: 'parts-accessories',
    name: 'Parts & Accessories',
    description: 'Batteries, chargers, seats, baskets, and replacement components for all models.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    productCount: 45
  },
  {
    id: 'custom-oem',
    name: 'Custom OEM/ODM',
    description: 'Tailored mobility solutions with your branding. From design to production.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    productCount: 0
  }
]

export const products: Product[] = [
  // Travel Scooters
  {
    id: 'rd-travel-01',
    name: 'RD-T100 Folding Travel Scooter',
    category: 'travel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '6 km/h',
      range: '25 km',
      weight: '22 kg',
      capacity: '120 kg'
    },
    features: ['One-touch folding', 'Airline approved', 'LED headlight', 'USB charging port'],
    certifications: ['CE', 'FDA', 'ISO 13485'],
    moq: 50,
    featured: true
  },
  {
    id: 'rd-travel-02',
    name: 'RD-T200 Compact Travel Scooter',
    category: 'travel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '8 km/h',
      range: '30 km',
      weight: '26 kg',
      capacity: '135 kg'
    },
    features: ['Quick-release battery', 'Adjustable armrests', 'Anti-tip wheels', 'Digital display'],
    certifications: ['CE', 'FDA', 'TUV'],
    moq: 50
  },
  {
    id: 'rd-travel-03',
    name: 'RD-T300 Ultra-Light Scooter',
    category: 'travel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '6 km/h',
      range: '20 km',
      weight: '18 kg',
      capacity: '100 kg'
    },
    features: ['Carbon fiber frame', 'Remote folding', 'Smart app control', 'GPS tracking'],
    certifications: ['CE', 'FDA'],
    moq: 30
  },
  // CareCo Vive 4 - Travel Scooter (from CareCo UK)
  {
    id: 'careco-vive-4',
    name: 'CareCo Vive 4 Mobility Scooter',
    category: 'travel-scooters',
    modelNumber: 'MS01010038',
    image: 'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
    images: [
      'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
      'https://www.careco.co.uk/media/catalog/product/v/i/vive_4_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=107&width=78&canvas=78:107',
      'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=107&width=78&canvas=78:107',
      'https://www.careco.co.uk/media/catalog/product/v/i/vive_4_5.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=107&width=78&canvas=78:107',
      'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=107&width=78&canvas=78:107'
    ],
    description: 'The CareCo Vive 4 is a reliable, budget-friendly mobility scooter designed for everyday use. Its compact design is perfect for short trips like shopping, coffee outings, and getting around without relying on lifts or extensive planning. The scooter disassembles into 5 lightweight parts for easy storage and transportation — it even fits in most car boots. Two colour shrouds (Green & Blue) are included so you can customise the look.',
    price: '£599.99',
    specs: {
      maxSpeed: '6.4 km/h (4 mph)',
      range: '16 km (10 miles)',
      weight: '43.8 kg (heaviest part)',
      capacity: '136 kg (21 stone)'
    },
    detailedSpecs: [
      { label: 'Max Speed', value: '6.4 km/h (4 mph)' },
      { label: 'Range', value: 'Up to 16 km (10 miles)' },
      { label: 'Motor Power', value: '270W' },
      { label: 'Battery Type', value: '12Ah Dry Sealed Lead-Acid' },
      { label: 'Battery Watt Hours', value: '288 Wh' },
      { label: 'Charging', value: 'Off-board (battery charges separately)' },
      { label: 'Total Weight', value: '43.8 kg' },
      { label: 'Heaviest Part', value: '~15 kg (front frame)' },
      { label: 'Max User Weight', value: '136 kg (21 stone)' },
      { label: 'Turning Radius', value: '115 cm' },
      { label: 'Ground Clearance', value: '3 cm' },
      { label: 'Incline Rating', value: '6 degrees' },
      { label: 'Seat Width × Depth', value: '43.5 cm × 39 cm' },
      { label: 'Seat Height (adjustable)', value: '52–56 cm' },
      { label: 'Swivel Seat', value: 'Yes' },
      { label: 'Front/Rear Wheel Size', value: '20.3 cm (8") each' },
      { label: 'Tyre Type', value: 'Solid (puncture-proof)' },
      { label: 'Overall Dimensions (L×W×H)', value: '103 × 49 × 88 cm' },
      { label: 'Folded Height', value: '33 cm' },
      { label: 'Suspension', value: 'No' },
      { label: 'Lights', value: 'No' },
      { label: 'Disassembly Parts', value: '5 parts (tool-free)' },
      { label: 'Assembly Time', value: '~15 minutes, 1 person' }
    ],
    features: [
      'Tool-free disassembly into 5 parts',
      'Fits in car boot for easy transport',
      'Comfortable swivel seat with flip-up armrests',
      'Adjustable tiller bar for customised driving position',
      'Off-board charging — charge battery separately',
      'Two colour shrouds included: Green & Blue',
      'Solid tyres — no risk of punctures',
      'Up to 10 mile (16 km) battery range',
      'Budget-friendly, ideal for first-time users'
    ],
    certifications: ['CE', 'MDR'],
    moq: 1,
    featured: true,
    colors: ['Green', 'Blue'],
    whatsIncluded: ['User Manual', 'Battery Charger', 'Keys (with spare)'],
  },
  // 4-Wheel Scooters
  {
    id: 'rd-4w-01',
    name: 'RD-4W100 Standard Mobility Scooter',
    category: '4-wheel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '12 km/h',
      range: '35 km',
      weight: '65 kg',
      capacity: '150 kg'
    },
    features: ['Full suspension', 'Comfortable seat', 'Large basket', 'Pneumatic tires'],
    certifications: ['CE', 'FDA', 'ISO 13485', 'TUV'],
    moq: 20,
    featured: true
  },
  {
    id: 'rd-4w-02',
    name: 'RD-4W200 All-Terrain Scooter',
    category: '4-wheel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '15 km/h',
      range: '45 km',
      weight: '75 kg',
      capacity: '180 kg'
    },
    features: ['Off-road tires', 'High ground clearance', 'LED lighting system', 'Dual motors'],
    certifications: ['CE', 'FDA', 'ISO 13485'],
    moq: 15
  },
  {
    id: 'rd-4w-03',
    name: 'RD-4W300 Luxury Comfort Scooter',
    category: '4-wheel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '10 km/h',
      range: '40 km',
      weight: '70 kg',
      capacity: '160 kg'
    },
    features: ['Captain seat', 'Armrest storage', 'Canopy ready', 'Premium finish'],
    certifications: ['CE', 'FDA', 'TUV'],
    moq: 20
  },
  // 3-Wheel Scooters
  {
    id: 'rd-3w-01',
    name: 'RD-3W100 Compact 3-Wheel Scooter',
    category: '3-wheel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '8 km/h',
      range: '25 km',
      weight: '45 kg',
      capacity: '120 kg'
    },
    features: ['Tight turning radius', 'Easy disassembly', 'Adjustable tiller', 'Front basket'],
    certifications: ['CE', 'FDA', 'ISO 13485'],
    moq: 30,
    featured: true
  },
  {
    id: 'rd-3w-02',
    name: 'RD-3W200 Indoor/Outdoor Scooter',
    category: '3-wheel-scooters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '10 km/h',
      range: '30 km',
      weight: '52 kg',
      capacity: '135 kg'
    },
    features: ['Delta tiller', 'Swivel seat', 'Regenerative braking', 'Horn & lights'],
    certifications: ['CE', 'FDA'],
    moq: 25
  },
  // Heavy Duty
  {
    id: 'rd-hd-01',
    name: 'RD-HD100 Bariatric Scooter',
    category: 'heavy-duty',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '12 km/h',
      range: '40 km',
      weight: '95 kg',
      capacity: '220 kg'
    },
    features: ['Reinforced frame', 'Wide seat', 'Heavy-duty motor', 'Extra-wide footplate'],
    certifications: ['CE', 'FDA', 'ISO 13485', 'TUV'],
    moq: 10,
    featured: true
  },
  {
    id: 'rd-hd-02',
    name: 'RD-HD200 Professional Heavy Duty',
    category: 'heavy-duty',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    specs: {
      maxSpeed: '15 km/h',
      range: '50 km',
      weight: '110 kg',
      capacity: '250 kg'
    },
    features: ['Twin motors', 'Full suspension', 'Industrial grade', 'Long-range battery'],
    certifications: ['CE', 'FDA', 'ISO 13485'],
    moq: 5
  }
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find(c => c.id === id)
}
