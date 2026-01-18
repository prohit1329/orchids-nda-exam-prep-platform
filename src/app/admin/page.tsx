"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/nda/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { 
  Shield, 
  Users, 
  Eye, 
  Upload,
  Save,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  Plus,
  Trash2,
  Edit3
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SiteStats {
  liveCount: string;
  viewerCount: string;
  totalAspirants: string;
  mockTestsTaken: string;
  successRate: string;
  expertMentors: string;
}

interface MockTest {
  id: string;
  name: string;
  difficulty: string;
  duration: string;
  questions: number;
}

export default function AdminPage() {
  const [user, setUser] = useState<{ name: string; email: string; role?: string } | null>(null);
  const [activeTab, setActiveTab] = useState("stats");
  const [stats, setStats] = useState<SiteStats>({
    liveCount: "1,234",
    viewerCount: "5,678",
    totalAspirants: "50,000+",
    mockTestsTaken: "1.2 Million",
    successRate: "85%",
    expertMentors: "100+"
  });
  const [mockTests, setMockTests] = useState<MockTest[]>([
    { id: "1", name: "NDA Mock Test 1", difficulty: "Medium", duration: "150 min", questions: 120 },
    { id: "2", name: "NDA Mock Test 2", difficulty: "Hard", duration: "150 min", questions: 120 },
    { id: "3", name: "Mathematics Practice Set", difficulty: "Medium", duration: "60 min", questions: 50 },
    { id: "4", name: "GAT Practice Set", difficulty: "Easy", duration: "90 min", questions: 100 },
  ]);
  const [newTest, setNewTest] = useState({ name: "", difficulty: "Medium", duration: "", questions: "" });
  const [saveMessage, setSaveMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("nda_user");
    if (stored) {
      const userData = JSON.parse(stored);
      if (userData.role !== "admin") {
        router.push("/dashboard");
      } else {
        setUser(userData);
        const savedStats = localStorage.getItem("nda_site_stats");
        if (savedStats) {
          setStats(JSON.parse(savedStats));
        }
        const savedTests = localStorage.getItem("nda_mock_tests");
        if (savedTests) {
          setMockTests(JSON.parse(savedTests));
        }
      }
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("nda_user");
    router.push("/");
  };

  const handleSaveStats = () => {
    localStorage.setItem("nda_site_stats", JSON.stringify(stats));
    setSaveMessage("Stats saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleAddTest = () => {
    if (newTest.name && newTest.duration && newTest.questions) {
      const test: MockTest = {
        id: Date.now().toString(),
        name: newTest.name,
        difficulty: newTest.difficulty,
        duration: newTest.duration,
        questions: parseInt(newTest.questions)
      };
      const updated = [...mockTests, test];
      setMockTests(updated);
      localStorage.setItem("nda_mock_tests", JSON.stringify(updated));
      setNewTest({ name: "", difficulty: "Medium", duration: "", questions: "" });
      setSaveMessage("Test added successfully!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleDeleteTest = (id: string) => {
    const updated = mockTests.filter(t => t.id !== id);
    setMockTests(updated);
    localStorage.setItem("nda_mock_tests", JSON.stringify(updated));
    setSaveMessage("Test deleted!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  if (!user) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    );
  }

  const tabs = [
    { id: "stats", label: "Site Stats", icon: BarChart3 },
    { id: "tests", label: "Mock Tests", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-zinc-400">Manage your NDA Prep platform</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-white/20 text-white">
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>

        {saveMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400"
          >
            {saveMessage}
          </motion.div>
        )}

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={activeTab === tab.id 
                ? "bg-primary text-black" 
                : "border-white/20 text-white hover:bg-white/10"
              }
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {activeTab === "stats" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" /> Live Statistics
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">Live Users Count</Label>
                  <div className="flex gap-2">
                    <Input
                      value={stats.liveCount}
                      onChange={(e) => setStats({ ...stats, liveCount: e.target.value })}
                      className="bg-black/50 border-white/10 text-white"
                      placeholder="e.g., 1,234"
                    />
                    <div className="flex items-center gap-2 px-4 rounded-lg bg-green-500/20 border border-green-500/30">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Total Viewers Count</Label>
                  <div className="flex gap-2">
                    <Input
                      value={stats.viewerCount}
                      onChange={(e) => setStats({ ...stats, viewerCount: e.target.value })}
                      className="bg-black/50 border-white/10 text-white"
                      placeholder="e.g., 5,678"
                    />
                    <div className="flex items-center gap-2 px-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
                      <Users className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" /> Homepage Stats
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">Total Aspirants</Label>
                  <Input
                    value={stats.totalAspirants}
                    onChange={(e) => setStats({ ...stats, totalAspirants: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., 50,000+"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Mock Tests Taken</Label>
                  <Input
                    value={stats.mockTestsTaken}
                    onChange={(e) => setStats({ ...stats, mockTestsTaken: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., 1.2 Million"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Success Rate</Label>
                  <Input
                    value={stats.successRate}
                    onChange={(e) => setStats({ ...stats, successRate: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., 85%"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Expert Mentors</Label>
                  <Input
                    value={stats.expertMentors}
                    onChange={(e) => setStats({ ...stats, expertMentors: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., 100+"
                  />
                </div>
              </div>
            </div>

            <Button onClick={handleSaveStats} className="bg-primary text-black hover:bg-primary/90">
              <Save className="h-4 w-4 mr-2" /> Save All Stats
            </Button>
          </motion.div>
        )}

        {activeTab === "tests" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" /> Add New Mock Test
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label className="text-white">Test Name</Label>
                  <Input
                    value={newTest.name}
                    onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., NDA Mock Test 5"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Difficulty</Label>
                  <select
                    value={newTest.difficulty}
                    onChange={(e) => setNewTest({ ...newTest, difficulty: e.target.value })}
                    className="w-full h-10 rounded-md bg-black/50 border border-white/10 text-white px-3"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Duration</Label>
                  <Input
                    value={newTest.duration}
                    onChange={(e) => setNewTest({ ...newTest, duration: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., 150 min"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Questions</Label>
                  <Input
                    type="number"
                    value={newTest.questions}
                    onChange={(e) => setNewTest({ ...newTest, questions: e.target.value })}
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="e.g., 120"
                  />
                </div>
              </div>
              <Button onClick={handleAddTest} className="mt-4 bg-primary text-black hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" /> Add Test
              </Button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Manage Mock Tests
              </h2>
              <div className="space-y-4">
                {mockTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                    <div>
                      <h3 className="font-medium text-white">{test.name}</h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-zinc-500">
                        <span className={`px-2 py-0.5 rounded ${
                          test.difficulty === "Easy" ? "bg-green-500/20 text-green-400" :
                          test.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-red-500/20 text-red-400"
                        }`}>{test.difficulty}</span>
                        <span>{test.duration}</span>
                        <span>{test.questions} questions</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleDeleteTest(test.id)}
                      variant="outline"
                      size="sm"
                      className="border-red-500/30 text-red-400 hover:bg-red-500/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" /> Content Upload
              </h2>
              <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center">
                <Upload className="h-12 w-12 text-zinc-500 mx-auto mb-4" />
                <p className="text-zinc-400 mb-2">Drag and drop files here, or click to browse</p>
                <p className="text-zinc-600 text-sm">Supports PDF, DOCX, Images</p>
                <Button variant="outline" className="mt-4 border-white/20 text-white">
                  Browse Files
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" /> Admin Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                  <div>
                    <h3 className="font-medium text-white">Enable Maintenance Mode</h3>
                    <p className="text-sm text-zinc-500">Show maintenance page to users</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/20 text-white">
                    Disabled
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                  <div>
                    <h3 className="font-medium text-white">Enable Registration</h3>
                    <p className="text-sm text-zinc-500">Allow new user registrations</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-green-500/30 text-green-400">
                    Enabled
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
