"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WobbleCardProps {
  containerClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

export function WobbleCard({
  containerClassName,
  children,
  className,
}: WobbleCardProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl p-4",
        containerClassName
      )}
    >
      <motion.div
        className={cn(
          "relative z-10 flex h-full w-full flex-col",
          className
        )}
        animate={{
          rotateX: isHovering ? mousePosition.y * 10 : 0,
          rotateY: isHovering ? mousePosition.x * 10 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
} 