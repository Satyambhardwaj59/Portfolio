"use client";

import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Frontend Engineer", "Full-Stack Engineer"] as const;

export function HeroRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(roles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const currentRole = roles[roleIndex] ?? roles[0];
    const isRoleComplete = characterIndex === currentRole.length;
    const delay = isDeleting ? 45 : isRoleComplete ? 1400 : 85;
    const timeoutId = window.setTimeout(() => {
      if (isDeleting) {
        if (characterIndex <= 1) {
          setCharacterIndex(0);
          setIsDeleting(false);
          setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        } else {
          setCharacterIndex(characterIndex - 1);
        }
      } else if (isRoleComplete) {
        setIsDeleting(true);
      } else {
        setCharacterIndex(characterIndex + 1);
      }
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [characterIndex, isDeleting, reducedMotion, roleIndex]);

  const visibleRole = reducedMotion
    ? roles[0]
    : (roles[roleIndex] ?? roles[0]).slice(0, characterIndex);

  return (
    <span aria-hidden="true" className="hero-role-slot">
      <span className="hero-role-typewriter">{visibleRole}</span>
    </span>
  );
}