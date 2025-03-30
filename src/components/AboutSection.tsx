"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutSection() {
  const data = [
    {
      title: "Explore the Universe",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Immerse yourself in an interactive space exploration experience.
          </p>
          <div className="mb-8">
            <ul className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Travel through the solar system in AR.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Discover planets, moons, and cosmic phenomena.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Learn about space missions and astronomical events.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "How It Works",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Navigate and interact with the universe effortlessly:
          </p>
          <div className="mb-8">
            <ul className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Use AR to visualize celestial bodies in 3D.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Tap on objects for real-time information.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Access detailed space data and mission logs.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Get guided tours through galaxies and nebulae.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Why Choose ExoVerse?",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Your gateway to an interactive and educational space adventure.
          </p>
          <div className="mb-8">
            <ul className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Experience AR-powered space exploration.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Learn about space in a fun and interactive way.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Designed for iPhone, iPad, and Vision Pro.
              </li>
              <li className="flex gap-2 items-center mb-1 md:mb-4">
                <span className="flex gap-4">-</span> Constant updates with new space content and discoveries.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="About">
      <Timeline data={data} />
    </div>
  );
}
