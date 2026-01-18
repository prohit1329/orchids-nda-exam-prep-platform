"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [28.6139, 77.2090], size: 0.1 },
        { location: [18.5204, 73.8567], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20">
        <div className="container relative z-10 mx-auto grid lg:grid-cols-2 items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary px-4 py-1 text-sm font-semibold">
              2025 NDA EXAM PREP IS NOW LIVE
            </Badge>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Join the <span className="text-primary">Elite</span>.
              <br />
              Defend the Nation.
            </h1>
            <p className="max-w-[600px] text-lg text-zinc-400 sm:text-xl">
              The ultimate platform for National Defence Academy preparation. Mock tests, personalized mentoring, and daily study plans tailored for your success.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/register">
                <Button size="lg" className="h-14 px-8 text-lg font-bold">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setShowVideo(true)}
                className="h-14 px-8 text-lg font-bold border-white/20 text-white hover:bg-white/5"
              >
                <Play className="mr-2 h-5 w-5 fill-current" /> Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-zinc-500">
                <span className="text-white">10k+</span> aspirants already joined this month
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[400px] w-[400px] sm:h-[600px] sm:w-[600px]">
              <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: "1" }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_70%)] pointer-events-none" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-zinc-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Demo Video</h3>
                  <p className="text-zinc-400 mb-6">
                    Watch how NDA Prep helps thousands of aspirants achieve their dreams of joining the defence forces.
                  </p>
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
                    <div className="p-4 bg-black/30 rounded-xl">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-xs text-zinc-500">Mock Tests</div>
                    </div>
                    <div className="p-4 bg-black/30 rounded-xl">
                      <div className="text-2xl font-bold text-primary">50k+</div>
                      <div className="text-xs text-zinc-500">Students</div>
                    </div>
                    <div className="p-4 bg-black/30 rounded-xl">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-xs text-zinc-500">Success Rate</div>
                    </div>
                  </div>
                  <Link href="/register">
                    <Button className="mt-6 bg-primary text-black hover:bg-primary/90">
                      Start Your Preparation Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
