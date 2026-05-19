import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle2,
  Package,
  Phone,
  ChevronRight,
  Star,
  Shield,
  Palette,
  Truck,
  ArrowLeft,
} from 'lucide-react'

// CareCo Vive 4 Product Data
const product = {
  id: 'careco-vive-4',
  name: 'CareCo Vive 4 Mobility Scooter',
  modelNumber: 'MS01010038',
  category: 'travel-scooters',
  price: '£599.99',
  description: 'The CareCo Vive 4 is a reliable, budget-friendly mobility scooter designed for everyday use. Its compact design is perfect for short trips like shopping, coffee outings, and getting around without relying on lifts or extensive planning. The scooter disassembles into 5 lightweight parts for easy storage and transportation — it even fits in most car boots. Two colour shrouds (Green & Blue) are included so you can customise the look.',
  images: [
    'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_base.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
    'https://www.careco.co.uk/media/catalog/product/v/i/vive_4_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
    'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
    'https://www.careco.co.uk/media/catalog/product/v/i/vive_4_5.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
    'https://www.careco.co.uk/media/catalog/product/m/s/ms01010038_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1024&width=750&canvas=750:1024',
  ],
  specs: [
    { label: 'Max Speed', value: '6.4 km/h (4 mph)' },
    { label: 'Range', value: 'Up to 16 km (10 miles)' },
    { label: 'Motor Power', value: '270W' },
    { label: 'Battery Type', value: '12Ah Dry Sealed Lead-Acid' },
    { label: 'Battery Watt Hours', value: '288 Wh' },
    { label: 'Charging', value: 'Off-board (battery charges separately)' },
    { label: 'Total Weight', value: '43.8 kg' },
    { label: 'Heaviest Part', value: '~15 kg (front frame)' },
    { label: 'Max User Weight', value: '136 kg (21 stone)' },
    { label: 'Turning Radius', value: '115 cm' },
    { label: 'Ground Clearance', value: '3 cm' },
    { label: 'Incline Rating', value: '6 degrees' },
    { label: 'Seat Width x Depth', value: '43.5 cm x 39 cm' },
    { label: 'Seat Height (adjustable)', value: '52-56 cm' },
    { label: 'Swivel Seat', value: 'Yes' },
    { label: 'Front/Rear Wheel Size', value: '20.3 cm (8") each' },
    { label: 'Tyre Type', value: 'Solid (puncture-proof)' },
    { label: 'Overall Dimensions (LxWxH)', value: '103 x 49 x 88 cm' },
    { label: 'Folded Height', value: '33 cm' },
    { label: 'Suspension', value: 'No' },
    { label: 'Lights', value: 'No' },
    { label: 'Disassembly Parts', value: '5 parts (tool-free)' },
    { label: 'Assembly Time', value: '~15 minutes, 1 person' },
  ],
  features: [
    'Tool-free disassembly into 5 parts',
    'Fits in car boot for easy transport',
    'Comfortable swivel seat with flip-up armrests',
    'Adjustable tiller bar for customised driving position',
    'Off-board charging - charge battery separately',
    'Two colour shrouds included: Green and Blue',
    'Solid tyres - no risk of punctures',
    'Up to 10 mile (16 km) battery range',
    'Budget-friendly, ideal for first-time users',
  ],
  certifications: ['CE', 'MDR'],
  colors: ['Green', 'Blue'],
  whatsIncluded: ['User Manual', 'Battery Charger', 'Keys (with spare)'],
  moq: 1,
}

export const metadata = {
  title: `${product.name} - Ruidi Mobility Solutions`,
  description: product.description,
}

export default function CareCoVive4Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <Badge className="absolute left-3 top-3 bg-orange-500 text-white text-sm px-3 py-1">
                  <Star className="mr-1 h-4 w-4" /> Featured
                </Badge>
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <div key={idx} className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${idx === 0 ? 'border-orange-500' : 'border-transparent'}`}>
                      <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" sizes="80px" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {product.certifications.map(cert => (
                    <Badge key={cert} variant="secondary">{cert}</Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="mt-1 text-sm text-gray-500 font-mono">Model: {product.modelNumber}</p>
              </div>

              {/* Price */}
              <div className="rounded-xl bg-orange-50 border border-orange-100 p-4">
                <p className="text-sm text-gray-500">Factory Direct Price</p>
                <p className="text-3xl font-bold text-orange-600 mt-1">{product.price}</p>
                <p className="text-xs text-gray-400 mt-1">* Trade pricing available - contact us for bulk quote</p>
              </div>

              <p className="text-base leading-relaxed text-gray-600">{product.description}</p>

              {/* Key Specs */}
              <div>
                <h3 className="font-semibold mb-3">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { l: 'Max Speed', v: '6.4 km/h (4 mph)' },
                    { l: 'Range', v: '16 km (10 miles)' },
                    { l: 'Weight', v: '43.8 kg total' },
                    { l: 'Capacity', v: '136 kg (21 st)' },
                  ].map(s => (
                    <div key={s.l} className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">{s.l}</p>
                      <p className="font-semibold text-sm mt-0.5">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2"><Palette className="h-4 w-4" /> Available Colours</h3>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <span key={color} className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1 text-sm">
                      <span className={`h-3 w-3 rounded-full ${color === 'Green' ? 'bg-green-500' : 'bg-blue-500'}`} />{color}
                    </span>
                  ))}
                </div>
              </div>

              {/* MOQ / Lead Time */}
              <div className="flex items-center gap-6 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-blue-600" />
                  <div><p className="text-xs text-gray-500">MOQ</p><p className="font-bold">{product.moq} unit</p></div>
                </div>
                <div className="h-10 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <div><p className="text-xs text-gray-500">Lead Time</p><p className="font-bold">15-30 days</p></div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 bg-orange-500 hover:bg-orange-600 text-base" asChild>
                  <Link href="/contact"><Phone className="mr-2 h-5 w-5" /> Request Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <Link href="/catalog">Download Catalog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Specs Table */}
      <section className="border-t bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr key={spec.label} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b last:border-b-0`}>
                      <td className="px-6 py-3 text-sm font-medium text-gray-500 w-1/3">{spec.label}</td>
                      <td className="px-6 py-3 text-sm font-semibold text-gray-900">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map(feat => (
              <div key={feat} className="flex items-start gap-3 rounded-lg border p-4 hover:shadow-md transition-shadow">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Package className="h-6 w-6" /> What's Included</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {product.whatsIncluded.map(item => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-white border p-3">
                <CheckCircle2 className="h-4 w-4 text-green-500" /><span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 border-t">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Shield className="h-6 w-6" /> Certifications</h2>
          <div className="flex flex-wrap gap-3">
            {product.certifications.map(cert => (
              <Badge key={cert} variant="outline" className="px-4 py-2 text-sm">{cert === 'CE' ? '✅ CE Marked' : cert === 'MDR' ? '🏥 MDR Compliant' : cert}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0B1D35] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Interested in This Product?</h2>
          <p className="mt-4 text-gray-300">Contact our sales team for bulk pricing, OEM customisation, and shipping quotes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/contact">Get A Quote Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/products"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
