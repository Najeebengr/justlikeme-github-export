// src/app/talent/[slug]/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Tabs, TabsList, TabsTrigger, TabsContent, Badge } from '@/app/components/ui';

export default function TalentDetailPage() {
  // This would normally fetch data based on the slug
  // const talentSlug = params.slug;
  
  return (
    <div className="bg-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Talent Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Talent Image */}
              <div className="w-full md:w-64 h-64 bg-neutral-200 rounded-lg relative flex-shrink-0">
                {/* Placeholder for talent image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-500">Talent Image</span>
                </div>
              </div>
              
              {/* Talent Info */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-neutral-900">Dr. Jane Smith</h1>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <p className="text-xl text-neutral-600 mb-4">Neuroscientist & Author</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-600 ml-2">4.9 (128 reviews)</span>
                </div>
                
                <p className="text-neutral-600 mb-6">
                  Leading neuroscientist and bestselling author specializing in brain plasticity and cognitive enhancement. 
                  Dr. Smith has published over 50 research papers and 3 books on neuroscience for the general public.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Neuroscience</Badge>
                  <Badge variant="secondary">Brain Health</Badge>
                  <Badge variant="secondary">Cognitive Science</Badge>
                  <Badge variant="secondary">Psychology</Badge>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="about">
              <TabsList className="mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="expertise">Expertise</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold mb-4">About Dr. Jane Smith</h2>
                    <div className="prose max-w-none text-neutral-600">
                      <p className="mb-4">
                        Dr. Jane Smith is a renowned neuroscientist and bestselling author who has dedicated her career to understanding how the brain works and sharing that knowledge with the world. With a Ph.D. from Stanford University and postdoctoral work at Harvard Medical School, she brings over 15 years of research experience to her digital twin.
                      </p>
                      <p className="mb-4">
                        As the director of the Cognitive Enhancement Lab at the University of California, Dr. Smith leads a team of researchers exploring the frontiers of brain plasticity and cognitive performance. Her groundbreaking work has been featured in leading scientific journals including Nature Neuroscience and The Journal of Cognitive Neuroscience.
                      </p>
                      <p className="mb-4">
                        Beyond her academic work, Dr. Smith is passionate about making neuroscience accessible to everyone. Her books &quot;The Adaptive Brain&quot; and &quot;Rewire Your Thinking&quot; have sold over a million copies worldwide and been translated into 28 languages. She regularly appears on podcasts and television programs to discuss her research and its practical applications.
                      </p>
                      <p>
                        Dr. Smith&apos;s digital twin is trained on her extensive body of work, including her books, research papers, interviews, lectures, and podcast appearances. It can discuss a wide range of topics related to neuroscience, brain health, cognitive enhancement, and the practical applications of neuroscience research in everyday life.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="expertise">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold mb-4">Areas of Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Brain Plasticity</h3>
                        <p className="text-neutral-600 mb-4">
                          Expert in neuroplasticity and how the brain changes throughout life. Can discuss how to harness brain plasticity for learning, recovery from injury, and cognitive enhancement.
                        </p>
                        
                        <h3 className="text-lg font-semibold mb-2">Cognitive Enhancement</h3>
                        <p className="text-neutral-600 mb-4">
                          Specializes in evidence-based approaches to improving memory, focus, creativity, and overall cognitive performance through lifestyle interventions.
                        </p>
                        
                        <h3 className="text-lg font-semibold mb-2">Neuroscience of Learning</h3>
                        <p className="text-neutral-600">
                          Expert on how the brain acquires and consolidates new information. Can provide insights on optimal learning strategies based on neuroscientific principles.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Brain Health & Aging</h3>
                        <p className="text-neutral-600 mb-4">
                          Researches factors that contribute to brain health across the lifespan and strategies to maintain cognitive function with age.
                        </p>
                        
                        <h3 className="text-lg font-semibold mb-2">Stress & The Brain</h3>
                        <p className="text-neutral-600 mb-4">
                          Studies the effects of stress on brain function and can discuss evidence-based approaches to managing stress for optimal brain health.
                        </p>
                        
                        <h3 className="text-lg font-semibold mb-2">Sleep & Cognition</h3>
                        <p className="text-neutral-600">
                          Expert on the relationship between sleep and cognitive function, including memory consolidation and creative problem-solving during sleep.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold">Reviews</h2>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-neutral-900 ml-2">4.9 out of 5</span>
                        <span className="text-sm text-neutral-500 ml-1">(128 reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Review 1 */}
                      <div className="border-b border-neutral-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3"></div>
                            <div>
                              <p className="font-medium text-neutral-900">Michael R.</p>
                              <p className="text-sm text-neutral-500">April 8, 2025</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-neutral-600">
                          Incredible experience! Dr. Smith&apos;s digital twin was able to explain complex neuroscience concepts in a way that was easy to understand. I had questions about improving my memory for exams, and the advice was practical and backed by research. It really felt like I was talking to the real Dr. Smith!
                        </p>
                      </div>
                      
                      {/* Review 2 */}
                      <div className="border-b border-neutral-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3"></div>
                            <div>
                              <p className="font-medium text-neutral-900">Sarah T.</p>
                              <p className="text-sm text-neutral-500">April 5, 2025</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star, index) => (
                              <svg key={star} className={`w-4 h-4 ${index < 5 ? 'text-yellow-500' : 'text-neutral-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-neutral-600">
                          As someone who&apos;s read all of Dr. Smith&apos;s books, I was skeptical about how well an AI could capture her expertise. I was pleasantly surprised! The digital twin referenced specific parts of her research that were relevant to my questions about brain health and aging. The conversation was engaging and informative.
                        </p>
                      </div>
                      
                      {/* Review 3 */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3"></div>
                            <div>
                              <p className="font-medium text-neutral-900">David L.</p>
                              <p className="text-sm text-neutral-500">April 1, 2025</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-neutral-600">
                          Good conversation overall. The digital twin was knowledgeable about neuroscience topics and provided helpful insights on improving focus and attention. I&apos;m giving 4 stars because there were a couple of times when the responses felt a bit generic. Still, it was worth the money and I&apos;d use it again.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button variant="outline">View All Reviews</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Pricing & Chat */}
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Start a Conversation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Pricing Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="pay-per-minute"
                        name="pricing-option"
                        type="radio"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                        defaultChecked
                      />
                      <label htmlFor="pay-per-minute" className="ml-3 block">
                        <span className="text-sm font-medium text-neutral-900">Pay Per Minute</span>
                        <span className="block text-sm text-neutral-500">$5.00 per minute</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="subscription"
                        name="pricing-option"
                        type="radio"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                      />
                      <label htmlFor="subscription" className="ml-3 block">
                        <span className="text-sm font-medium text-neutral-900">Monthly Subscription</span>
                        <span className="block text-sm text-neutral-500">$29.99 for 60 minutes</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">What would you like to discuss?</h3>
                  <textarea
                    rows={4}
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Enter your question or topic..."
                  ></textarea>
                </div>
                
                <Button variant="primary" fullWidth>
                  Start Conversation
                </Button>
                
                <p className="mt-4 text-sm text-neutral-500 text-center">
                  By starting a conversation, you agree to our{' '}
                  <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
