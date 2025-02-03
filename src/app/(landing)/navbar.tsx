"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LucideMenu, LucideX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

const NavbarContext = React.createContext<NavbarContextType | null>(null);

export const useNavbar = () => {
  const context = React.useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }

  return context;
};

export const NavbarProvider = ({ children }: React.PropsWithChildren) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const links: NavLinkProps[] = [
  { href: "/", label: "Anasayfa" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetlerimiz" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
}

function NavbarContent() {
  return (
    <nav className="fixed top-0 z-10 w-full bg-background py-2 shadow-md">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <NavbarToggler />
          <Link href="/">
            <Image alt="Logo" height={40} src="/logo.png" width={120} />
          </Link>
          <div className="hidden gap-3 md:flex">
            {links.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Link href={"https://github.com/ri-teknoloji"}>
            <Button size={"icon"} variant={"ghost"}>
              <SiGithub />
              <span className="sr-only">
                Ri Teknoloji&apos;nin GitHub sayfasına git
              </span>
            </Button>
          </Link>
        </div>
        <NavbarMenu />
      </div>
    </nav>
  );
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const { setIsMenuOpen } = useNavbar();
  const path = usePathname();

  // smooth scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!href.startsWith("#")) return;
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  if (path === "/") {
    return (
      <Link
        className="text-muted-foreground transition-colors hover:text-foreground"
        href={href}
        onClick={href.startsWith("#") ? handleClick : undefined}
      >
        {label}
      </Link>
    );
  } else {
    return null;
  }
};

const NavbarToggler = () => {
  const { isMenuOpen, toggleMenu } = useNavbar();
  const Icon = isMenuOpen ? LucideX : LucideMenu;
  return (
    <Button
      className="md:hidden"
      onClick={toggleMenu}
      size={"icon"}
      variant={"outline"}
    >
      <Icon />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  );
};

const NavbarMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useNavbar();

  return (
    <Drawer onOpenChange={setIsMenuOpen} open={isMenuOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Ri Teknoloji</DrawerTitle>
          <DrawerDescription>Yazılım ve Tasarım</DrawerDescription>
        </DrawerHeader>
        <div className="container my-10">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
