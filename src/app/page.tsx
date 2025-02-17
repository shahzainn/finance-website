import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-[family-name:var(--font-geist-sans)]">
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold tracking-tight">FinanceFlow</h1>
            <div className="hidden md:flex items-center space-x-8">
              {['Solutions', 'Services', 'About', 'Insights'].map((item) => (
                <a key={item} href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <button className="bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-24 relative">
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
                <button className="bg-blue-500 px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors">
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-neutral-900/30 to-[#0A0A0A]">
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

        <section className="py-32 bg-gradient-to-b from-[#0A0A0A] via-neutral-900/50 to-[#0A0A0A]">
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

        <section className="container mx-auto px-6 py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent">
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

        <section className="bg-gradient-to-b from-[#0A0A0A] via-blue-900/10 to-[#0A0A0A]">
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
              <button className="bg-blue-500/90 backdrop-blur-sm px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors border border-blue-400/20">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 text-neutral-400 bg-gradient-to-b from-[#0A0A0A] to-black border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">FinanceFlow</h4>
              <p className="text-sm">Your trusted partner in streamlined financial operations and cost-effective business solutions.</p>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
  );
}
