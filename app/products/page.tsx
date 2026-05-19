'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { productCategories, products, type Product } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  ArrowRight, 
  Download, 
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronRight,
  Star,
  ShoppingCart
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProductsPage() {
  const { t } = useLocale()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = !activeCategory || product.category === activeCategory
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.products.title}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t.products.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button variant="secondary" asChild>
                <Link href="/catalog">
                  <Download className="mr-2 h-4 w-4" />
                  {t.hero.cta3}
                </Link>
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">
                  {t.nav.getQuote}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={cn(
                  'group relative overflow-hidden rounded-xl p-4 text-left transition-all',
                  activeCategory === category.id 
                    ? 'bg-accent text-accent-foreground shadow-lg' 
                    : 'bg-card hover:shadow-md'
                )}
              >
                <div className="relative z-10">
                  <h3 className={cn(
                    'font-semibold',
                    activeCategory === category.id ? 'text-accent-foreground' : 'text-foreground'
                  )}>
                    {category.name}
                  </h3>
                  <p className={cn(
                    'mt-1 text-xs',
                    activeCategory === category.id ? 'text-accent-foreground/80' : 'text-muted-foreground'
                  )}>
                    {category.productCount > 0 ? `${category.productCount} products` : 'Custom'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          {/* Toolbar */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
              <div className="ml-4 flex rounded-lg border">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'p-2 transition-colors',
                    viewMode === 'grid' ? 'bg-muted' : 'hover:bg-muted/50'
                  )}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'p-2 transition-colors',
                    viewMode === 'list' ? 'bg-muted' : 'hover:bg-muted/50'
                  )}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory(null)
                  setSearchQuery('')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            {"Can't find what you're looking for?"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact us for custom OEM/ODM solutions tailored to your specific requirements.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/services">
                Explore OEM/ODM Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
            <Star className="mr-1 h-3 w-3" />
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {product.certifications.slice(0, 3).map((cert) => (
            <Badge key={cert} variant="secondary" className="text-xs">
              {cert}
            </Badge>
          ))}
        </div>
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div>Speed: {product.specs.maxSpeed}</div>
          <div>Range: {product.specs.range}</div>
          <div>Weight: {product.specs.weight}</div>
          <div>Capacity: {product.specs.capacity}</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">MOQ: {product.moq} units</span>
          <Button size="sm" variant="outline" asChild>
            <Link href={`/products/${product.id}`}>
              Details
              <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProductListItem({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="relative aspect-[4/3] sm:aspect-square sm:w-48 overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="flex-1 p-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap gap-1">
                {product.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-xs">
                    {cert}
                  </Badge>
                ))}
                {product.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="mr-1 h-3 w-3" />
                    Featured
                  </Badge>
                )}
              </div>
              <h3 className="font-semibold text-foreground">{product.name}</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>Speed: {product.specs.maxSpeed}</span>
                <span>Range: {product.specs.range}</span>
                <span>Weight: {product.specs.weight}</span>
                <span>Capacity: {product.specs.capacity}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.features.slice(0, 4).map((feature) => (
                  <span key={feature} className="text-xs text-muted-foreground">
                    • {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">MOQ: {product.moq} units</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/products/${product.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/contact">
                    <ShoppingCart className="mr-1 h-3 w-3" />
                    Inquire
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
