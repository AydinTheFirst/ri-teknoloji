import { LucideCopyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  label: string;
}

const pages = [
  { href: "/", label: "Anasayfa" },
  { href: "/projects", label: "Projeler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

const legal = [
  { href: "", label: "Gizlilik Politikası" },
  { href: "", label: "Kullanım Koşulları" },
];

const socials = [
  { href: "", label: "Facebook" },
  { href: "", label: "Instagram" },
  { href: "", label: "Twitter" },
];

const NavLink = ({ href, label }: LinkProps) => (
  <Link
    className="text-muted-foreground transition-colors hover:text-foreground"
    href={href}
  >
    {label}
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t-2 bg-background py-16 shadow-md">
      <div className="container grid grid-cols-12 gap-10">
        <div className="col-span-12 grid gap-3 md:col-span-6">
          <Image alt="Logo" height={200} src="/logo.png" width={140} />
          <p className="max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            doloremque, voluptatum, quidem, dolorum voluptates quod quas
            repudiandae autem nemo fugit.
          </p>
        </div>
        <div className="col-span-12 md:col-span-2">
          <ul className="grid list-inside gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <NavLink {...social} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2">
          <ul className="grid list-inside gap-3">
            {pages.map((page) => (
              <li key={page.label}>
                <NavLink {...page} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2">
          <ul className="grid list-inside gap-3">
            {legal.map((item) => (
              <li key={item.label}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </div>
        <hr className="col-span-12" />
        <div className="col-span-12">
          <p className="flex items-center justify-end gap-2">
            <LucideCopyright size={16} /> {new Date().getFullYear()} Ri
            Teknoloji
          </p>
        </div>
      </div>
    </footer>
  );
}
