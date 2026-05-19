"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, Youtube, Instagram, MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react"

export function Footer() {
  const productLinks = [
    { href: "/products?category=travel", label: "Travel Scooters" },
    { href: "/products?category=4-wheel", label: "4-Wheel Scooters" },
    { href: "/products?category=3-wheel", label: "3-Wheel Scooters" },
    { href: "/products?category=heavy-duty", label: "Heavy Duty" },
    { href: "/products?category=accessories", label: "Accessories" },
  ]

  const serviceLinks = [
    { href: "/services/oem-odm", label: "OEM/ODM Services" },
    { href: "/services/wholesale", label: "Wholesale Program" },
    { href: "/services/certification", label: "Certification Support" },
    { href: "/services/logistics", label: "Global Logistics" },
    { href: "/services/support", label: "Technical Support" },
  ]

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/about#factory", label: "Factory Tour" },
    { href: "/about#certifications", label: "Certifications" },
    { href: "/blog", label: "Blog & News" },
    { href: "/contact", label: "Contact Us" },
  ]

  const businessLinks = [
    { href: "/trade-account", label: "Trade Account" },
    { href: "/services/partners", label: "Become a Partner" },
    { href: "/resources", label: "Resources & Downloads" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold">Join Our Newsletter</h3>
              <p className="mt-2 text-sm text-background/70">
                Get industry insights, new product announcements, and exclusive B2B offers delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your business email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-11 min-w-[280px]"
              />
              <Button type="submit" variant="secondary" className="h-11 px-6 font-medium">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-background text-foreground flex items-center justify-center font-bold text-xl">
                R
              </div>
              <div>
                <div className="font-bold text-lg leading-tight tracking-tight">RUIDI</div>
                <div className="text-[10px] text-background/60 leading-tight tracking-widest uppercase">Mobility Solutions</div>
              </div>
            </Link>
            <p className="mt-5 text-sm text-background/70 leading-relaxed max-w-sm">
              Leading manufacturer of mobility scooters with 20+ years experience. ISO 13485 certified. Trusted by distributors in 50+ countries worldwide.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm group">
                <MapPin className="h-4 w-4 shrink-0 text-background/50 mt-0.5" />
                <span className="text-background/70 group-hover:text-background transition-colors">
                  58 Feiyang Road, Jinhua, Zhejiang, China 321000
                </span>
              </a>
              <a href="tel:+8657982520052" className="flex items-center gap-3 text-sm group">
                <Phone className="h-4 w-4 shrink-0 text-background/50" />
                <span className="text-background/70 group-hover:text-background transition-colors">+86 579 8252 0052</span>
              </a>
              <a href="mailto:sales@ruidiscooter.com" className="flex items-center gap-3 text-sm group">
                <Mail className="h-4 w-4 shrink-0 text-background/50" />
                <span className="text-background/70 group-hover:text-background transition-colors">sales@ruidiscooter.com</span>
              </a>
              <a href="https://wa.me/8613957900152" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm group">
                <MessageCircle className="h-4 w-4 shrink-0 text-background/50" />
                <span className="text-background/70 group-hover:text-background transition-colors">WhatsApp: +86 139 5790 0152</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center transition-colors hover:bg-background/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide uppercase mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="font-semibold text-sm tracking-wide uppercase mb-4">For Business</h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/trade-account">
                <Button variant="secondary" size="sm" className="w-full">
                  Apply for Trade Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-background/50">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-background/10 flex items-center justify-center font-bold text-[10px]">CE</span>
              <span>Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-background/10 flex items-center justify-center font-bold text-[10px]">FDA</span>
              <span>Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-background/10 flex items-center justify-center font-bold text-[10px]">ISO</span>
              <span>13485</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-background/10 flex items-center justify-center font-bold text-[10px]">TUV</span>
              <span>Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded bg-background/10 flex items-center justify-center font-bold text-[10px]">UKCA</span>
              <span>Approved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
            <p>&copy; {new Date().getFullYear()} Zhejiang Ruidi Vehicle Industry Co., Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-background transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
