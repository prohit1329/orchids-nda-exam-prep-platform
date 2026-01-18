"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  BarChart3, 
  Users, 
  Zap, 
  Trophy, 
  Target 
} from "lucide-react";

const features = [
  {
    title: "Comprehensive Mock Tests",
    description: "100+ full-length mock tests designed by retired defence officers to simulate the real NDA exam environment.",
    icon: Trophy,
    color: "text-blue-500",
  },
  {
    title: "Personalized Analytics",
    description: "Track your performance with AI-driven insights. Identify your weak spots in Maths and GAT instantly.",
    icon: BarChart3,
    color: "text-emerald-500",
  },
  {
    title: "Expert Mentoring",
    description: "One-on-one sessions with NDA toppers and SSB experts to guide you through every stage of selection.",
    icon: Users,
    color: "text-purple-500",
  },
  {
    title: "Daily Study Material",
    description: "Curated study notes, current affairs, and practice sets updated daily to keep you ahead of the curve.",
    icon: BookOpen,
    color: "text-orange-500",
  },
  {
    title: "Fast-Track Revision",
    description: "Last-minute revision capsules and formula sheets to boost your confidence before the big day.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Targeted Practice",
    description: "Chapter-wise practice questions with detailed solutions and shortcuts for time management.",
    icon: Target,
    color: "text-red-500",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to <span className="text-primary">Crack NDA</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Our platform provides the most advanced tools and resources for NDA aspirants, ensuring a holistic preparation experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.08]"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-black/50 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              
              <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-primary/10 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
