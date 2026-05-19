'use client'

import { useState } from 'react'
import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  Building
} from 'lucide-react'

export default function ContactPage() {
  const { t } = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.info.address,
      value: t.contact.info.addressValue,
      link: 'https://maps.google.com/?q=58+Feiyang+Road+Jinhua+Zhejiang+China'
    },
    {
      icon: Phone,
      title: t.contact.info.phone,
      value: '+86 139 0579 6145',
      link: 'tel:+8613905796145'
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      value: 'info@rdscooter.com',
      link: 'mailto:info@rdscooter.com'
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      link: null
    }
  ]

  const regions = [
    { value: 'europe', label: 'Europe' },
    { value: 'north-america', label: 'North America' },
    { value: 'asia-pacific', label: 'Asia Pacific' },
    { value: 'middle-east', label: 'Middle East' },
    { value: 'africa', label: 'Africa' },
    { value: 'south-america', label: 'South America' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                        <Send className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for your inquiry. Our team will get back to you within 24 hours.
                      </p>
                      <Button 
                        className="mt-6" 
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.form.name} *</Label>
                          <Input id="name" required placeholder="John Smith" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">{t.contact.form.company} *</Label>
                          <Input id="company" required placeholder="Company Ltd." />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">{t.contact.form.email} *</Label>
                          <Input id="email" type="email" required placeholder="john@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t.contact.form.phone}</Label>
                          <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="country">{t.contact.form.country} *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select region" />
                            </SelectTrigger>
                            <SelectContent>
                              {regions.map((region) => (
                                <SelectItem key={region.value} value={region.value}>
                                  {region.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interest">{t.contact.form.interest} *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select interest" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wholesale">{t.contact.form.interests.wholesale}</SelectItem>
                              <SelectItem value="oem">{t.contact.form.interests.oem}</SelectItem>
                              <SelectItem value="sample">{t.contact.form.interests.sample}</SelectItem>
                              <SelectItem value="other">{t.contact.form.interests.other}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t.contact.form.message} *</Label>
                        <Textarea 
                          id="message" 
                          required 
                          rows={5}
                          placeholder="Please describe your requirements, including estimated quantities, target markets, and any specific customization needs..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : t.contact.form.submit}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <Card key={info.title}>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="mt-1 text-sm text-muted-foreground hover:text-accent"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              {/* WhatsApp CTA */}
              <Card className="bg-[#25D366] text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-8 w-8" />
                    <div>
                      <h3 className="font-semibold">Chat on WhatsApp</h3>
                      <p className="text-sm text-white/80">Quick response guaranteed</p>
                    </div>
                  </div>
                  <Button 
                    className="mt-4 w-full bg-white text-[#25D366] hover:bg-white/90" 
                    asChild
                  >
                    <a 
                      href="https://wa.me/8613905796145?text=Hello%2C%20I%20am%20interested%20in%20your%20mobility%20scooters."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <div className="aspect-[21/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d119.65!3d29.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA0JzQ4LjAiTiAxMTnCsDM5JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ruidi Factory Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">Global Presence</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Serving distributors worldwide from our headquarters in China
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { region: 'Europe', markets: 'UK, Germany, France, Italy', icon: Globe },
              { region: 'North America', markets: 'USA, Canada, Mexico', icon: Globe },
              { region: 'Asia Pacific', markets: 'Japan, Australia, Korea', icon: Globe },
              { region: 'Middle East', markets: 'UAE, Saudi Arabia, Israel', icon: Globe }
            ].map((office) => {
              const Icon = office.icon
              return (
                <Card key={office.region}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{office.region}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{office.markets}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
