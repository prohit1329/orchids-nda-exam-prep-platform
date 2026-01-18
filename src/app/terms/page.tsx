"use client";

import { Navbar } from "@/components/nda/Navbar";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-zinc-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                By accessing and using the NDA Prep Platform, you accept and agree to be bound by the 
                terms and provisions of this agreement. If you do not agree to abide by these terms, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-zinc-300 leading-relaxed">
                NDA Prep Platform provides online educational content, mock tests, study materials, 
                and mentoring services to help aspirants prepare for the National Defence Academy 
                examination conducted by UPSC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="text-zinc-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account. You must immediately notify us 
                of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                All fees are quoted in Indian Rupees (INR). Payment must be made in full before 
                accessing premium content. We offer a 30-day money-back guarantee if you're not 
                satisfied with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-zinc-300 leading-relaxed">
                All content on this platform, including but not limited to text, graphics, logos, 
                and software, is the property of NDA Prep Platform and is protected by intellectual 
                property laws. You may not reproduce or distribute this content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
              <p className="text-zinc-300 leading-relaxed">
                We do not guarantee any specific results from using our platform. Success in the 
                NDA examination depends on various factors including individual effort and preparation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-zinc-300 leading-relaxed">
                NDA Prep Platform shall not be liable for any indirect, incidental, special, or 
                consequential damages arising out of or in connection with your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                For any questions regarding these Terms of Service, please visit our{" "}
                <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-bold text-white">NDA PREP</span>
          </div>
          <p className="text-sm text-zinc-600">© 2025 NDA Prep Platform. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
