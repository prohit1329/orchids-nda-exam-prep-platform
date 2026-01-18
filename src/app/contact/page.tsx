"use client";

import { useState } from "react";
import { Navbar } from "@/components/nda/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Shield, Mail, User, MessageSquare, Send, MapPin, Phone, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Have questions about our NDA preparation courses? We're here to help you on your journey to the defence forces.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-zinc-400">123 Defence Colony, Sector 14<br />Pune, Maharashtra 411001</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-zinc-400">support@ndaprep.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-zinc-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-white/10">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Support Hours</h3>
                  <p className="text-zinc-400">Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-primary text-black hover:bg-primary/90">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-zinc-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-zinc-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-zinc-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <textarea
                      id="message"
                      placeholder="Tell us more about your query..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full rounded-md bg-black/50 border border-white/10 text-white placeholder:text-zinc-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
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
