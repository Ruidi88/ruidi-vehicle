'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { AnimatedCounter } from '@/components/animated-counter'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Factory, 
  Award, 
  Users, 
  Globe, 
  ArrowRight, 
  Play,
  CheckCircle,
  Building,
  Cog,
  Truck
} from 'lucide-react'

export default function AboutPage() {
  const { t } = useLocale()

  const milestones = [
    { year: '1999', event: 'Company Founded', desc: 'Started as a family business in Jinhua, Zhejiang' },
    { year: '2005', event: 'First Export', desc: 'Began exporting to European markets' },
    { year: '2010', event: 'ISO Certification', desc: 'Achieved ISO 9001 quality certification' },
    { year: '2015', event: 'Factory Expansion', desc: 'New 20,000 sqm manufacturing facility' },
    { year: '2018', event: 'ISO 13485', desc: 'Medical device quality management certification' },
    { year: '2023', event: 'Global Reach', desc: 'Serving distributors in 50+ countries' },
  ]

  const facilityStats = [
    { icon: Building, value: '20,000', unit: 'sqm', label: t.about.facility.area },
    { icon: Cog, value: '5', unit: '', label: t.about.facility.lines },
    { icon: Users, value: '200', unit: '+', label: t.about.facility.workers },
    { icon: Truck, value: '300', unit: '+', label: t.about.facility.daily },
  ]

  const values = [
    {
      title: 'Quality First',
      desc: 'Every product undergoes rigorous quality control to meet international standards.',
      icon: Award
    },
    {
      title: 'Innovation',
      desc: 'Continuous R&D investment to develop cutting-edge mobility solutions.',
      icon: Cog
    },
    {
      title: 'Partnership',
      desc: 'Building long-term relationships with distributors worldwide.',
      icon: Users
    },
    {
      title: 'Global Vision',
      desc: 'Committed to improving mobility and independence globally.',
      icon: Globe
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-pretty text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.about.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t.about.history.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t.about.history.content}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Over two decades, we have grown from a small workshop to a modern manufacturing facility,
                serving distributors across Europe, North America, Asia, and beyond. Our commitment to
                quality and innovation has made us a trusted partner for businesses worldwide.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/catalog">
                    View Catalog
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop"
                  alt="Ruidi Factory"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Our Journey
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            25 years of growth and innovation
          </p>

          <div className="mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border hidden lg:block" />
              
              <div className="space-y-8 lg:space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card className="inline-block">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                          <div className="mt-2 font-semibold text-foreground">{milestone.event}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{milestone.desc}</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-accent">
                        <div className="h-2 w-2 rounded-full bg-accent-foreground" />
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop"
                    alt="Manufacturing"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop"
                    alt="Quality Control"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t.about.mission.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t.about.mission.content}
              </p>
              <div className="mt-8 space-y-4">
                {['CE, FDA, ISO 13485 Certified', 'In-house R&D Team', '24/7 Quality Monitoring', 'Eco-friendly Manufacturing'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Stats Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-foreground">
            {t.about.facility.title}
          </h2>
          <p className="mt-4 text-center text-lg text-primary-foreground/80">
            State-of-the-art manufacturing capabilities
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {facilityStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="mt-4 text-4xl font-bold text-primary-foreground">
                    <AnimatedCounter end={parseInt(stat.value.replace(/,/g, ''))} suffix={stat.unit} />
                  </div>
                  <div className="mt-2 text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Factory Video Section */}
      <section id="video" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Factory Tour
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take a virtual tour of our manufacturing facility
            </p>
          </div>

          <div className="mt-12">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=675&fit=crop"
                alt="Factory Tour"
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform hover:scale-110">
                  <Play className="h-8 w-8 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Our Core Values
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            The principles that guide everything we do
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our global network of distributors and grow your business with Ruidi
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
