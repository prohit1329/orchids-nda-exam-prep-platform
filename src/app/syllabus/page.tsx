"use client";

import { Navbar } from "@/components/nda/Navbar";
import { motion } from "framer-motion";
import { BookOpen, Shield, Calculator, Globe, FlaskConical, History, Languages, ChevronDown } from "lucide-react";
import { useState } from "react";

const syllabusData = [
  {
    paper: "Paper I - Mathematics",
    icon: Calculator,
    totalMarks: 300,
    duration: "2.5 hours",
    sections: [
      {
        name: "Algebra",
        topics: [
          "Concept of set, operations on sets",
          "Venn diagrams, De Morgan laws",
          "Cartesian product, relation, equivalence relation",
          "Complex numbers and their basic properties",
          "Binary system of numbers, logarithms",
          "Permutation and Combination, Binomial theorem",
          "Solution of linear inequalities"
        ]
      },
      {
        name: "Matrices and Determinants",
        topics: [
          "Types of matrices, operations on matrices",
          "Determinant of a matrix",
          "Basic properties of determinants",
          "Adjoint and inverse of a square matrix",
          "Applications in solving equations"
        ]
      },
      {
        name: "Trigonometry",
        topics: [
          "Angles and their measures in degrees and radians",
          "Trigonometrical ratios and identities",
          "Inverse trigonometric functions",
          "Applications – Height and distance, properties of triangles"
        ]
      },
      {
        name: "Analytical Geometry (2D & 3D)",
        topics: [
          "Rectangular Cartesian Coordinate system",
          "Distance formula, equation of a line",
          "Circle and its properties",
          "Parabola, Ellipse, Hyperbola",
          "3D coordinate geometry basics"
        ]
      },
      {
        name: "Differential Calculus",
        topics: [
          "Concept of a real valued function",
          "Limits, Continuity, Differentiability",
          "Increasing and decreasing functions",
          "Application of derivatives in problems"
        ]
      },
      {
        name: "Integral Calculus and Differential Equations",
        topics: [
          "Integration as inverse of differentiation",
          "Definite integrals and their applications",
          "Differential equations of first order and first degree"
        ]
      },
      {
        name: "Vector Algebra",
        topics: [
          "Vectors in 2D and 3D",
          "Scalar and vector products",
          "Applications to problems"
        ]
      },
      {
        name: "Statistics and Probability",
        topics: [
          "Statistics: Frequency distribution, measures of central tendency",
          "Probability: Random experiment, conditional probability",
          "Bayes' theorem, Binomial distribution"
        ]
      }
    ]
  },
  {
    paper: "Paper II - General Ability Test (GAT)",
    icon: Shield,
    totalMarks: 600,
    duration: "2.5 hours",
    sections: [
      {
        name: "English",
        topics: [
          "Grammar and usage",
          "Vocabulary, Comprehension",
          "Cohesion in extended text",
          "Spotting errors, Sentence improvement",
          "Synonyms, Antonyms, Idioms and Phrases"
        ]
      },
      {
        name: "Physics",
        topics: [
          "Physical properties and states of matter",
          "Motion, Laws of Motion",
          "Work, Energy, Power",
          "Heat, Temperature and its measurement",
          "Sound waves and their properties",
          "Light – Reflection and refraction",
          "Current electricity, Magnetism"
        ]
      },
      {
        name: "Chemistry",
        topics: [
          "Physical and Chemical changes",
          "Elements, Mixtures and Compounds",
          "Symbols, Formulae and simple chemical equations",
          "Properties of Air and Water",
          "Acids, bases and salts",
          "Carbon and its forms, Fertilizers"
        ]
      },
      {
        name: "General Science",
        topics: [
          "Basics of living and non-living things",
          "Growth and Reproduction in Plants and Animals",
          "Human Body and its important organs",
          "Common Epidemics and their prevention",
          "Food and balanced diet"
        ]
      },
      {
        name: "History",
        topics: [
          "Indian History: Culture and Civilization",
          "Freedom Movement in India",
          "Constitution of India and Indian Polity",
          "Five Year Plans of India",
          "Panchayati Raj, Co-operatives and Community Development"
        ]
      },
      {
        name: "Geography",
        topics: [
          "Earth, its shape and size",
          "Latitudes and Longitudes",
          "Concept of time, International Date Line",
          "Origin of Earth, Rocks and their classification",
          "Important rivers, mountains, types of climate",
          "Regional Geography of India"
        ]
      },
      {
        name: "Current Events",
        topics: [
          "Current important events in India",
          "Current important world events",
          "Prominent personalities in news",
          "Sports and awards"
        ]
      }
    ]
  }
];

export default function SyllabusPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            NDA Exam <span className="text-primary">Syllabus</span> 2025
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Complete and updated syllabus for NDA examination. Click on each section to explore topics in detail.
          </p>
        </div>

        <div className="space-y-8">
          {syllabusData.map((paper, pIndex) => (
            <motion.div
              key={pIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: pIndex * 0.1 }}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden"
            >
              <div className="p-8 border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <paper.icon className="h-12 w-12 text-primary" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">{paper.paper}</h2>
                    <p className="text-zinc-400">Total Marks: {paper.totalMarks} | Duration: {paper.duration}</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {paper.sections.map((section, sIndex) => {
                  const key = `${pIndex}-${sIndex}`;
                  const isExpanded = expandedSections[key];

                  return (
                    <div key={sIndex}>
                      <button
                        onClick={() => toggleSection(key)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-lg font-semibold text-white">{section.name}</span>
                        <ChevronDown className={`h-5 w-5 text-zinc-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="px-6 pb-6"
                        >
                          <ul className="space-y-2 ml-4">
                            {section.topics.map((topic, tIndex) => (
                              <li key={tIndex} className="flex items-start gap-2 text-zinc-300">
                                <span className="text-primary mt-1">•</span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
