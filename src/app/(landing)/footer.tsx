import { LucideLink, LucideMail, LucideMap, LucidePhone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
}

const pages = [
  { href: "/", label: "Anasayfa" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetlerimiz" },
  { href: "#contact", label: "İletişim" },
];

const legal = [
  { href: "/privacy", label: "Gizlilik Politikası" },
  { href: "/tos", label: "Kullanım Koşulları" },
];

const socials: LinkProps[] = [
  { href: "#", icon: <LucideLink />, label: "www.riteknoloji.com" },
  {
    href: "mailto:info@riteknoloji.com",
    icon: <LucideMail />,
    label: "info@riteknoloji.com",
  },
  {
    href: "tel:+905434989203",
    icon: <LucidePhone />,
    label: "+90 (543) 498 92 03",
  },
  {
    href: "#",
    icon: <LucideMap />,
    label:
      "Ünalan Mahallesi Libadiye Caddesi Emaar Square Heights Residence E Blok No: 82 Kat: 29 Daire: 291 Üsküdar - İstanbul",
  },
];

const NavLink = ({ href, icon, label }: LinkProps) => (
  <Link
    className="flex gap-3 text-wrap text-sm text-muted-foreground transition-colors hover:text-foreground"
    href={href}
  >
    {icon && <span>{icon}</span>}
    <span className="max-w-xs">{label}</span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t-2 bg-background py-16 shadow-md">
      <div className="container grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-6">
          <ul className="grid list-inside gap-3">
            {pages.map((page) => (
              <li key={page.label}>
                <NavLink {...page} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 flex md:col-span-6 md:justify-end">
          <ul className="grid list-inside gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <NavLink {...social} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12">
          <Image alt="Logo" height={200} src="/logo.png" width={140} />
        </div>
        <hr className="col-span-12" />
        <div className="col-span-12 grid gap-3 md:col-span-6">
          <p>
            © {new Date().getFullYear()} Ri Teknoloji Tüm hakları saklıdır.
          </p>
        </div>
        <div className="col-span-12 grid gap-3 md:col-span-6">
          <ul className="flex list-inside flex-wrap justify-start gap-3 md:justify-end">
            {legal.map((item) => (
              <li key={item.label}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
