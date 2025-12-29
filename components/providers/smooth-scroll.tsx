"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function SmoothScrolling({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
