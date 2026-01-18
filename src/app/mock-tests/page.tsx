"use client";

import { useState } from "react";
import { Navbar } from "@/components/nda/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, FileText, Trophy, Play, Lock, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const mockTests = [
  { id: 1, name: "NDA Mock Test 1", questions: 120, duration: "150 min", difficulty: "Medium", free: true, completed: false },
  { id: 2, name: "NDA Mock Test 2", questions: 120, duration: "150 min", difficulty: "Medium", free: true, completed: false },
  { id: 3, name: "NDA Mock Test 3", questions: 120, duration: "150 min", difficulty: "Hard", free: false, completed: false },
  { id: 4, name: "Mathematics Practice Set 1", questions: 50, duration: "60 min", difficulty: "Easy", free: true, completed: false },
  { id: 5, name: "Mathematics Practice Set 2", questions: 50, duration: "60 min", difficulty: "Medium", free: false, completed: false },
  { id: 6, name: "GAT Practice Set 1", questions: 100, duration: "90 min", difficulty: "Medium", free: true, completed: false },
  { id: 7, name: "GAT Practice Set 2", questions: 100, duration: "90 min", difficulty: "Hard", free: false, completed: false },
  { id: 8, name: "Previous Year NDA 2024 (I)", questions: 120, duration: "150 min", difficulty: "Real Exam", free: false, completed: false },
];

const sampleQuestions = [
  {
    id: 1,
    question: "If the sum of first n natural numbers is 210, then the value of n is:",
    options: ["18", "19", "20", "21"],
    correct: 2,
    subject: "Mathematics"
  },
  {
    id: 2,
    question: "The Battle of Plassey was fought in:",
    options: ["1757", "1764", "1857", "1947"],
    correct: 0,
    subject: "History"
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    subject: "Geography"
  },
  {
    id: 4,
    question: "The chemical formula of water is:",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: 0,
    subject: "Chemistry"
  },
  {
    id: 5,
    question: "Who wrote the national anthem of India?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    correct: 1,
    subject: "General Knowledge"
  },
];

export default function MockTestsPage() {
  const [activeTest, setActiveTest] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(sampleQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  const handleStartTest = (testId: number) => {
    setActiveTest(testId);
    setCurrentQuestion(0);
    setSelectedAnswers(Array(sampleQuestions.length).fill(null));
    setShowResults(false);
    setTimeLeft(300);
  };

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === sampleQuestions[index].correct ? score + 1 : score;
    }, 0);
  };

  if (activeTest !== null && !showResults) {
    return (
      <main className="min-h-screen bg-black">
        <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-white/10 px-4 py-3">
          <div className="container mx-auto flex items-center justify-between">
            <Button variant="ghost" onClick={() => setActiveTest(null)} className="text-white">
              <ArrowLeft className="h-4 w-4 mr-2" /> Exit Test
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-primary border-primary">
                Question {currentQuestion + 1} / {sampleQuestions.length}
              </Badge>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                <Clock className="h-3 w-3 mr-1" /> {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-24 pb-12">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/20 text-primary">{sampleQuestions[currentQuestion].subject}</Badge>
            <h2 className="text-2xl font-bold text-white mb-8">
              {sampleQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {sampleQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-primary bg-primary/10 text-white"
                      : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="border-white/20 text-white"
              >
                Previous
              </Button>
              {currentQuestion < sampleQuestions.length - 1 ? (
                <Button onClick={() => setCurrentQuestion(currentQuestion + 1)} className="bg-primary text-black">
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white">
                  Submit Test
                </Button>
              )}
            </div>

            <div className="mt-12 flex flex-wrap gap-2 justify-center">
              {sampleQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                    currentQuestion === index
                      ? "bg-primary text-black"
                      : selectedAnswers[index] !== null
                      ? "bg-green-600/30 text-green-400 border border-green-500/50"
                      : "bg-white/5 text-zinc-400 border border-white/10"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / sampleQuestions.length) * 100;

    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className={`inline-flex h-32 w-32 items-center justify-center rounded-full mb-8 ${
              percentage >= 60 ? "bg-green-500/20" : "bg-red-500/20"
            }`}>
              <Trophy className={`h-16 w-16 ${percentage >= 60 ? "text-green-500" : "text-red-500"}`} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Test Completed!</h1>
            <p className="text-xl text-zinc-400 mb-8">
              You scored <span className="text-primary font-bold">{score}</span> out of <span className="font-bold">{sampleQuestions.length}</span>
            </p>
            <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-extrabold text-white mb-2">{percentage.toFixed(0)}%</div>
              <p className="text-zinc-400">
                {percentage >= 80 ? "Excellent! You're well prepared!" : 
                 percentage >= 60 ? "Good job! Keep practicing!" : 
                 "Keep studying! You'll improve with practice."}
              </p>
            </div>

            <div className="space-y-4 text-left mb-8">
              {sampleQuestions.map((q, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  selectedAnswers[index] === q.correct 
                    ? "border-green-500/30 bg-green-500/10" 
                    : "border-red-500/30 bg-red-500/10"
                }`}>
                  <p className="text-white font-medium mb-2">{q.question}</p>
                  <p className="text-sm">
                    Your answer: <span className={selectedAnswers[index] === q.correct ? "text-green-400" : "text-red-400"}>
                      {selectedAnswers[index] !== null ? q.options[selectedAnswers[index]] : "Not answered"}
                    </span>
                  </p>
                  {selectedAnswers[index] !== q.correct && (
                    <p className="text-sm text-green-400">Correct: {q.options[q.correct]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => setActiveTest(null)} variant="outline" className="border-white/20 text-white">
                Back to Tests
              </Button>
              <Button onClick={() => handleStartTest(activeTest!)} className="bg-primary text-black">
                Retry Test
              </Button>
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
            <span className="text-primary">Mock Tests</span> & Practice Sets
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Simulate the real NDA exam experience with our comprehensive mock tests. Track your progress and improve your score.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-6 hover:border-primary/50 transition-all group"
            >
              {test.free ? (
                <Badge className="absolute top-4 right-4 bg-emerald-500 text-white border-emerald-400 font-bold shadow-lg shadow-emerald-500/40">Free</Badge>
              ) : (
                <Badge className="absolute top-4 right-4 bg-amber-500 text-black border-amber-400 font-bold shadow-lg shadow-amber-500/40">
                  <Lock className="h-3 w-3 mr-1" /> Premium
                </Badge>
              )}
              
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{test.name}</h3>
              
              <div className="flex flex-wrap gap-3 mb-4 text-sm text-zinc-400">
                <span className="flex items-center gap-1">
                  <FileText className="h-4 w-4" /> {test.questions} Questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {test.duration}
                </span>
              </div>
              
              <Badge variant="outline" className={`mb-6 font-bold ${
                test.difficulty === "Easy" ? "border-emerald-400 text-emerald-400 bg-emerald-500/20" :
                test.difficulty === "Medium" ? "border-amber-400 text-amber-400 bg-amber-500/20" :
                test.difficulty === "Hard" ? "border-rose-400 text-rose-400 bg-rose-500/20" :
                "border-cyan-400 text-cyan-400 bg-cyan-500/20"
              }`}>
                {test.difficulty}
              </Badge>

              <Button 
                onClick={() => handleStartTest(test.id)}
                className="w-full bg-primary text-black hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/20"
              >
                <Play className="h-4 w-4 mr-2" /> Start Test
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
