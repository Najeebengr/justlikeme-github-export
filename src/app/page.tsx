// src/app/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-10"></div>
        <div className="container-wide py-16 md:py-24 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Your Digital Twin, <span className="text-primary-600">Just Like You</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl">
                Create an AI-powered digital twin based on your voice, likeness, personality, and knowledge. Connect with fans and share your expertise in a whole new way.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" variant="primary">Get Started</Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" variant="outline">Explore Marketplace</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              {/* Placeholder for video/image */}
              <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-500 text-lg">Demo Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              Creating your digital twin is simple. Follow these steps to bring your AI-powered twin to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 relative">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Create Your Profile</h3>
              <p className="text-neutral-600">
                Sign up and create your talent profile with details about your expertise, background, and personality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 relative">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Upload Your Content</h3>
              <p className="text-neutral-600">
                Upload voice recordings, videos, and written content to train your AI twin on your unique style and knowledge.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 relative">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Connect With Fans</h3>
              <p className="text-neutral-600">
                Set your pricing, publish your twin, and start earning as fans engage with your digital twin.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="secondary">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Talents Section */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title mb-2">Featured Talents</h2>
              <p className="text-lg text-neutral-600">
                Discover digital twins from notable individuals across various fields.
              </p>
            </div>
            <Link href="/marketplace" className="hidden md:block">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Talent Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dr. Jane Smith</h3>
                <p className="text-neutral-600 mb-4">Neuroscientist & Author</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$5 / minute</p>
                  </div>
                  <Link href="/talent/jane-smith">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Talent Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
                <p className="text-neutral-600 mb-4">Business Coach & Entrepreneur</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$8 / minute</p>
                  </div>
                  <Link href="/talent/michael-johnson">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Talent Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
              <div className="h-48 bg-neutral-200 relative">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sarah Williams</h3>
                <p className="text-neutral-600 mb-4">Fitness Expert & Nutritionist</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-neutral-500">Starting at</span>
                    <p className="text-lg font-bold text-primary-600">$6 / minute</p>
                  </div>
                  <Link href="/talent/sarah-williams">
                    <Button variant="primary" size="sm">Chat Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link href="/marketplace">
              <Button variant="outline">View All Talents</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle mx-auto">
              Choose the plan that works best for you. No hidden fees, no commitments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Subscription Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-2">Monthly Subscription</h3>
              <p className="text-neutral-600 mb-6">Perfect for regular conversations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">$29.99</span>
                <span className="text-neutral-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">60 minutes of conversation per month</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Access to all available talents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Rollover unused minutes (up to 30)</span>
                </li>
              </ul>
              <Link href="/pricing">
                <Button variant="primary" fullWidth={true}>Choose Plan</Button>
              </Link>
            </div>
            
            {/* Pay Per Minute Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-primary-600 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Pay Per Minute</h3>
              <p className="text-neutral-600 mb-6">Flexible for occasional users</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">$0.99</span>
                <span className="text-neutral-600">/minute</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Pay only for what you use</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Access to all available talents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">No commitment or monthly fees</span>
                </li>
              </ul>
              <Link href="/pricing">
                <Button variant="primary" fullWidth={true}>Choose Plan</Button>
              </Link>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-neutral-600 mb-6">For dedicated enthusiasts</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">$99.99</span>
                <span className="text-neutral-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Unlimited minutes of conversation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Priority access to new talents</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-600">Exclusive premium-only content</span>
                </li>
              </ul>
              <Link href="/pricing">
                <Button variant="primary" fullWidth={true}>Choose Plan</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Digital Twin?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join our platform today and start connecting with fans in a whole new way. Turn your expertise into a digital asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary">Get Started Now</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
