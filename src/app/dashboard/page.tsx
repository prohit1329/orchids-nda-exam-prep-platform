"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/nda/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  User, 
  BookOpen, 
  Trophy, 
  Clock, 
  Target, 
  TrendingUp, 
  Calendar,
  FileText,
  Play,
  LogOut
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("nda_user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("nda_user");
    router.push("/");
  };

  if (!user) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    );
  }

  const stats = [
    { label: "Tests Taken", value: "5", icon: FileText, color: "text-blue-500" },
    { label: "Average Score", value: "72%", icon: Target, color: "text-green-500" },
    { label: "Study Hours", value: "24h", icon: Clock, color: "text-yellow-500" },
    { label: "Rank", value: "#156", icon: Trophy, color: "text-purple-500" },
  ];

  const recentTests = [
    { name: "NDA Mock Test 1", score: 78, date: "2 days ago", status: "completed" },
    { name: "Mathematics Practice Set", score: 65, date: "5 days ago", status: "completed" },
    { name: "GAT Practice Set 1", score: 82, date: "1 week ago", status: "completed" },
  ];

  const recommendedTests = [
    { name: "NDA Mock Test 2", difficulty: "Medium", duration: "150 min" },
    { name: "Trigonometry Practice", difficulty: "Hard", duration: "45 min" },
    { name: "Current Affairs Quiz", difficulty: "Easy", duration: "20 min" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, {user.name}!</h1>
            <p className="text-zinc-400">Continue your NDA preparation journey</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-white/20 text-white">
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Recent Activity
            </h2>
            <div className="space-y-4">
              {recentTests.map((test, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                  <div>
                    <h3 className="font-medium text-white">{test.name}</h3>
                    <p className="text-sm text-zinc-500">{test.date}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${test.score >= 70 ? "text-green-500" : "text-yellow-500"}`}>
                      {test.score}%
                    </div>
                    <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                      {test.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/mock-tests">
              <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary/80">
                View All Tests
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" /> Recommended For You
            </h2>
            <div className="space-y-4">
              {recommendedTests.map((test, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                  <div>
                    <h3 className="font-medium text-white">{test.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className={`text-xs ${
                        test.difficulty === "Easy" ? "border-green-500/30 text-green-400" :
                        test.difficulty === "Medium" ? "border-yellow-500/30 text-yellow-400" :
                        "border-red-500/30 text-red-400"
                      }`}>
                        {test.difficulty}
                      </Badge>
                      <span className="text-xs text-zinc-500">{test.duration}</span>
                    </div>
                  </div>
                  <Link href="/mock-tests">
                    <Button size="sm" className="bg-primary text-black hover:bg-primary/90">
                      <Play className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Ready for the next challenge?</h2>
          <p className="text-zinc-400 mb-6">Take a full-length mock test to assess your preparation level</p>
          <Link href="/mock-tests">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold">
              Start Mock Test Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
