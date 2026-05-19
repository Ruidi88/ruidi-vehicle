// Blog posts data
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

export const blogCategories = [
  { id: 'all', name: 'All Posts' },
  { id: 'industry', name: 'Industry News' },
  { id: 'product', name: 'Product Updates' },
  { id: 'guides', name: 'Buying Guides' },
  { id: 'events', name: 'Trade Shows' }
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mobility-scooter-market-trends-2024',
    title: 'Mobility Scooter Market Trends: What Distributors Need to Know in 2024',
    excerpt: 'The global mobility scooter market continues to grow. Learn about the latest trends, emerging technologies, and opportunities for distributors.',
    content: `The mobility scooter industry is experiencing significant transformation...`,
    category: 'industry',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    author: 'Ruidi Team',
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['Market Trends', 'Industry Analysis', 'B2B']
  },
  {
    id: '2',
    slug: 'choosing-right-mobility-scooter-customers',
    title: 'How to Choose the Right Mobility Scooter for Your Customers',
    excerpt: 'A comprehensive guide for distributors and retailers on matching customers with the perfect mobility scooter based on their needs.',
    content: `Understanding your customers needs is crucial...`,
    category: 'guides',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    author: 'Product Team',
    date: '2024-03-10',
    readTime: '8 min read',
    tags: ['Buying Guide', 'Product Selection', 'Customer Service']
  },
  {
    id: '3',
    slug: 'ruidi-medica-2024-exhibition',
    title: 'Visit Ruidi at MEDICA 2024 - Hall 6, Booth E42',
    excerpt: 'Meet our team at the world leading medical trade fair in Düsseldorf. See our latest products and discuss partnership opportunities.',
    content: `We are excited to announce our participation at MEDICA 2024...`,
    category: 'events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    author: 'Ruidi Team',
    date: '2024-03-05',
    readTime: '3 min read',
    tags: ['Trade Show', 'MEDICA', 'Exhibition']
  },
  {
    id: '4',
    slug: 'new-folding-travel-scooter-rd-t400',
    title: 'Introducing the RD-T400: Our Lightest Travel Scooter Yet',
    excerpt: 'Announcing our latest innovation in portable mobility - the RD-T400 featuring carbon fiber construction and one-touch folding.',
    content: `We are proud to introduce our newest travel scooter model...`,
    category: 'product',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    author: 'R&D Team',
    date: '2024-02-28',
    readTime: '4 min read',
    tags: ['New Product', 'Travel Scooter', 'Innovation']
  },
  {
    id: '5',
    slug: 'oem-vs-odm-which-model-right-for-you',
    title: 'OEM vs ODM: Which Manufacturing Model is Right for Your Business?',
    excerpt: 'Understanding the differences between OEM and ODM manufacturing and how to choose the best option for your mobility business.',
    content: `When partnering with a mobility scooter manufacturer...`,
    category: 'guides',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop',
    author: 'Business Development',
    date: '2024-02-20',
    readTime: '6 min read',
    tags: ['OEM', 'ODM', 'Manufacturing', 'Business Guide']
  },
  {
    id: '6',
    slug: 'european-mobility-regulations-update',
    title: 'European Mobility Scooter Regulations: 2024 Update',
    excerpt: 'Stay compliant with the latest CE marking requirements and safety standards for mobility scooters in the European market.',
    content: `European regulations for mobility devices continue to evolve...`,
    category: 'industry',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
    author: 'Compliance Team',
    date: '2024-02-15',
    readTime: '7 min read',
    tags: ['Regulations', 'CE Marking', 'Compliance', 'Europe']
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'all') return blogPosts
  return blogPosts.filter(post => post.category === category)
}
