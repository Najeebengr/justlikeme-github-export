// src/app/admin/dashboard/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui';

export default function AdminDashboardPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container-wide py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Admin Dashboard</h1>
            <p className="mt-2 text-neutral-600">
              Manage platform users, content, and payments
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/admin/settings">
              <Button variant="outline">Platform Settings</Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="talents">Talents</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Stats Card 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Talents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
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
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>18% from last month</span>
                  </p>
                </CardContent>
              </Card>

              {/* Stats Card 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,589.75</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>15% from last month</span>
                  </p>
                </CardContent>
              </Card>

              {/* Stats Card 4 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-500">Total Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,842</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>22% from last month</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-500">Revenue chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Activity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 10, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">Sarah Williams</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">New talent registration</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Approved
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 10, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">Michael Johnson</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">Content upload</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Pending Review
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 9, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">John Smith</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">Payment dispute</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Needs Attention
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr 9, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">Emily Davis</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">New user registration</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <Link href="/admin/activity">
                    <Button variant="outline">View All Activity</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="talents">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center">
                <CardTitle>Talent Management</CardTitle>
                <Button variant="primary" size="sm" className="mt-4 sm:mt-0">
                  Add New Talent
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Expertise</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Revenue</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-200"></div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-neutral-900">Dr. Jane Smith</div>
                              <div className="text-sm text-neutral-500">jane.smith@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">Neuroscientist & Author</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">$4,256.78</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-200"></div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-neutral-900">Michael Johnson</div>
                              <div className="text-sm text-neutral-500">michael.johnson@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">Business Coach & Entrepreneur</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">$1,845.50</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-200"></div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-neutral-900">Sarah Williams</div>
                              <div className="text-sm text-neutral-500">sarah.williams@example.com</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">Fitness Expert & Nutritionist</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">$2,756.25</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">View</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-neutral-600">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">42</span> talents
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center">
                <CardTitle>User Management</CardTitle>
                <div className="mt-4 sm:mt-0 flex">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="rounded-l-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                  <Button variant="primary" size="sm" className="rounded-l-none">
                    Search
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Joined</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {/* Sample user rows would go here */}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-200"></div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-neutral-900">User {index + 1}</div>
                                <div className="text-sm text-neutral-500">user{index + 1}@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                            {index % 3 === 0 ? 'Consumer' : index % 3 === 1 ? 'Talent' : 'Admin'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                            Apr {10 - index}, 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              index % 4 === 0 ? 'bg-green-100 text-green-800' : 
                              index % 4 === 1 ? 'bg-yellow-100 text-yellow-800' :
                              index % 4 === 2 ? 'bg-red-100 text-red-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {index % 4 === 0 ? 'Active' : 
                               index % 4 === 1 ? 'Pending' :
                               index % 4 === 2 ? 'Suspended' :
                               'Inactive'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                                {index % 4 === 2 ? 'Activate' : 'Suspend'}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-neutral-600">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">1,248</span> users
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Payment Stats Card 1 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-neutral-500">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$24,589.75</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span>15% from last month</span>
                      </p>
                    </CardContent>
                  </Card>

                  {/* Payment Stats Card 2 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-neutral-500">Platform Fee</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$4,917.95</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span>15% from last month</span>
                      </p>
                    </CardContent>
                  </Card>

                  {/* Payment Stats Card 3 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-neutral-500">Talent Payouts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$19,671.80</div>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span>15% from last month</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Transaction ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Talent</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {/* Sample payment rows would go here */}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr {10 - index}, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">TXN-{1000 + index}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">User {index + 1}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                            {index % 3 === 0 ? 'Dr. Jane Smith' : index % 3 === 1 ? 'Michael Johnson' : 'Sarah Williams'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                            ${(25 - index * 2.5).toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              index % 4 === 0 ? 'bg-green-100 text-green-800' : 
                              index % 4 === 1 ? 'bg-yellow-100 text-yellow-800' :
                              index % 4 === 2 ? 'bg-red-100 text-red-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {index % 4 === 0 ? 'Completed' : 
                               index % 4 === 1 ? 'Pending' :
                               index % 4 === 2 ? 'Failed' :
                               'Refunded'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                            <Button variant="outline" size="sm">Details</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-sm text-neutral-600">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">1,248</span> transactions
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-medium mb-2 sm:mb-0">Content Pending Review</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Approve All</Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Reject All</Button>
                    </div>
                  </div>
                  
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Talent</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Content Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">File</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-neutral-200">
                        {/* Sample content rows would go here */}
                        {Array.from({ length: 3 }).map((_, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Apr {10 - index}, 2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                              {index % 3 === 0 ? 'Dr. Jane Smith' : index % 3 === 1 ? 'Michael Johnson' : 'Sarah Williams'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                              {index % 3 === 0 ? 'Voice' : index % 3 === 1 ? 'Video' : 'Knowledge'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                              {index % 3 === 0 ? 'interview_clip.mp3' : index % 3 === 1 ? 'presentation.mp4' : 'research_paper.pdf'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Review</Button>
                                <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">Approve</Button>
                                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Content Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-sm font-medium text-neutral-500 mb-2">Voice Content</h4>
                        <div className="text-2xl font-bold">248 files</div>
                        <p className="text-sm text-neutral-600 mt-1">Total: 42.5 hours</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-sm font-medium text-neutral-500 mb-2">Video Content</h4>
                        <div className="text-2xl font-bold">124 files</div>
                        <p className="text-sm text-neutral-600 mt-1">Total: 18.2 hours</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="text-sm font-medium text-neutral-500 mb-2">Knowledge Content</h4>
                        <div className="text-2xl font-bold">356 files</div>
                        <p className="text-sm text-neutral-600 mt-1">Total: 12,845 pages</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
