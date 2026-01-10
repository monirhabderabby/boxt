"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Info } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "frequently asked questions",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Read our guides",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Talk to an expert",
    href: "/docs/primitives/hover-card",
    description: "We'll give you the advic you need",
  },
  {
    title: "What our customers say",
    href: "/docs/primitives/hover-card",
    description: "Dennis from Birminggham",
  },
];

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <div className="container flex mx-auto justify-between h-20 items-center">
      <h1>67PROHEAT</h1>
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Advice & Faqs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-100 md:w-125 md:grid-cols-2 lg:w-150">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>About 67PROHEAT</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 w-125 gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <ProheatCard
                        title="Why choose 67PROHEAT?"
                        description="Find out more"
                        image="/red_car.jpg"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <ProheatCard
                        title=" Who we are"
                        description="The story behind 67PROHEAT"
                        image="/who_we_are.jpg"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <ProheatCard
                        title="Your installation experiences"
                        description="Find out more"
                        image="/who_we_are.jpg"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <ProheatCard
                        title="How 67PROHEAT works"
                        description="Find out more"
                        image="/laptop.jpg"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button>
        Help <Info />
      </Button>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

interface bostProps {
  title: string;
  description: string;
  image: string;
}
const ProheatCard = ({ title, description, image }: bostProps) => {
  return (
    <div className="group relative w-full h-32 overflow-hidden rounded-xl cursor-pointer">
      {/* Image */}
      <Image
        src={image}
        alt="bee"
        fill
        className="object-cover transition-all duration-500  group-hover:scale-105 blur-[0.2px]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1
          className="
            text-2xl font-bold
            translate-y-6 opacity-0
            transition-all duration-500
            group-hover:translate-y-0 group-hover:opacity-100
          "
        >
          {title}
        </h1>
        <p
          className="
            mt-2 text-sm
            translate-y-6 opacity-0
            transition-all duration-700
            group-hover:translate-y-0 group-hover:opacity-100
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};
