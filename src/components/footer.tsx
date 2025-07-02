"use client";

import Link from "next/link";
import { Code, Twitter, Github, Linkedin } from "lucide-react";

const footerNavs = [
  {
    label: "Product",
    items: [
      { href: "/features", name: "Features" },
      { href: "/pricing", name: "Pricing" },
      { href: "/dashboard", name: "Dashboard" },
      { href: "/docs", name: "Docs" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/about", name: "About Us" },
      { href: "/blog", name: "Blog" },
      { href: "/contact", name: "Contact" },
      { href: "/careers", name: "Careers" },
    ],
  },
  {
    label: "Legal",
    items: [
      { href: "/terms", name: "Terms of Service" },
      { href: "/privacy", name: "Privacy Policy" },
    ],
  },
];

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Github className="h-5 w-5" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold">CodeGraphDigital</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Smarter Marketing with AI at the Core.
            </p>
          </div>

          {footerNavs.map((nav) => (
            <div key={nav.label}>
              <h4 className="font-semibold text-foreground">{nav.label}</h4>
              <ul className="mt-4 space-y-2">
                {nav.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeGraphDigital. All Rights Reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}