import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import lampImage from "../assets/editorial-table-lamp.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Make Your Resume — A Cinematic Beginning" },
      {
        name: "description",
        content: "Step out of the dark and begin making your resume.",
      },
      { property: "og:title", content: "Make Your Resume — A Cinematic Beginning" },
      {
        property: "og:description",
        content: "Step out of the dark and begin making your resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type ScenePhase = "waiting" | "lighting" | "moving" | "complete";

function Index() {
  const [phase, setPhase] = useState<ScenePhase>("waiting");
  const timers = useRef<number[]>([]);
  const reduceMotion = useReducedMotion();
  const hasStarted = phase !== "waiting";
  const isMoving = phase === "moving" || phase === "complete";

  useEffect(() => {
    return () => timers.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const begin = () => {
    if (hasStarted) return;

    if (reduceMotion) {
      setPhase("complete");
      return;
    }

    setPhase("lighting");
    timers.current.push(window.setTimeout(() => setPhase("moving"), 1450));
    timers.current.push(window.setTimeout(() => setPhase("complete"), 4300));
  };

  return (
    <main
      className="lamp-scene relative isolate min-h-[100svh] w-full cursor-pointer overflow-hidden bg-background outline-none"
      onClick={begin}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          begin();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={hasStarted ? "Resume opening revealed" : "Turn on the lamp"}
    >
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="lamp-motion-origin"
          initial={false}
          animate={{
            x: isMoving ? "var(--lamp-shift-x)" : "0vw",
            y: isMoving ? "var(--lamp-shift-y)" : "0vh",
            rotate: phase === "moving" ? -0.35 : 0,
          }}
          transition={{
            x: { duration: reduceMotion ? 0 : 2.85, ease: [0.16, 1, 0.3, 1] },
            y: { duration: reduceMotion ? 0 : 2.85, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: reduceMotion ? 0 : 3.1, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.img
            src={lampImage}
            alt="An elegant brass table lamp with a linen shade"
            width={1024}
            height={1536}
            draggable={false}
            className="lamp-image block select-none object-contain"
            initial={false}
            animate={{
              opacity: hasStarted ? 1 : 0.28,
              filter: hasStarted
                ? "brightness(1) saturate(0.96) drop-shadow(0 18px 19px rgb(0 0 0 / 0.82)) drop-shadow(0 0 13px rgb(210 139 61 / 0.18))"
                : "brightness(0.11) saturate(0.35) drop-shadow(0 14px 14px rgb(0 0 0 / 0.9))",
            }}
            transition={{ duration: reduceMotion ? 0 : 1.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>

      <motion.section
        aria-hidden={!isMoving}
        className="message-wrap absolute z-10"
        initial={false}
        animate={{
          opacity: isMoving ? 1 : 0,
          clipPath: isMoving ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
          x: isMoving ? 0 : -24,
        }}
        transition={{
          opacity: { duration: reduceMotion ? 0 : 2.35, delay: reduceMotion ? 0 : 0.35 },
          clipPath: { duration: reduceMotion ? 0 : 2.8, delay: reduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] },
          x: { duration: reduceMotion ? 0 : 2.7, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        <h1 className="editorial-title text-foreground">
          <span>ARE YOU AFRAID</span>
          <span>TO MAKE YOUR</span>
          <span>RESUME!!</span>
        </h1>

        <motion.a
          href="#go"
          className="go-link group mt-8 inline-flex items-center gap-4 text-foreground"
          onClick={(event) => event.stopPropagation()}
          initial={false}
          animate={{ opacity: phase === "complete" ? 1 : 0, y: phase === "complete" ? 0 : 10 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>GO</span>
          <span aria-hidden="true" className="go-line block h-px w-12 bg-current transition-[width] duration-500 group-hover:w-20" />
        </motion.a>
      </motion.section>

      <div id="go" className="absolute bottom-0" aria-hidden="true" />
    </main>
  );
}