"use client";

import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A] text-white font-[family-name:var(--font-geist-sans)] scroll-smooth">
        <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-xl font-bold tracking-tight">FinanceFlow</h1>
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Services', href: '#services' },
                  { name: 'About', href: '#about' }
                ].map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <section className="pt-32 pb-24 relative scroll-smooth">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/pexels.jpg"
                alt="Professional finance team in modern office"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                <div className="max-w-2xl">
                  <h2 className="text-6xl font-bold tracking-tight leading-tight mb-6">
                    Liberating Your Business From
                    <br />
                    <FlipWords
                      words={[
                        "Overheads",
                        "Paperwork",
                        "Complexity",
                        "Financial Stress",
                        "Admin"
                      ]}
                      className="text-blue-500"
                    />
                  </h2>
                  <p className="text-xl text-neutral-400 mb-8">
                    Let us handle your entire financial operations while you focus on growing your business. Cost-effective, reliable, and hassle-free.
                  </p>
                  <button 
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-blue-500 px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
                  >
                    Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="scroll-smooth py-24 bg-gradient-to-b from-[#0A0A0A] via-neutral-900/30 to-[#0A0A0A]">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <h3 className="text-sm font-medium text-neutral-400 mb-4 tracking-wider uppercase">Seamless Integration</h3>
                <h2 className="text-3xl font-bold mb-8">Works With Your Existing Systems</h2>
              </div>
              
              <InfiniteMovingCards
                items={[
                  { name: "QuickBooks", logo: "/logos/qb.svg" },
                  { name: "SAP ERP", logo: "/logos/sap.svg" },
                  { name: "Oracle Financials", logo: "/logos/oracle.svg" },
                  { name: "Workday Financial", logo: "/logos/workday.svg" },
                  { name: "Microsoft Dynamics", logo: "/logos/msft.svg" },
                  { name: "Xero", logo: "/logos/xero.svg" },
                  { name: "Sage", logo: "/logos/sage.svg" },
                  { name: "Stripe", logo: "/logos/stripe.svg" },
                ]}
                direction="right"
                speed="normal"
                pauseOnHover={true}
              />
            </div>
          </section>

          <section className="scroll-smooth py-32 bg-gradient-to-b from-[#0A0A0A] via-neutral-900/50 to-[#0A0A0A]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h3 className="text-sm font-medium text-blue-500 mb-4 tracking-wider uppercase">What We Handle</h3>
                <h2 className="text-4xl font-bold mb-6">Complete Financial Management</h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">We take care of everything - from daily transactions to complex financial operations, so you can focus on what matters most</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Full-Service Bookkeeping",
                    description: "24/7 transaction processing, reconciliation, and reporting - all handled by our dedicated team",
                    icon: "📊",
                    features: ["Daily transaction management", "Monthly reconciliation", "Custom financial reports"]
                  },
                  {
                    title: "Payroll & HR Admin",
                    description: "End-to-end payroll processing and HR administrative support at a fraction of the cost",
                    icon: "🌐",
                    features: ["Payroll processing", "Tax documentation", "Benefits administration"]
                  },
                  {
                    title: "Financial Reporting",
                    description: "Comprehensive financial insights and analysis delivered to your inbox",
                    icon: "🎯",
                    features: ["Monthly statements", "Performance metrics", "Growth analysis"]
                  }
                ].map((service) => (
                  <div key={service.title} className="group bg-neutral-900/40 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="text-4xl mb-6">{service.icon}</div>
                    <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                    <p className="text-neutral-400 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="scroll-smooth container mx-auto px-6 py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h3 className="text-sm font-medium text-blue-500 mb-4 tracking-wider uppercase">Why Choose Us</h3>
                <h2 className="text-4xl font-bold mb-6">Save Time, Money, and Resources</h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">Cut your operational costs while getting professional financial management around the clock</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  {
                    title: "Cost Savings",
                    description: "Reduce your financial operations costs by up to 70% compared to in-house teams",
                    stats: "70% Average Savings"
                  },
                  {
                    title: "24/7 Operations",
                    description: "Round-the-clock financial management and support for your business",
                    stats: "24/7 Availability"
                  },
                  {
                    title: "Rapid Scaling",
                    description: "Flexible solutions that grow with your business needs without additional overhead",
                    stats: "Unlimited Scalability"
                  },
                  {
                    title: "Quality Assured",
                    description: "Multi-layer verification process ensuring accuracy in every transaction",
                    stats: "99.9% Accuracy Rate"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="group p-8 rounded-2xl border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 bg-neutral-900/40 backdrop-blur-sm">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                        <p className="text-neutral-400 mb-4">{feature.description}</p>
                        <div className="text-blue-500 font-medium">{feature.stats}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="scroll-smoothbg-gradient-to-b from-[#0A0A0A] via-blue-900/10 to-[#0A0A0A]">
            <div className="h-[40rem] relative w-full overflow-hidden">
              <div className="absolute inset-0">
                <StarsBackground 
                  starDensity={0.0001}
                  minTwinkleSpeed={0.3}
                  maxTwinkleSpeed={0.8}
                />
                <ShootingStars
                  minDelay={2000}
                  maxDelay={5000}
                  starColor="#60A5FA"
                  trailColor="#3B82F6"
                />
              </div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-300">
                  Freedom from Financial Burden Starts Here
                </h3>
                <button 
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-blue-500/90 backdrop-blur-sm px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors border border-blue-400/20"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-16 scroll-smooth text-neutral-400 bg-gradient-to-b from-[#0A0A0A] to-black border-t border-neutral-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="text-white font-bold mb-4">FinanceFlow</h4>
                <p className="text-sm">Your trusted partner in streamlined financial operations and cost-effective business solutions.</p>
              </div>
              <div>
                <h5 className="text-white font-medium mb-4">Company</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" onClick={() => setIsDialogOpen(true)} className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-medium mb-4">Legal</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm">
              <p>© 2025 FinanceFlow. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-neutral-900 border-neutral-800 text-white">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Let's Talk</DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Name</label>
                  <input 
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Email</label>
                  <input 
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Phone</label>
                  <input 
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-neutral-400">Message</label>
                  <textarea 
                    name="message"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                    placeholder="Tell us about your needs..."
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <DialogTitle className="text-2xl mb-4">Message Sent!</DialogTitle>
              <p className="text-neutral-400">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
