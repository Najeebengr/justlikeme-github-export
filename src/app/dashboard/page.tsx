// src/app/dashboard/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui';

export default function DashboardPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container-wide py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
            <p className="mt-2 text-neutral-600">
              Manage your profile, content, and earnings
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/dashboard/settings">
              <Button variant="outline">Account Settings</Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Stats Card 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,245.89</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>12% from last month</span>
                  </p>
                </CardContent>
              </Card>

              {/* Stats Card 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Minutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">248</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>8% from last month</span>
                  </p>
                </CardContent>
              </Card>

              {/* Stats Card 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>15% from last month</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Profile Completion */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-neutral-700">75% complete</span>
                    <span className="text-sm font-medium text-neutral-700">75/100</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600">Basic information</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600">Profile picture</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-600">Voice samples</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-neutral-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-neutral-600">Video samples</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-neutral-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-neutral-600">Knowledge base</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/dashboard/profile">
                    <Button variant="primary">Complete Your Profile</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-900">New conversation with John D.</p>
                      <p className="text-sm text-neutral-500">12 minutes • 8 minutes long</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-900">Payment received</p>
                      <p className="text-sm text-neutral-500">2 hours ago • $24.99</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-neutral-900">Content upload completed</p>
                      <p className="text-sm text-neutral-500">Yesterday • 3 files uploaded</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/dashboard/activity">
                    <Button variant="outline">View All Activity</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Your Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Voice Samples</h3>
                    <Link href="/dashboard/content/voice">
                      <Button variant="outline" size="sm">Manage</Button>
                    </Link>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-4">
                    <p className="text-neutral-600">You have uploaded 5 voice samples.</p>
                    <div className="mt-2 flex space-x-2">
                      <div className="w-full h-2 bg-primary-200 rounded-full overflow-hidden">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <span className="text-sm text-neutral-600 whitespace-nowrap">5/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Video Samples</h3>
                    <Link href="/dashboard/content/video">
                      <Button variant="outline" size="sm">Manage</Button>
                    </Link>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-4">
                    <p className="text-neutral-600">You have uploaded 0 video samples.</p>
                    <div className="mt-2 flex space-x-2">
                      <div className="w-full h-2 bg-primary-200 rounded-full overflow-hidden">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                      <span className="text-sm text-neutral-600 whitespace-nowrap">0/5</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Knowledge Base</h3>
                    <Link href="/dashboard/content/knowledge">
                      <Button variant="outline" size="sm">Manage</Button>
                    </Link>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-4">
                    <p className="text-neutral-600">You have uploaded 2 knowledge documents.</p>
                    <div className="mt-2 flex space-x-2">
                      <div className="w-full h-2 bg-primary-200 rounded-full overflow-hidden">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-sm text-neutral-600 whitespace-nowrap">2/10</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/dashboard/content/upload">
                    <Button variant="primary">Upload New Content</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Earnings Card 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Current Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$245.89</div>
                  <div className="mt-1">
                    <Link href="/dashboard/earnings/withdraw">
                      <Button variant="outline" size="sm">Withdraw</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Earnings Card 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$345.50</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>18% from last month</span>
                  </p>
                </CardContent>
              </Card>

              {/* Earnings Card 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">All Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,245.89</div>
                  <p className="text-xs text-neutral-500 mt-1">Since April 2025</p>
                </CardContent>
              </Card>
            </div>

            {/* Earnings Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Earnings History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-500">Earnings chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 10, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">Conversation with Sarah M.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+$24.99</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 8, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">Conversation with John D.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+$12.50</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 5, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">Withdrawal to Bank Account</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-$100.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Processed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <Link href="/dashboard/earnings/transactions">
                    <Button variant="outline">View All Transactions</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Analytics Card 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Conversation Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <p className="text-neutral-500">Duration chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Card 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <p className="text-neutral-500">Demographics chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Analytics Card 3 */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-500">Topics chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Card 4 */}
            <Card>
              <CardHeader>
                <CardTitle>User Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-500">Satisfaction chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
