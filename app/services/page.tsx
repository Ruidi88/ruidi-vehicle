'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { AnimatedCounter } from '@/components/animated-counter'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  Factory, 
  Palette, 
  Package, 
  Truck, 
  FileCheck,
  Settings,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react'

export default function ServicesPage() {
  const { t } = useLocale()

  const services = [
    {
      icon: Factory,
      title: 'OEM Manufacturing',
      description: 'Bring your designs to life with our state-of-the-art manufacturing capabilities. We produce your specifications with precision and quality.',
      features: [
        'Your design, our production expertise',
        'Strict quality control at every stage',
        'Flexible production volumes',
        'Technical consultation available'
      ]
    },
    {
      icon: Settings,
      title: 'ODM Solutions',
      description: 'Select from our extensive catalog of proven designs and customize them for your brand. Fast time-to-market with tested products.',
      features: [
        'Wide range of ready designs',
        'Customizable specifications',
        'Proven quality and reliability',
        'Faster development cycle'
      ]
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Full white-label options including custom colors, logos, packaging, and documentation. Build your brand identity.',
      features: [
        'Custom color schemes',
        'Logo printing and embossing',
        'Branded packaging design',
        'Custom user manuals'
      ]
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Efficient worldwide shipping with experience in international trade. We handle documentation and compliance.',
      features: [
        'Door-to-door shipping options',
        'Export documentation support',
        'Customs clearance assistance',
        'Multiple shipping methods'
      ]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Inquiry',
      description: 'Share your requirements, quantities, and specifications with our B2B team.',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Quotation & Design',
      description: 'Receive detailed quotation and discuss customization options.',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Sample Production',
      description: 'We produce samples for your approval before mass production.',
      duration: '7-14 days'
    },
    {
      step: 4,
      title: 'Sample Approval',
      description: 'Review and approve samples. Request modifications if needed.',
      duration: '5-7 days'
    },
    {
      step: 5,
      title: 'Mass Production',
      description: 'Full-scale production with rigorous quality control.',
      duration: '15-25 days'
    },
    {
      step: 6,
      title: 'QC & Shipping',
      description: 'Final inspection and shipment to your destination.',
      duration: '5-10 days'
    }
  ]

  const capabilities = [
    { label: 'Annual Production Capacity', value: '100,000', unit: ' units' },
    { label: 'Product Models', value: '50', unit: '+' },
    { label: 'Countries Served', value: '50', unit: '+' },
    { label: 'Years Experience', value: '25', unit: '+' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                OEM/ODM Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Partner with Ruidi for comprehensive mobility scooter manufacturing solutions. 
                From design to delivery, we support your business every step of the way.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/catalog">
                    View Product Catalog
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-primary-foreground/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                  alt="OEM Manufacturing"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b bg-card py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {capabilities.map((cap) => (
              <div key={cap.label} className="text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={parseInt(cap.value.replace(/,/g, ''))} suffix={cap.unit} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{cap.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Manufacturing Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to bring your mobility products to market
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-0 bg-muted/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A streamlined workflow from inquiry to delivery
            </p>
          </div>

          <div className="mt-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <Card key={step.step} className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-6xl font-bold text-muted/50">
                    {step.step}
                  </div>
                  <CardContent className="relative p-6">
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Clock className="h-4 w-4" />
                      {step.duration}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Total estimated lead time: <strong className="text-foreground">35-60 days</strong> (varies by order size)
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Partner With Ruidi?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                With 25+ years of manufacturing experience and a commitment to quality, 
                Ruidi is your trusted partner for mobility scooter production.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  { icon: Shield, title: 'Quality Assurance', desc: 'ISO 13485 certified quality management system ensures consistent product quality.' },
                  { icon: Zap, title: 'Fast Turnaround', desc: 'Efficient production processes and streamlined logistics for quick delivery.' },
                  { icon: Users, title: 'Dedicated Support', desc: 'Personal account manager and technical support throughout your project.' },
                  { icon: FileCheck, title: 'Full Compliance', desc: 'CE, FDA, TUV certifications with complete documentation for global markets.' }
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=600&fit=crop"
                  alt="Manufacturing Excellence"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-6 shadow-lg">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Global Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-card p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Minimum Order Quantities</h2>
                <p className="mt-4 text-muted-foreground">
                  Flexible MOQ options to suit businesses of all sizes. Start small and scale as your business grows.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">5-10</div>
                  <div className="text-sm text-muted-foreground">Sample Orders</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">20-50</div>
                  <div className="text-sm text-muted-foreground">Standard MOQ</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Volume Discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Start Your OEM/ODM Project?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Contact our team today to discuss your requirements and get a custom quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/trade-account">
                Apply for Trade Account
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
