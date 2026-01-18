"use client";

import { useState } from "react";
import { Navbar } from "@/components/nda/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹999",
    period: "one-time",
    description: "Perfect for beginners starting their NDA journey.",
    features: [
      "Access to 10 Mock Tests",
      "Chapter-wise Study Notes",
      "Daily Current Affairs",
      "Email Support",
      "Basic Performance Analytics",
    ],
    icon: Star,
    popular: false,
  },
  {
    id: "elite",
    name: "Elite",
    price: "₹2,499",
    period: "one-time",
    description: "The most popular choice for serious aspirants.",
    features: [
      "Unlimited Mock Tests",
      "AI Performance Analytics",
      "1-on-1 Mentoring Session",
      "Priority SSB Guidance",
      "Previous 10 Year Papers",
      "Live Doubt Sessions",
      "Mobile App Access",
    ],
    icon: Zap,
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "₹4,999",
    period: "one-time",
    description: "Full-scale preparation with dedicated experts.",
    features: [
      "Everything in Elite",
      "Weekly Live Classes",
      "Dedicated Personal Coach",
      "Physical Fitness Guide",
      "Psychological Test Prep",
      "Interview Preparation",
      "Lifetime Access",
      "Certificate of Completion",
    ],
    icon: Crown,
    popular: false,
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setShowConfirmation(true);
  };

  if (showConfirmation && selectedPlan) {
    const plan = plans.find(p => p.id === selectedPlan);
    
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Plan Selected!</h1>
            <p className="text-zinc-400 mb-8">
              You've selected the <span className="text-primary font-bold">{plan?.name}</span> plan for <span className="text-white font-bold">{plan?.price}</span>
            </p>
            
            <div className="bg-zinc-900 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-white mb-4">What's included:</h3>
              <ul className="space-y-2">
                {plan?.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-zinc-300">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-zinc-500 mb-6">
              To complete your purchase, please create an account or log in first.
            </p>

            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => setShowConfirmation(false)}
                className="border-white/20 text-white"
              >
                Change Plan
              </Button>
              <Link href="/register">
                <Button className="bg-primary text-black hover:bg-primary/90">
                  Create Account to Continue
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Invest in your future. Select the plan that fits your preparation needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-3xl border ${
                plan.popular ? "border-primary bg-primary/5" : "border-white/10 bg-zinc-900/50"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-black uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <plan.icon className={`h-10 w-10 mb-4 ${plan.popular ? "text-primary" : "text-zinc-400"}`} />
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500">/{plan.period}</span>
                </div>
                <p className="mt-4 text-zinc-400">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-zinc-300">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSelectPlan(plan.id)}
                size="lg"
                className={`w-full font-bold ${
                  plan.popular
                    ? "bg-primary text-black hover:bg-primary/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Select {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-primary" /> 30-day money back guarantee</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-primary" /> Secure payment</span>
            <span className="flex items-center gap-1"><Check className="h-4 w-4 text-primary" /> Instant access</span>
          </div>
        </div>
      </div>
    </main>
  );
}
