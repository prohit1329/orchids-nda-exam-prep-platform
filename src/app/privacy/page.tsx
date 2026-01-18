"use client";

import { Navbar } from "@/components/nda/Navbar";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-zinc-400 mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-zinc-300 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                take a mock test, or contact us for support. This includes your name, email address, 
                and performance data from tests you complete on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                including personalized study recommendations, performance analytics, and to communicate 
                with you about your account and our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-zinc-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-zinc-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-zinc-300 leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. 
                You can do this through your account settings or by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-zinc-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link href="/contact" className="text-primary hover:underline">our contact page</Link>.
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
