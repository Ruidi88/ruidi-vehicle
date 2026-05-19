"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Globe, Phone, MessageCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const locales = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

const products = [
  { name: "Travel Scooters", href: "/products?category=travel", desc: "Lightweight, foldable designs" },
  { name: "4-Wheel Scooters", href: "/products?category=4-wheel", desc: "Maximum stability & comfort" },
  { name: "3-Wheel Scooters", href: "/products?category=3-wheel", desc: "Agile & maneuverable" },
  { name: "Heavy Duty", href: "/products?category=heavy-duty", desc: "High capacity & power" },
  { name: "Accessories", href: "/products?category=accessories", desc: "Parts & components" },
]

const services = [
  { name: "OEM/ODM Services", href: "/services/oem-odm", desc: "Custom manufacturing for your brand" },
  { name: "Wholesale Program", href: "/services/wholesale", desc: "Competitive B2B pricing" },
  { name: "Certification Support", href: "/services/certification", desc: "CE, FDA, ISO documentation" },
  { name: "Global Logistics", href: "/services/logistics", desc: "Worldwide shipping solutions" },
  { name: "Technical Support", href: "/services/support", desc: "Expert guidance & after-sales" },
  { name: "Partner Program", href: "/services/partners", desc: "Become an authorized dealer" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState("en")
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-9 text-xs">
          <p className="hidden md:flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/10 rounded text-[10px]">B2B</span>
            Global OEM/ODM Mobility Scooter Manufacturer | 20+ Years Experience | ISO 13485 Certified
          </p>
          <p className="md:hidden text-[11px] opacity-90">
            20+ Years | 50+ Countries | ISO Certified
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="tel:+8657982520052" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span>+86 579 8252 0052</span>
            </a>
            <a 
              href="https://wa.me/8613957900152" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WhatsApp</span>
            </a>
            <div className="w-px h-4 bg-white/20" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 hover:opacity-80 transition-opacity text-xs">
                  <Globe className="h-3 w-3" />
                  <span className="uppercase font-medium">{locale}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px]">
                {locales.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLocale(l.code)}
                    className={cn("cursor-pointer", locale === l.code && "bg-muted")}
                  >
                    <span className="mr-2">{l.flag}</span>
                    {l.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
                  R
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-foreground leading-tight tracking-tight">RUIDI</div>
                <div className="text-[10px] text-muted-foreground leading-tight tracking-widest uppercase">Mobility Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50">
                  Products
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", productsOpen && "rotate-180")} />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-xl border border-border/50 p-2 min-w-[280px]">
                      {products.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex flex-col px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{item.name}</span>
                          <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                      <div className="border-t border-border/50 mt-2 pt-2">
                        <Link
                          href="/products"
                          className="flex items-center justify-between px-4 py-2 text-sm font-medium text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          View All Products
                          <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50">
                  Services
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-xl border border-border/50 p-2 min-w-[300px]">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex flex-col px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{item.name}</span>
                          <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9">
                <Search className="h-4 w-4" />
              </Button>
              <Link href="/trade-account" className="hidden sm:block">
                <Button variant="outline" size="sm" className="h-9 text-xs font-medium">
                  Trade Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm" className="h-9 text-xs font-medium">
                  Get Quote
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-9 w-9"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/services"
                className="px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2.5 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t my-3" />
              <Link
                href="/trade-account"
                className="px-3 py-2.5 text-sm font-semibold text-primary hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Apply for Trade Account →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
