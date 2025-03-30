// "use client";

// import { useScroll, useTransform } from "framer-motion";
// import React from "react";
// import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

// export function HomeGemini() {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
//   const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
//   const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
//   const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
//   const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

//   return (
//     <div
//       className="h-[400vh] bg-black/[0.98] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
//       ref={ref}
//     >
//       <GoogleGeminiEffect
//         pathLengths={[
//           pathLengthFirst,
//           pathLengthSecond,
//           pathLengthThird,
//           pathLengthFourth,
//           pathLengthFifth,
//         ]}
//       />
//     </div>
//   );
// }

"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center">
        Explore the Universe in AR
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Experience an immersive journey through space with ExoVerse
      </p>
    </WavyBackground>
  );
}