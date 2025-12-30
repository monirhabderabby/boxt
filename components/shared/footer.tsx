import { Facebook, Instagram, Linkedin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigationColumns = [
    {
      title: "Boilers",
      links: [
        { text: "New boilers", href: "#" },
        { text: "Combi boilers", href: "#" },
        { text: "Worcester boilers", href: "#" },
        { text: "Vaillant boilers", href: "#" },
        { text: "Navien boilers", href: "#" },
      ],
    },
    {
      title: "Installations",
      links: [
        { text: "Solar", href: "#" },
        { text: "Air conditioning", href: "#" },
        { text: "Heat pumps", href: "#" },
        { text: "Battery storage", href: "#" },
        { text: "EV chargers", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { text: "About BOXT", href: "#" },
        { text: "Contact us", href: "#" },
        { text: "Complaints", href: "#" },
        { text: "Work with us", href: "#" },
        { text: "Promos", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, ariaLabel: "Facebook" },
    { href: "#", icon: Instagram, ariaLabel: "Instagram" },
    { href: "#", icon: Linkedin, ariaLabel: "LinkedIn" },
    { href: "#", icon: Twitter, ariaLabel: "Twitter" },
  ];

  const certificationBadges = [
    {
      src: "/footer-logos/gas-safe.svg",
      alt: "Gas Safe Logo",
      width: 100,
      height: 100,
    },
    {
      src: "/footer-logos/hies.svg",
      alt: "HIES Logo",
      width: 100,
      height: 100,
    },
    {
      src: "/footer-logos/mcs.svg",
      alt: "MCS Logo",
      width: 100,
      height: 100,
    },
    {
      src: "/footer-logos/gas-safe.svg",
      alt: "Gas Safe Logo",
      width: 100,
      height: 100,
    },
    {
      src: "/footer-logos/hies.svg",
      alt: "HIES Logo",
      width: 100,
      height: 100,
    },
    {
      src: "/footer-logos/mcs.svg",
      alt: "MCS Logo",
      width: 100,
      height: 100,
    },
  ];

  return (
    <footer className="text-white border-t border-neutral-800">
      {/* Promo text */}
      <div className="italic text-base text-center my-12 space-y-4 text-white/70">
        <p>
          <sup>1</sup>Terms and conditions apply to $125 discount promo code.
          Click here to learn more.
        </p>
        <p>
          <sup>2</sup>Finance available subject to status. Learn more about
          finance options here. BOXT is a broker not a lender.
        </p>
        <p>
          <sup>3</sup>Next working day installation available when you order
          before 3pm, subject to availability.
        </p>
      </div>
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Top Section: Logo, Trustpilot, and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Left Column: Logo & Trustpilot */}
          <div className="md:col-span-1">
            <div className="pb-6">
              <h2 className="text-3xl font-bold text-orange-500 mb-6">BOXT</h2>

              {/* Trustpilot Badge */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">★</span>
                  <span className="text-sm font-semibold text-neutral-300">
                    Trustpilot
                  </span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-green-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/70">
                  TrustScore 4.8{" "}
                  <Link href="#" className="underline">
                    52,304 reviews
                  </Link>
                </p>
              </div>

              {/* Company Address */}
              <p className="text-base text-white/70 leading-relaxed">
                BOXT Limited, 3320 Century Way, Thorpe Park, Leeds, West
                Yorkshire, LS15 8ZB.
              </p>

              <div className="flex items-center gap-x-2 mt-5 text-base text-white/70 leading-relaxed">
                <Phone className="size-4" /> 01382666777
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-orange-500 transition p-3 rounded-full border-2 border-neutral-400/25"
                  aria-label={link.ariaLabel}
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {navigationColumns.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="font-semibold text-lg text-white mb-4">
                {column.title}
              </h3>
              <nav className="space-y-4 flex flex-col">
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-base text-white/70 hover:text-orange-500 transition underline"
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="py-6 mb-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
            {certificationBadges.map((badge, index) => (
              <Image
                key={index}
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
              />
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-neutral-800 pt-6 mb-6">
          <div className="flex flex-wrap gap-4 text-base">
            <Link
              href="#"
              className="text-white/70 hover:text-orange-500 transition underline"
            >
              BOXT Cookies policy
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-orange-500 transition underline"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-orange-500 transition underline"
            >
              Modern Slavery Statement | BOXT
            </Link>
          </div>
        </div>

        {/* Legal Text */}
        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
          BOXT Limited is authorised and regulated by the Financial Conduct
          Authority. FCA register No. 767308. Finance is offered through
          HomeServe Finance Limited (FRN 994955) and in some cases we also lend
          with Propensio Finance Limited (FRN 806409). Finance available subject
          to status, affordability and a credit check. Terms and conditions
          apply. BOXT Limited acts as a credit broker and is not a lender.
          Registered in England & Wales company No. 08086606 VAT No. 257059782.
          BOXT Limited, 3320 Century Way, Thorpe Park, Leeds, West Yorkshire,
          LS15 8ZB.
        </p>

        {/* Copyright */}
        <p className="text-sm text-neutral-600">
          ©2025 BOXT Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
