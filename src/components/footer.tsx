"use client";

import Link from "next/link";
import { Code } from "lucide-react";
import {
  SiX,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiPinterest,
} from "react-icons/si";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 68 68'
        className='w-6 h-6'
      >
        <path
          className='fill-current'
          d='M13.94 33.658a2.962 2.962 0 110.034-2.44h2.296a5.167 5.167 0 100 2.44h-2.296zM23.51 27.257h-.379a5.098 5.098 0 00-2.526.89v-5.752h-2.095v14.794h2.107v-.54a5.167 5.167 0 102.893-9.392zm2.962 5.534v.092a2.94 2.94 0 01-.08.362 2.934 2.934 0 01-.144.373v.046a2.98 2.98 0 01-2.072 1.625l-.281.046h-.063a2.916 2.916 0 01-.322 0 2.962 2.962 0 01-.402-.029h-.057a2.934 2.934 0 01-.752-.23h-.057a2.974 2.974 0 01-.666-.447 2.991 2.991 0 01-.522-.626 2.962 2.962 0 01-.19-.367 2.945 2.945 0 01.035-2.44 2.968 2.968 0 012.377-1.682 2.934 2.934 0 01.304 0 2.968 2.968 0 012.928 2.882 2.957 2.957 0 010 .396z'
          transform='matrix(3 0 0 3 -17 -60)'
        />
      </svg>
    ),
    href: "https://www.crunchbase.com/organization/codegraph-digital",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 800 800'
        className='w-6 h-6 fill-current'
      >
        <path d='M156.9 180.1h136.8v57.8h-79.1v124.9h45.8v57.8h-45.8v199.3h-57.8V180.1z' />
        <path d='M372.4 237.9v124.9h68.5c16.6 0 31.1 14.5 31.1 31v194.7c0 16.7-14.5 31.4-31.1 31.4h-95c-16.6 0-31.1-14.3-31.1-30.6V212.3c0-16.8 14.4-32.2 30.3-32.2h95.9c16.6 0 31.1 14.5 31.1 31v72.7h-57.8v-45.8zm0 182.7v141.5h41.9V420.6h-41.9z' />
        <path d='M647.1 283.7h-57.8v-45.8h-41.9v124.9l69.1 0.02c16.4 0 30.5 19.7 30.5 35.8v189.7c0 16.8-14.3 31.6-30.5 31.6h-92.9c-16.3 0-30.5-14.4-30.5-30.7v-106l54.3-0.1v79.1h41.9v-141.5l-65.7 0.02c-16.2 0-30.5-14.6-30.5-31.1V211.3c0-16.6 14.3-31.2 30.5-31.2h92.9c16.3 0 30.5 14.6 30.5 31.2v72.4z' />
      </svg>
    ),
    href: "https://www.f6s.com/codegraph-digital",
  },
  { icon: <SiX className='h-5 w-5' />, href: "https://x.com/codegraphdigita" },
  {
    icon: <SiFacebook className='h-5 w-5' />,
    href: "https://www.facebook.com/codegraphdigital/",
  },
  {
    icon: <SiLinkedin className='h-5 w-5' />,
    href: "https://www.linkedin.com/company/codegraph-digital/",
  },
  {
    icon: <SiYoutube className='h-5 w-5' />,
    href: "https://www.youtube.com/@CodeGraphDigital",
  },
  {
    icon: <SiPinterest className='h-5 w-5' />,
    href: "https://www.pinterest.com/codegraphdigital/",
  },
];

export function Footer() {
  const theme = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <footer className='border-t border-border/40 bg-muted/50'>
      <div className='container py-12 mx-auto'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Link href='/' className='flex items-center space-x-2'>
              {isMounted ? (
                <Image
                  src={
                    theme.theme === "light"
                      ? "/logo-light.webp"
                      : "/logo-dark.webp"
                  }
                  alt='CodeGraphDigital Logo'
                  width={200}
                  height={50}
                />
              ) : (
                <>
                  <Code className='h-6 w-6 text-primary' />
                  <span className='font-bold'>CodeGraphDigital</span>
                </>
              )}
            </Link>
            <p className='text-sm text-muted-foreground'>
              Smarter Marketing with AI at the Core.
            </p>
          </div>

          {footerNavs.map((nav) => (
            <div key={nav.label}>
              <h4 className='font-semibold text-foreground'>{nav.label}</h4>
              <ul className='mt-4 space-y-2'>
                {nav.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm text-muted-foreground transition-colors hover:text-primary'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-10 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()}{" "}
            <Link href='/' className='hover:text-primary transition-colors '>
              CodeGraphDigital
            </Link>
            {". "}
            All Rights Reserved.
          </p>
          <div className='mt-4 flex items-center space-x-4 sm:mt-0'>
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                className='text-muted-foreground transition-colors hover:text-primary'
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
