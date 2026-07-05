import { useState, useEffect } from "react";

export function useSpotlight(ref: React.RefObject<HTMLElement | null>) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", () => setIsHovering(true));
    el.addEventListener("mouseleave", () => setIsHovering(false));

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", () => setIsHovering(true));
      el.removeEventListener("mouseleave", () => setIsHovering(false));
    };
  }, [ref]);

  return { mouse, isHovering };
}
