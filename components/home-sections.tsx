"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Play, 
  Factory, 
  Truck, 
  Award, 
  FileCheck,
  Shield,
  Globe,
  CheckCircle,
  ChevronRight,
  Star,
  Quote,
  Package,
  Wrench,
  Users,
  Zap,
  Clock,
  BadgeCheck
} from "lucide-react"

// =============================================================================
// HERO SECTION - Elegant full-width hero with image background
// =============================================================================
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=1080&fit=crop"
          alt="Modern mobility scooter manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Global B2B Mobility Solutions Partner
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Your Trusted Partner in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-100">
              Mobility Scooter
            </span>{" "}
            Manufacturing
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            20+ years of expertise in OEM/ODM mobility scooter production. 
            <strong className="text-white"> Trusted by distributors in 50+ countries.</strong>{" "}
            ISO 13485 certified quality you can rely on.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/trade-account">
              <Button size="lg" className="h-12 px-8 text-sm font-semibold bg-white text-foreground hover:bg-white/90">
                Apply for Trade Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold border-white/30 text-white hover:bg-white/10">
                View Product Catalog
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Trade Pricing Available
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              MOQ from 20 Units
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Global Shipping
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  )
}

// =============================================================================
// FEATURES BAR - Trust indicators below hero
// =============================================================================
export function FeaturesBar() {
  const features = [
    { icon: Truck, title: "Global Shipping", desc: "Door-to-door delivery worldwide" },
    { icon: Clock, title: "15-25 Days", desc: "Fast production turnaround" },
    { icon: Shield, title: "Quality Assured", desc: "ISO 13485 certified" },
    { icon: Users, title: "Dedicated Support", desc: "Expert B2B team" },
  ]

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {features.map((feature) => (
            <div key={feature.title} className="py-6 px-4 lg:px-8 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <feature.icon className="h-6 w-6 text-foreground/70" />
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// TRUST SECTION - Social proof with images
// =============================================================================
export function TrustSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Trusted by Distributors
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Trusted by Partners Across 50+ Countries
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From European importers to Asian distributors — partners choose RUIDI for reliable supply and consistent quality.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <Image
                src={`https://images.unsplash.com/photo-156049916866${i}-fcd25c85cd64?w=400&h=300&fit=crop`}
                alt={`Partner facility ${i}`}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-border">
          {[
            { value: "20+", label: "Years in Business" },
            { value: "500+", label: "Global Partners" },
            { value: "100%", label: "Quality Certified" },
            { value: "24h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/trade-account">
            <Button size="lg" className="h-12 px-8">
              Apply for Trade Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// CATEGORIES SECTION - Product categories with beautiful cards
// =============================================================================
export function CategoriesSection() {
  const categories = [
    {
      name: "Travel Scooters",
      desc: "Lightweight, foldable designs for easy transport",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      href: "/products?category=travel",
    },
    {
      name: "4-Wheel Scooters",
      desc: "Maximum stability and comfort for everyday use",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
      href: "/products?category=4-wheel",
    },
    {
      name: "3-Wheel Scooters",
      desc: "Enhanced maneuverability for tight spaces",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      href: "/products?category=3-wheel",
    },
    {
      name: "Heavy Duty",
      desc: "High capacity models for larger users",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
      href: "/products?category=heavy-duty",
    },
  ]

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobility solutions for every market segment and customer need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{category.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// FEATURED PRODUCTS - Product showcase with ratings
// =============================================================================
export function FeaturedProducts() {
  const products = [
    {
      name: "RD-4000 Travel Pro",
      category: "Travel Scooter",
      moq: "20 units",
      badge: "Top Seller",
      rating: 4.9,
      reviews: 1847,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    },
    {
      name: "RD-5500 Comfort Plus",
      category: "4-Wheel Scooter",
      moq: "15 units",
      badge: "Best Value",
      rating: 4.8,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop",
    },
    {
      name: "RD-3200 City Cruiser",
      category: "3-Wheel Scooter",
      moq: "20 units",
      badge: "New Arrival",
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    },
    {
      name: "RD-7000 Heavy Duty",
      category: "Heavy Duty",
      moq: "10 units",
      badge: "Premium",
      rating: 4.9,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop",
    },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Bestselling Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our most popular mobility scooters, trusted by distributors worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.name} href="/products" className="group">
              <Card className="overflow-hidden hover-lift border-0 shadow-sm">
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-foreground text-background">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    MOQ: {product.moq}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// CHOOSE PATH SECTION - B2B customer segmentation
// =============================================================================
export function ChoosePathSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Choose Your Path
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re an importer, distributor, or retailer, we have the right partnership model for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* OEM/ODM Path */}
          <div className="relative rounded-3xl overflow-hidden bg-muted group">
            <div className="aspect-[16/10] relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop"
                alt="OEM/ODM Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/60" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-2">
                For Importers
              </span>
              <h3 className="text-2xl font-bold mb-3">OEM/ODM Manufacturing</h3>
              <p className="text-white/80 text-sm mb-4 max-w-md">
                Full customization options including branding, colors, and specifications. Build your own product line with our manufacturing expertise.
              </p>
              <ul className="space-y-2 mb-6">
                {["Custom branding & packaging", "Product customization", "Exclusive territory rights"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/services/oem-odm">
                <Button className="w-fit bg-white text-foreground hover:bg-white/90">
                  Start OEM Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Wholesale Path */}
          <div className="relative rounded-3xl overflow-hidden bg-secondary">
            <div className="aspect-[16/10] relative">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop"
                alt="Wholesale Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/60" />
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                  For Distributors
                </span>
                <span className="px-2 py-0.5 bg-amber-500 text-foreground text-xs font-medium rounded">
                  Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Wholesale Program</h3>
              <p className="text-white/80 text-sm mb-4 max-w-md">
                Competitive wholesale pricing with flexible MOQ. Access our full product range with dedicated support.
              </p>
              <ul className="space-y-2 mb-6">
                {["Tiered pricing structure", "Marketing support", "Training & education", "Wholesale pricing", "Next-day dispatch"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link href="/trade-account">
                  <Button className="bg-white text-foreground hover:bg-white/90">
                    Apply for Trade Account
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// SERVICES SECTION - Expert support cards
// =============================================================================
export function ServicesSection() {
  const services = [
    {
      icon: Factory,
      title: "OEM/ODM Services",
      desc: "Full customization from design to production. Your brand, your specifications, our expertise.",
      href: "/services/oem-odm",
      cta: "Learn More",
    },
    {
      icon: BadgeCheck,
      title: "Certification Support",
      desc: "Complete documentation for CE, FDA, TUV, and other regional certifications.",
      href: "/services/certification",
      cta: "View Certificates",
    },
    {
      icon: Globe,
      title: "Global Logistics",
      desc: "Door-to-door shipping worldwide. Sea, air, and express options available.",
      href: "/services/logistics",
      cta: "Shipping Info",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      desc: "Expert technical assistance, spare parts supply, and comprehensive warranty support.",
      href: "/services/support",
      cta: "Get Support",
    },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Expert Support & Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support from inquiry to after-sales — we&apos;re with you every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full hover-lift border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:underline">
                    {service.cta}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// TESTIMONIALS SECTION
// =============================================================================
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "RUIDI has been our trusted manufacturing partner for over 8 years. Their quality consistency and on-time delivery have helped us grow our business significantly across the European market.",
      name: "Hans Mueller",
      title: "CEO, MobilityPlus Germany",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "The OEM service exceeded our expectations. From custom branding to specialized configurations, RUIDI delivered exactly what we needed. Highly recommended for serious distributors.",
      name: "Sarah Johnson",
      title: "Director, UK Mobility Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "Outstanding product quality and excellent customer support. The trade account benefits and competitive pricing have made a real difference to our margins.",
      name: "Takeshi Yamamoto",
      title: "Import Manager, Tokyo Mobility Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ]

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Partners Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our distribution partners are saying about working with RUIDI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// BLOG PREVIEW SECTION
// =============================================================================
export function BlogPreviewSection() {
  const posts = [
    {
      title: "2024 Mobility Scooter Market Trends: What Distributors Need to Know",
      category: "Market Insights",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      href: "/blog/market-trends-2024",
    },
    {
      title: "Complete Guide to CE Certification for Mobility Scooters",
      category: "Product Knowledge",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
      href: "/blog/ce-certification-guide",
    },
    {
      title: "RUIDI Showcases New Product Line at Medica 2024",
      category: "Company News",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      href: "/blog/medica-2024",
    },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Industry Insights & News
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Expert knowledge, market trends, and company updates
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="group">
              <article>
                <div className="aspect-[3/2] rounded-xl overflow-hidden bg-muted mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// =============================================================================
// CTA SECTION
// =============================================================================
export function CTASection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">
          Ready to Partner with RUIDI?
        </h2>
        <p className="mt-4 text-lg text-background/80 max-w-2xl mx-auto">
          Join 500+ distributors worldwide. Get access to competitive pricing, marketing support, and dedicated account management.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/trade-account">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Apply for Trade Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="h-12 px-8 border-background/30 text-background hover:bg-background/10">
              Request Product Catalog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
