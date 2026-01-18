"use client";

import { Navbar } from "@/components/nda/Navbar";
import { Hero } from "@/components/nda/Hero";
import { Features } from "@/components/nda/Features";
import { Pricing } from "@/components/nda/Pricing";
import { motion } from "framer-motion";
import { Shield, BookOpen, Clock, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SyllabusSection() {
  const subjects = [
    {
      name: "Mathematics",
      topics: ["Algebra", "Trigonometry", "Calculus", "Probability", "Statistics"],
      description: "Advanced concepts with shortcut techniques for quick problem-solving.",
      icon: BookOpen,
    },
    {
      name: "General Ability (GAT)",
      topics: ["English", "Physics", "Chemistry", "History", "Geography"],
      description: "Comprehensive coverage of all static and dynamic portions of the GAT paper.",
      icon: Shield,
    },
  ];

  return (
    <section id="syllabus" className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Exam <span className="text-primary">Syllabus</span></h2>
          <p className="mt-4 text-zinc-400">Master every subject with our expert-curated curriculum.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {subjects.map((subject, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 hover:border-primary/50 transition-colors"
            >
              <subject.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{subject.name}</h3>
              <p className="text-zinc-400 mb-6">{subject.description}</p>
              <ul className="grid grid-cols-2 gap-3">
                {subject.topics.map((topic, j) => (
                  <li key={j} className="flex items-center gap-2 text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/syllabus">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View Complete Syllabus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { label: "Total Aspirants", value: "50,000+" },
    { label: "Mock Tests Taken", value: "1.2 Million" },
    { label: "Success Rate", value: "85%" },
    { label: "Expert Mentors", value: "100+" },
  ];

  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-black">{stat.value}</div>
              <div className="text-sm font-bold text-black/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-white">NDA PREP</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
          <p className="text-sm text-zinc-600">© 2025 NDA Prep Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <StatsSection />
      <Features />
      <SyllabusSection />
      <Pricing />
      
      <section className="py-24 bg-zinc-900 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Ready to earn your <span className="text-primary">Uniform</span>?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Don't leave your dreams to chance. Join the most advanced NDA preparation platform today.
          </p>
          <Link href="/register">
            <Button size="lg" className="h-16 px-12 text-xl font-bold bg-primary text-black hover:bg-primary/90">
              Enroll Now for NDA 2025
            </Button>
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
      </section>

      <Footer />
    </main>
  );
}
