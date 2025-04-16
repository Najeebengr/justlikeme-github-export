// src/app/marketplace/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, Input, Select } from '@/app/components/ui';

export default function MarketplacePage() {
  return (
    <div className="bg-white">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Marketplace</h1>
            <p className="mt-2 text-lg text-neutral-600">
              Discover and connect with AI-powered digital twins from notable individuals
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="primary">Browse Categories</Button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-neutral-50 rounded-lg p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search by name or expertise..."
              fullWidth
            />
            <Select
              options={[
                { value: '', label: 'All Categories' },
                { value: 'business', label: 'Business & Entrepreneurship' },
                { value: 'science', label: 'Science & Technology' },
                { value: 'health', label: 'Health & Wellness' },
                { value: 'arts', label: 'Arts & Entertainment' },
                { value: 'education', label: 'Education & Academia' },
              ]}
              fullWidth
            />
            <Select
              options={[
                { value: 'popular', label: 'Most Popular' },
                { value: 'newest', label: 'Newest' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
              ]}
              fullWidth
            />
          </div>
        </div>

        {/* Featured Talents Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Featured Talents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Talent Card 1 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
                <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Dr. Jane Smith</h3>
                <p className="text-neutral-600 text-sm mb-2">Neuroscientist & Author</p>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">4.9 (128 reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$5 / minute</p>
                  </div>
                  <Link href="/talent/jane-smith">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Talent Card 2 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Michael Johnson</h3>
                <p className="text-neutral-600 text-sm mb-2">Business Coach & Entrepreneur</p>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">4.8 (95 reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$8 / minute</p>
                  </div>
                  <Link href="/talent/michael-johnson">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Talent Card 3 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Sarah Williams</h3>
                <p className="text-neutral-600 text-sm mb-2">Fitness Expert & Nutritionist</p>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">4.7 (82 reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$6 / minute</p>
                  </div>
                  <Link href="/talent/sarah-williams">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Talent Card 4 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
                <div className="absolute top-2 right-2 bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">David Chen</h3>
                <p className="text-neutral-600 text-sm mb-2">Tech Innovator & Speaker</p>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">4.9 (42 reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$7 / minute</p>
                  </div>
                  <Link href="/talent/david-chen">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Card 1 */}
            <Link href="/marketplace/business" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 transition-all group-hover:shadow-md group-hover:border-primary-300">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">Business & Entrepreneurship</h3>
                <p className="text-neutral-600">Learn from successful entrepreneurs and business leaders.</p>
                <div className="mt-4 text-primary-600 font-medium flex items-center">
                  <span>Explore</span>
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Category Card 2 */}
            <Link href="/marketplace/science" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 transition-all group-hover:shadow-md group-hover:border-primary-300">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">Science & Technology</h3>
                <p className="text-neutral-600">Connect with leading scientists and technology innovators.</p>
                <div className="mt-4 text-primary-600 font-medium flex items-center">
                  <span>Explore</span>
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Category Card 3 */}
            <Link href="/marketplace/health" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 transition-all group-hover:shadow-md group-hover:border-primary-300">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">Health & Wellness</h3>
                <p className="text-neutral-600">Get advice from health experts, coaches, and wellness gurus.</p>
                <div className="mt-4 text-primary-600 font-medium flex items-center">
                  <span>Explore</span>
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* All Talents Section */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">All Talents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* 8 more talent cards would go here, similar to the ones above */}
            {/* For brevity, I'm showing just a placeholder for pagination */}
          </div>
          
          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <nav className="flex items-center">
              <Button variant="outline" size="sm" className="mr-2">
                Previous
              </Button>
              <div className="flex space-x-1">
                <Button variant="primary" size="sm" className="w-8 h-8 p-0">1</Button>
                <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
                <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
                <span className="flex items-center px-2">...</span>
                <Button variant="outline" size="sm" className="w-8 h-8 p-0">10</Button>
              </div>
              <Button variant="outline" size="sm" className="ml-2">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
