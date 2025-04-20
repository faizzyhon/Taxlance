import Link from "next/link"
import { ArrowRight, CheckCircle, DollarSign, FileText, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-600">
            <PieChart className="h-6 w-6" />
            <span>TaxLance</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="text-sm bg-emerald-600 hover:bg-emerald-700">Sign Up Free</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Simplify Your Taxes as a Pakistani Freelancer
                  </h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Track income, generate professional invoices, and file taxes with FBR automatically. Stop worrying
                    about compliance and focus on your work.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button variant="outline">See How It Works</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative rounded-lg border bg-background p-4 shadow-lg">
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl font-bold">Your Tax Dashboard</h3>
                    <p className="text-sm text-gray-500">Everything you need in one place</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border bg-card p-3">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm font-medium">Monthly Income</span>
                        </div>
                        <p className="text-2xl font-bold">$2,450</p>
                        <p className="text-xs text-gray-500">PKR 682,550</p>
                      </div>
                      <div className="rounded-lg border bg-card p-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">Tax Due</span>
                        </div>
                        <p className="text-2xl font-bold">PKR 68,255</p>
                        <p className="text-xs text-gray-500">10% of income</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Invoices Generated</span>
                          <span className="text-sm font-medium">12</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Platforms Connected</span>
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Tax Filing Status</span>
                          <span className="text-sm font-medium text-emerald-500">Up to date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need in One Place</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  TaxLance combines income tracking, invoice generation, and tax filing in one seamless platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Income Tracking</h3>
                <p className="text-center text-sm text-gray-500">
                  Automatically import earnings from Upwork, Freelancer.com and other platforms.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Invoice Generator</h3>
                <p className="text-center text-sm text-gray-500">
                  Create professional invoices in seconds that comply with FBR requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-3">
                  <PieChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Tax Filing</h3>
                <p className="text-center text-sm text-gray-500">
                  Calculate your tax liability and file directly with FBR with one click.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How TaxLance Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Get started in minutes and let TaxLance handle the complicated stuff.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Connect Your Accounts</h3>
                <p className="text-center text-sm text-gray-500">
                  Link your Upwork, Freelancer.com, or other platforms to automatically import your income data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Generate Invoices</h3>
                <p className="text-center text-sm text-gray-500">
                  Create professional invoices for your clients with just a few clicks, all compliant with FBR
                  requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">File Your Taxes</h3>
                <p className="text-center text-sm text-gray-500">
                  When it's time to file, TaxLance calculates everything and lets you submit directly to FBR.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Choose the plan that works for your freelancing business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-12">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-gray-500">Perfect for getting started</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  PKR 0<span className="ml-1 text-base font-medium text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Connect 1 freelance platform</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Generate up to 5 invoices/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Basic tax calculation</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 text-xs font-medium">
                  POPULAR
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-gray-500">For serious freelancers</p>
                </div>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  PKR 1,499
                  <span className="ml-1 text-base font-medium text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Connect unlimited platforms</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Unlimited invoices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Advanced tax calculation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Direct FBR filing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>AI Tax Assistant</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start 14-Day Free Trial</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Simplify Your Freelance Taxes?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Join thousands of Pakistani freelancers who are saving time and staying compliant.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-600">
            <PieChart className="h-6 w-6" />
            <span>TaxLance</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-gray-500">© 2025 TaxLance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
