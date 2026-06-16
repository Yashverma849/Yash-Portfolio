"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SocialBoxProps {
  href: string;
  icon: React.ReactNode;
  className: string;
  delay?: string;
  label: string;
  external?: boolean;
}

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  className: string;
  delay?: string;
  label: string;
  external?: boolean;
}

export interface SocialCardProps {
  title?: string;
  socialLinks?: SocialLink[];
  className?: string;
}

const SocialBox = ({
  href,
  icon,
  className,
  delay,
  label,
  external = true,
}: SocialBoxProps) => {
  const linkClass =
    className === "social-card__box1"
      ? "social-card__link--1"
      : className === "social-card__box2"
        ? "social-card__link--2"
        : "social-card__link--3";

  return (
    <a
      href={href}
      className={cn("social-card__link", linkClass)}
      aria-label={label}
      style={{ transitionDelay: delay }}
      {...(external && href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <div className={cn("social-card__box", className)}>
        <span className="social-card__icon">{icon}</span>
      </div>
    </a>
  );
};

export function SocialCard({
  title = "Socials",
  socialLinks,
  className,
}: SocialCardProps) {
  return (
    <div className={cn("social-card", className)}>
      <div className="social-card__background" />
      <div className="social-card__logo">{title}</div>

      {socialLinks?.map((link) => (
        <SocialBox
          key={link.label}
          href={link.href}
          icon={link.icon}
          className={link.className}
          delay={link.delay}
          label={link.label}
          external={link.external}
        />
      ))}
    </div>
  );
}

export default SocialCard;
