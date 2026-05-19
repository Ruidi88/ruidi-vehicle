'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  ArrowRight, 
  DollarSign, 
  CreditCard, 
  HeadphonesIcon, 
  Package,
  CheckCircle,
  Send,
  Building,
  Globe
} from 'lucide-react'

export default function TradeAccountPage() {
  const { t } = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const benefits = [
    {
      icon: DollarSign,
      title: t.trade.benefits.pricing,
      description: t.trade.benefits.pricingDesc
    },
    {
      icon: CreditCard,
      title: t.trade.benefits.credit,
      description: t.trade.benefits.creditDesc
    },
    {
      icon: HeadphonesIcon,
      title: t.trade.benefits.support,
      description: t.trade.benefits.supportDesc
    },
    {
      icon: Package,
      title: t.trade.benefits.samples,
      description: t.trade.benefits.samplesDesc
    }
  ]

  const businessTypes = [
    { value: 'distributor', label: 'Distributor' },
    { value: 'retailer', label: 'Retailer' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'medical', label: 'Medical Equipment Supplier' },
    { value: 'rental', label: 'Rental Service' },
    { value: 'other', label: 'Other' }
  ]

  const annualVolumes = [
    { value: '1-50', label: '1-50 units' },
    { value: '51-100', label: '51-100 units' },
    { value: '101-500', label: '101-500 units' },
    { value: '501-1000', label: '501-1000 units' },
    { value: '1000+', label: '1000+ units' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.trade.title}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t.trade.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">
            {t.trade.benefits.title}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Trade Account Application</CardTitle>
              <p className="text-muted-foreground">
                Complete the form below and our team will review your application within 24-48 hours.
              </p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">Application Submitted!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for your application. Our team will review it and contact you within 24-48 hours.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <Button variant="outline" asChild>
                      <Link href="/products">Browse Products</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/catalog">Download Catalog</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Company Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" />
                      Company Information
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input id="companyName" required placeholder="Your Company Ltd." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Company Website</Label>
                        <Input id="website" type="url" placeholder="https://yourcompany.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                        <Input id="yearsInBusiness" type="number" required min="0" placeholder="5" />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                      <Globe className="h-5 w-5 text-accent" />
                      Contact Information
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input id="contactName" required placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position/Title *</Label>
                        <Input id="position" required placeholder="Purchasing Manager" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required placeholder="+1 234 567 8900" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address">Business Address *</Label>
                        <Input id="address" required placeholder="123 Business Street, City, Country" />
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
                      <Package className="h-5 w-5 text-accent" />
                      Business Details
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="annualVolume">Estimated Annual Volume *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select volume" />
                          </SelectTrigger>
                          <SelectContent>
                            {annualVolumes.map((vol) => (
                              <SelectItem key={vol.value} value={vol.value}>
                                {vol.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="targetMarket">Target Market/Region *</Label>
                        <Input id="targetMarket" required placeholder="e.g., Western Europe, USA" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="currentProducts">Currently Selling Mobility Products?</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, currently selling</SelectItem>
                            <SelectItem value="no">No, new to the market</SelectItem>
                            <SelectItem value="planning">Planning to start</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea 
                      id="additionalInfo" 
                      rows={4}
                      placeholder="Tell us about your business, your customers, and your goals..."
                      className="mt-2"
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the{' '}
                      <Link href="/terms" className="text-accent hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          
          <div className="mt-8 space-y-4">
            {[
              {
                q: 'How long does the application review take?',
                a: 'We typically review applications within 24-48 business hours. For complete applications with all required information, approval is usually faster.'
              },
              {
                q: 'What are the requirements for a trade account?',
                a: 'We accept applications from legitimate businesses including distributors, retailers, medical equipment suppliers, and rental services. A valid business registration is required.'
              },
              {
                q: 'Is there a minimum order requirement?',
                a: 'Yes, our standard MOQ varies by product category, typically ranging from 5-50 units. Trade account holders may qualify for flexible terms.'
              },
              {
                q: 'What payment terms are available?',
                a: 'We offer various payment options including T/T, L/C, and credit terms for qualified partners. Terms are discussed during the account setup process.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
