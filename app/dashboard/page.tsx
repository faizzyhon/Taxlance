"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Bell,
  Calendar,
  ChevronDown,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  PieChart,
  Plus,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-600">
            <PieChart className="h-6 w-6" />
            <span>TaxLance</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>AH</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-flex">Ahmed Hassan</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
          <div className="flex flex-col gap-2 p-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-emerald-100 px-3 py-2 text-sm font-medium text-emerald-900"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/invoices"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-muted"
            >
              <FileText className="h-4 w-4" />
              Invoices
            </Link>
            <Link
              href="/dashboard/income"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-muted"
            >
              <DollarSign className="h-4 w-4" />
              Income
            </Link>
            <Link
              href="/dashboard/taxes"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-muted"
            >
              <PieChart className="h-4 w-4" />
              Taxes
            </Link>
            <Link
              href="/dashboard/clients"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-muted"
            >
              <Users className="h-4 w-4" />
              Clients
            </Link>
            <Link
              href="/dashboard/payments"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-muted"
            >
              <CreditCard className="h-4 w-4" />
              Payments
            </Link>
          </div>
          <div className="mt-auto p-4">
            <div className="rounded-lg bg-emerald-50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="h-4 w-4 text-emerald-600" />
                <h3 className="font-medium text-emerald-900">Need Help?</h3>
              </div>
              <p className="text-xs text-emerald-800 mb-3">
                Have questions about taxes or using TaxLance? Our AI assistant can help.
              </p>
              <Button className="w-full text-xs bg-emerald-600 hover:bg-emerald-700">Ask Tax Assistant</Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Welcome back, Ahmed</h1>
              <p className="text-gray-500">Here's an overview of your freelance business</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Income (2025)</CardDescription>
                  <CardTitle className="text-2xl">PKR 1,250,000</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 font-medium">↑ 12%</span> from last year
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Tax Due (Current Quarter)</CardDescription>
                  <CardTitle className="text-2xl">PKR 125,000</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Progress value={75} className="h-2" />
                    <span className="text-xs text-muted-foreground">Due in 25 days</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Pending Invoices</CardDescription>
                  <CardTitle className="text-2xl">PKR 350,000</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">5 invoices</span> awaiting payment
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <Tabs defaultValue="overview" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between mb-4">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="income">Income</TabsTrigger>
                    <TabsTrigger value="taxes">Taxes</TabsTrigger>
                  </TabsList>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Filter</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Export</span>
                    </Button>
                  </div>
                </div>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connected Platforms</CardTitle>
                      <CardDescription>Your income sources and platform connections</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                              <span className="font-semibold text-green-700">U</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Upwork</h3>
                              <p className="text-xs text-muted-foreground">Connected on Jan 15, 2025</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">PKR 850,000</p>
                            <p className="text-xs text-muted-foreground">YTD Income</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <span className="font-semibold text-blue-700">F</span>
                            </div>
                            <div>
                              <h3 className="font-medium">Freelancer.com</h3>
                              <p className="text-xs text-muted-foreground">Connected on Mar 5, 2025</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">PKR 400,000</p>
                            <p className="text-xs text-muted-foreground">YTD Income</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="ghost" className="flex items-center gap-2 text-emerald-600">
                            <Plus className="h-4 w-4" />
                            <span>Connect New Platform</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Invoices</CardTitle>
                      <CardDescription>Your latest generated invoices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-4 text-xs font-medium text-muted-foreground">
                          <div>Invoice #</div>
                          <div>Client</div>
                          <div>Amount</div>
                          <div>Status</div>
                        </div>
                        <div className="grid grid-cols-4 items-center border-b pb-4">
                          <div className="font-medium">INV-2025-042</div>
                          <div>TechSolutions Inc.</div>
                          <div>PKR 125,000</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Paid
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 items-center border-b pb-4">
                          <div className="font-medium">INV-2025-041</div>
                          <div>Global Designs Ltd.</div>
                          <div>PKR 85,000</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                              Pending
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 items-center border-b pb-4">
                          <div className="font-medium">INV-2025-040</div>
                          <div>WebCraft Studios</div>
                          <div>PKR 150,000</div>
                          <div>
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Paid
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Invoices
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="income" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Income Breakdown</CardTitle>
                      <CardDescription>Your income sources and earnings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium">Monthly Income (2025)</h4>
                          </div>
                          <div className="h-48 w-full bg-slate-100 rounded-lg flex items-center justify-center">
                            <p className="text-muted-foreground text-sm">Income chart will appear here</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Income by Platform</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                                <span className="text-sm">Upwork</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">PKR 850,000</span>
                                <span className="text-xs text-muted-foreground">(68%)</span>
                              </div>
                            </div>
                            <Progress value={68} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                <span className="text-sm">Freelancer.com</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">PKR 400,000</span>
                                <span className="text-xs text-muted-foreground">(32%)</span>
                              </div>
                            </div>
                            <Progress value={32} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="taxes" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tax Summary</CardTitle>
                      <CardDescription>Your tax obligations and filing status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-2">Current Quarter Tax</h3>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Tax Due</span>
                            <span className="font-medium">PKR 125,000</span>
                          </div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-muted-foreground">Due Date</span>
                            <span className="font-medium">June 15, 2025</span>
                          </div>
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">File with FBR</Button>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-medium">Tax Filing History</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between border-b pb-3">
                              <div>
                                <p className="font-medium">Q1 2025</p>
                                <p className="text-xs text-muted-foreground">Jan - Mar</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">PKR 98,500</p>
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                  Filed
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between border-b pb-3">
                              <div>
                                <p className="font-medium">Q4 2024</p>
                                <p className="text-xs text-muted-foreground">Oct - Dec</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">PKR 112,000</p>
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                  Filed
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Q3 2024</p>
                                <p className="text-xs text-muted-foreground">Jul - Sep</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">PKR 87,500</p>
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                  Filed
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="flex h-24 flex-col items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700">
                      <FileText className="h-6 w-6" />
                      <span>Create Invoice</span>
                    </Button>
                    <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-1">
                      <DollarSign className="h-6 w-6" />
                      <span>Record Income</span>
                    </Button>
                    <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-1">
                      <PieChart className="h-6 w-6" />
                      <span>Tax Calculator</span>
                    </Button>
                    <Button variant="outline" className="flex h-24 flex-col items-center justify-center gap-1">
                      <Users className="h-6 w-6" />
                      <span>Add Client</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tax Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-1">Deduct Home Office Expenses</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        As a freelancer, you can deduct a portion of your rent or mortgage as a business expense.
                      </p>
                      <Link href="#" className="text-xs text-emerald-600 flex items-center">
                        Learn more
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-1">Keep Separate Business Account</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        FBR recommends maintaining separate accounts for business and personal expenses.
                      </p>
                      <Link href="#" className="text-xs text-emerald-600 flex items-center">
                        Learn more
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
