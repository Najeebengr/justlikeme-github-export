// src/app/talent/[slug]/conversation/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui';

export default function TalentConversationPage({ params }: { params: { slug: string } }) {
  // This would normally fetch data based on the slug
  const talentSlug = params.slug;
  
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container-wide py-8">
        <div className="flex items-center mb-8">
          <Link href={`/talent/${talentSlug}`} className="text-primary-600 hover:text-primary-700 mr-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900">Conversation with Dr. Jane Smith</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Conversation Area */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Conversation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* System Message */}
                  <div className="flex justify-center">
                    <div className="bg-neutral-100 rounded-lg px-4 py-2 max-w-md">
                      <p className="text-sm text-neutral-600 text-center">
                        You are now chatting with Dr. Jane Smith's digital twin. This conversation will be billed at $5.00 per minute.
                      </p>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-200"></div>
                    </div>
                    <div className="bg-white rounded-lg border border-neutral-200 px-4 py-3 max-w-3xl">
                      <p className="font-medium text-neutral-900 mb-1">Dr. Jane Smith</p>
                      <p className="text-neutral-700">
                        Hello! I'm Dr. Jane Smith's digital twin. I'm here to discuss neuroscience, brain health, cognitive enhancement, or any other topics related to my expertise. What would you like to talk about today?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary-100 rounded-lg px-4 py-3 max-w-3xl">
                      <p className="text-primary-800">
                        Hi Dr. Smith! I've been having trouble focusing while working from home. Do you have any science-backed tips for improving concentration?
                      </p>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-200"></div>
                    </div>
                    <div className="bg-white rounded-lg border border-neutral-200 px-4 py-3 max-w-3xl">
                      <p className="font-medium text-neutral-900 mb-1">Dr. Jane Smith</p>
                      <p className="text-neutral-700 mb-3">
                        That's a common challenge, especially with the increase in remote work. The good news is that neuroscience research has identified several effective strategies for improving focus and concentration. Here are some evidence-based approaches:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
                        <li>
                          <strong>Time blocking:</strong> Our brains respond well to structure. Try the Pomodoro Technique – 25 minutes of focused work followed by a 5-minute break. Research shows this aligns with our natural attention cycles.
                        </li>
                        <li>
                          <strong>Environment optimization:</strong> Your physical space affects cognitive function. Reduce visual clutter, ensure good lighting, and use noise-canceling headphones if needed. Studies show that even mild background noise can reduce cognitive performance by up to 15%.
                        </li>
                        <li>
                          <strong>Digital minimalism:</strong> Notifications trigger dopamine release and create addiction loops. Turn off non-essential notifications and consider apps that block distracting websites during work periods.
                        </li>
                        <li>
                          <strong>Strategic breaks:</strong> Brief exposure to nature (even looking at images of nature) can restore attention. A 2008 study found that just 20 minutes in a natural environment improved concentration scores significantly.
                        </li>
                        <li>
                          <strong>Exercise:</strong> Even a 10-minute walk can increase blood flow to the brain and improve focus for up to 2 hours afterward. Exercise increases BDNF (brain-derived neurotrophic factor), which supports attention networks.
                        </li>
                      </ol>
                      <p className="mt-3 text-neutral-700">
                        Would you like me to elaborate on any of these strategies or discuss other approaches specific to your situation?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary-100 rounded-lg px-4 py-3 max-w-3xl">
                      <p className="text-primary-800">
                        The time blocking approach sounds interesting. Could you explain more about how that works with our brain's natural cycles?
                      </p>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-200"></div>
                    </div>
                    <div className="bg-white rounded-lg border border-neutral-200 px-4 py-3 max-w-3xl">
                      <p className="font-medium text-neutral-900 mb-1">Dr. Jane Smith</p>
                      <p className="text-neutral-700">
                        Great question about time blocking and our brain's natural cycles! Our brains operate on what neuroscientists call ultradian rhythms – natural cycles of high and low energy that typically last 90-120 minutes. Within these cycles, we experience about 25-30 minutes of peak focus before attention begins to naturally decline.
                      </p>
                      <p className="mt-3 text-neutral-700">
                        The Pomodoro Technique (25 minutes of work followed by a 5-minute break) aligns well with this natural rhythm. It's not just arbitrary timing – it's designed to work with your brain's natural capacity for sustained attention. During those 25 minutes, your prefrontal cortex – responsible for executive functions like focus – can maintain optimal performance.
                      </p>
                      <p className="mt-3 text-neutral-700">
                        When you try to push beyond this natural limit without a break, you activate the brain's stress response. The resulting cortisol release actually impairs cognitive function and makes it harder to focus. The 5-minute break allows your brain to reset, reducing cognitive fatigue and preparing for the next focused session.
                      </p>
                      <p className="mt-3 text-neutral-700">
                        In my lab, we've observed that people who work with these natural rhythms rather than against them show improved performance, better memory consolidation, and report less mental fatigue at the end of the day.
                      </p>
                      <p className="mt-3 text-neutral-700">
                        Would you like some practical tips for implementing this approach effectively?
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Message Input */}
            <div className="flex items-end gap-4">
              <textarea
                rows={3}
                className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Type your message..."
              ></textarea>
              <Button variant="primary" className="flex-shrink-0">
                Send
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Conversation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-500">Talent</h3>
                    <p className="mt-1 text-neutral-900 font-medium">Dr. Jane Smith</p>
                    <p className="text-sm text-neutral-600">Neuroscientist & Author</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-neutral-500">Pricing</h3>
                    <p className="mt-1 text-neutral-900 font-medium">$5.00 per minute</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-neutral-500">Current Session</h3>
                    <div className="mt-1 flex justify-between">
                      <p className="text-neutral-900 font-medium">Duration</p>
                      <p className="text-neutral-900 font-medium">3:45</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-neutral-900 font-medium">Current Cost</p>
                      <p className="text-neutral-900 font-medium">$18.75</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <Button variant="outline" fullWidth className="mb-3">
                      End Conversation
                    </Button>
                    <Button variant="primary" fullWidth>
                      Add More Minutes
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <h3 className="text-sm font-medium text-neutral-500 mb-2">Conversation History</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-neutral-600">Apr 5, 2025</span>
                        <span className="text-neutral-900">12 minutes</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-neutral-600">Mar 28, 2025</span>
                        <span className="text-neutral-900">8 minutes</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-neutral-600">Mar 15, 2025</span>
                        <span className="text-neutral-900">15 minutes</span>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <Link href="/dashboard/conversations" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                        View All Conversations
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
