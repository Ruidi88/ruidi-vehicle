// Product data for the catalog
export interface Product {
  id: string
  name: string
  category: string
  image: string
  specs: {
    maxSpeed: string
    range: string
    weight: string
    capacity: string
  }
  features: string[]
  certifications: string[]
  moq: number
  featured?: boolean
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
    productCount: 12
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
