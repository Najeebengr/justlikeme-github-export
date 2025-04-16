// src/app/auth/register/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900">Create your account</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="consumer">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="consumer">As Consumer</TabsTrigger>
                <TabsTrigger value="talent">As Talent</TabsTrigger>
              </TabsList>
              
              <TabsContent value="consumer">
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First name"
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                      fullWidth
                    />
                    
                    <Input
                      label="Last name"
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      required
                      fullWidth
                    />
                  </div>
                  
                  <Input
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    fullWidth
                  />
                  
                  <Input
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    fullWidth
                  />
                  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-neutral-900">
                      I agree to the{' '}
                      <Link href="/terms" className="font-medium text-primary-600 hover:text-primary-500">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button type="submit" variant="primary" fullWidth>
                    Create account
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="talent">
                <form className="space-y-6" action="#" method="POST">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First name"
                      id="talent-first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                      fullWidth
                    />
                    
                    <Input
                      label="Last name"
                      id="talent-last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      required
                      fullWidth
                    />
                  </div>
                  
                  <Input
                    label="Email address"
                    id="talent-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    fullWidth
                  />
                  
                  <Input
                    label="Password"
                    id="talent-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    fullWidth
                  />
                  
                  <Input
                    label="Professional title"
                    id="professional-title"
                    name="professional-title"
                    type="text"
                    placeholder="e.g., Author, Coach, Entrepreneur"
                    required
                    fullWidth
                  />
                  
                  <div className="flex items-center">
                    <input
                      id="talent-terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      required
                    />
                    <label htmlFor="talent-terms" className="ml-2 block text-sm text-neutral-900">
                      I agree to the{' '}
                      <Link href="/terms" className="font-medium text-primary-600 hover:text-primary-500">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button type="submit" variant="primary" fullWidth>
                    Create talent account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-neutral-500">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
