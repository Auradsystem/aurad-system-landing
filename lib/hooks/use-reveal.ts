"use client";

import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  count: number,
  threshold = 0.07,
  stepMs = 130,
) {
  const refs = useRef<(T | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => el.classList.add("visible"), i * stepMs);
            obs.unobserve(el);
          }
        },
        { threshold },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [count, threshold, stepMs]);

  return (i: number) => (el: T | null) => {
    refs.current[i] = el;
  };
}
