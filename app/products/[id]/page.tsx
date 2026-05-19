import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products, getProductById, getProductsByCategory, type Product } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  ArrowLeft,
  Package,
  CheckCircle2,
  Palette,
  Shield,
  Truck,
  Phone,
  ChevronRight,
  ZoomIn,
  Share2,
  Heart,
  Star,
} from 'lucide-react'

// Generate static params for all known product IDs
export function generateStaticParams() {
  return products.map((p: Product) => ({ id: p.id }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  // Get related products in same category (exclude current)
  const categoryProducts = getProductsByCategory(product.category)
  const relatedProducts = categoryProducts
    .filter(p => p.id !== id)
    .slice(0, 4)

  const allImages = [product.image, ...(product.images || [])].filter(Boolean)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border bg-muted group">
                <Image
                  src={allImages[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {allImages.length > 1 && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    <ZoomIn className="h-3 w-3" /> 1 / {allImages.length}
                  </div>
                )}
                {product.featured && (
                  <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground text-sm px-3 py-1">
                    <Star className="mr-1 h-4 w-4" /> Featured
                  </Badge>
                )}
              </div>

              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all hover:border-primary ${
                        idx === 0 ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} variant="secondary">{cert}</Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  {product.name}
                </h1>
                {product.modelNumber && (
                  <p className="mt-1 text-sm text-muted-foreground font-mono">
                    Model: {product.modelNumber}
                  </p>
                )}
              </div>

              {/* Price */}
              {product.price && (
                <div className="rounded-xl bg-accent/10 p-4">
                  <p className="text-sm text-muted-foreground">Factory Direct Price</p>
                  <p className="text-3xl font-bold text-accent mt-1">{product.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    * Trade pricing available for bulk orders — contact us for quote
                  </p>
                </div>
              )}

              {/* Description */}
              {product.description && (
                <p className="text-base leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              )}

              <Separator />

              {/* Key Specs */}
              <div>
                <h3 className="font-semibold mb-3">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '🚀', label: 'Max Speed', value: product.specs.maxSpeed },
                    { icon: '📏', label: 'Range', value: product.specs.range },
                    { icon: '⚖️', label: 'Weight', value: product.specs.weight },
                    { icon: '👤', label: 'Capacity', value: product.specs.capacity },
                  ].map((spec) => (
                    <div key={spec.label} className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-semibold text-sm mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Palette className="h-4 w-4" /> Available Colours
                  </h3>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-sm"
                      >
                        <span
                          className={`h-3 w-3 rounded-full ${
                            color === 'Green' ? 'bg-green-500' :
                            color === 'Blue' ? 'bg-blue-500' :
                            color === 'Red' ? 'bg-red-500' :
                            color === 'Silver' ? 'bg-gray-400' :
                            color === 'Black' ? 'bg-gray-800' : 'bg-primary'
                          }`}
                        />
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* MOQ & Lead Time */}
              <div className="flex items-center gap-6 rounded-xl bg-muted/30 p-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">MOQ</p>
                    <p className="font-bold">{product.moq} unit{product.moq > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Lead Time</p>
                    <p className="font-bold">15–30 days</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 text-base" asChild>
                  <Link href="/contact?product=${encodeURIComponent(product.name)}">
                    <Phone className="mr-2 h-5 w-5" /> Request Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <Link href="/catalog">
                    Download Catalog
                  </Link>
                </Button>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-1 h-4 w-4" /> Share
                </Button>
                <Button variant="ghost" size="sm">
                  <Heart className="mr-1 h-4 w-4" /> Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications Table */}
      {product.detailedSpecs && product.detailedSpecs.length > 0 && (
        <section className="border-t bg-muted/20 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {product.detailedSpecs.map((spec, idx) => (
                        <tr
                          key={spec.label}
                          className={`${idx % 2 === 0 ? 'bg-background' : 'bg-muted/30'} border-b last:border-b-0`}
                        >
                          <td className="px-6 py-3 text-sm font-medium text-muted-foreground w-1/3">
                            {spec.label}
                          </td>
                          <td className="px-6 py-3 text-sm font-semibold text-foreground">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-lg border p-4 transition-shadow hover:shadow-md"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What&apos;s Included */}
      {product.whatsIncluded && product.whatsIncluded.length > 0 && (
        <section className="bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Package className="h-6 w-6" /> What&apos;s Included
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {product.whatsIncluded?.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-card border p-3">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{item}</span>
                </div>
              )) || null}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      <section className="py-12 border-t">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6" /> Certifications &amp; Quality Assurance
          </h2>
          <div className="flex flex-wrap gap-3">
            {product.certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="px-4 py-2 text-sm">
                {cert === 'CE' && '✅ CE Marked'}
                {cert === 'FDA' && '🇺🇸 FDA Registered'}
                {cert === 'MDR' && '🏥 MDR Compliant'}
                {cert === 'ISO 13485' && '📋 ISO 13485:2016'}
                {cert === 'TUV' && '🔒 TÜV Certified'}
                {!['CE','FDA','MDR','ISO 13485','TUV'].includes(cert) && cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t bg-muted/20 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Button variant="ghost" asChild>
                <Link href="/products">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.id}`}>
                  <Card className="group overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-accent">
                        {rp.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {rp.specs.maxSpeed} · {rp.specs.range}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground">
            Interested in This Product?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Contact our sales team for bulk pricing, OEM customisation, and shipping quotes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?product=${encodeURIComponent(product.name)}">
                Get A Quote Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
