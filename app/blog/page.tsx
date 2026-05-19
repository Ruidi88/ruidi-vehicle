'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { blogPosts, blogCategories, type BlogPost } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  ArrowRight, 
  Search,
  Calendar,
  Clock,
  User,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BlogPage() {
  const { t } = useLocale()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              {t.blog.title}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="group overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-muted">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-6 lg:p-10">
                  <Badge variant="secondary" className="w-fit">Featured</Badge>
                  <h2 className="mt-4 text-2xl font-bold text-foreground lg:text-3xl group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="mt-6">
                    <span className="flex items-center text-sm font-medium text-accent">
                      {t.blog.readMore}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="border-y bg-muted/30 py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeCategory === category.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card text-foreground hover:bg-muted'
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory('all')
                  setSearchQuery('')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Stay Updated with Industry News
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Subscribe to our newsletter for the latest product updates, industry trends, and business insights.
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 sm:w-80"
            />
            <Button type="submit" variant="secondary">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const { t } = useLocale()
  
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge 
            className="absolute left-3 top-3" 
            variant="secondary"
          >
            {blogCategories.find(c => c.id === post.category)?.name}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
