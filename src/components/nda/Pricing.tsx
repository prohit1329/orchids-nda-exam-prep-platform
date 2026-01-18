"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    description: "Perfect for beginners starting their NDA journey.",
    features: [
      "Access to 10 Mock Tests",
      "Chapter-wise Study Notes",
      "Daily Current Affairs",
      "Email Support",
    ],
    cta: "Start Basic",
    popular: false,
  },
  {
    name: "Elite",
    price: "₹2,499",
    description: "The most popular choice for serious aspirants.",
    features: [
      "Unlimited Mock Tests",
      "AI Performance Analytics",
      "1-on-1 Mentoring Session",
      "Priority SSB Guidance",
      "Previous 10 Year Papers",
    ],
    cta: "Join Elite",
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₹4,999",
    description: "Full-scale preparation with dedicated experts.",
    features: [
      "Everything in Elite",
      "Weekly Live Classes",
      "Dedicated Personal Coach",
      "Physical Fitness Guide",
      "Psychological Test Prep",
    ],
    cta: "Go Ultimate",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Choose the plan that fits your preparation stage. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl border ${
                plan.popular ? "border-primary bg-primary/5" : "border-white/10 bg-white/5"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-black uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500">/one-time</span>
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
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  className={`w-full font-bold ${
                    plan.popular ? "bg-primary text-black hover:bg-primary/90" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
