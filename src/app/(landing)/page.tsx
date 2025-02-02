"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HyperText } from "@/components/ui/hyper-text";
import { Input } from "@/components/ui/input";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

import { IconCloudDemo } from "./icon-cloud-demo";
import { MarqueeDemo } from "./marquee-demo";

export default function Page() {
  const { theme } = useTheme();

  const color = theme === "light" ? "#000" : "#fff";
  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        color={color}
        ease={80}
        quantity={100}
        refresh
      />
      <ScrollProgress />
      <div className="grid min-h-[80vh] grid-cols-1 place-items-center gap-3 py-16 md:grid-cols-2 md:py-0">
        <div className="flex flex-col gap-3">
          <h1 className="flex items-center gap-3 text-5xl font-bold">
            <HyperText>GELECEK</HyperText>
            <NumberTicker
              className="whitespace-pre-wrap tracking-tighter"
              decimalPlaces={1}
              value={4.0}
            />
          </h1>
          <p className="max-w-xl flex-1 text-lg">
            Biz, yenilikçi ve müşteri odaklı yazılım çözümleri sunan bir
            teknoloji şirketiyiz. Amacımız, işletmelerin dijital dönüşüm
            süreçlerini hızlandırmak ve verimliliklerini artırmak için
            özelleştirilmiş yazılım çözümleri geliştirmektir
          </p>
          <div className="flex gap-3">
            <Link href={"#about"}>
              <Button>Hadi Başlayalım</Button>
            </Link>
            <Link href={"#contact"}>
              <Button variant="secondary">Bize Ulaşın</Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <IconCloudDemo />
        </div>
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}

const AboutSection = () => {
  return (
    <div className="relative grid min-h-screen place-items-center" id="about">
      <Spotlight />
      <div className="grid gap-3">
        <h2 className="text-center text-3xl font-bold">Hakkımızda</h2>
        <p className="max-w-xl text-center">
          Biz, yenilikçi ve müşteri odaklı yazılım çözümleri sunan bir teknoloji
          şirketiyiz. Amacımız, işletmelerin dijital dönüşüm süreçlerini
          hızlandırmak ve verimliliklerini artırmak için özelleştirilmiş yazılım
          çözümleri geliştirmektir
        </p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="grid min-h-screen place-items-center" id="services">
      <div className="grid gap-3">
        <h2 className="text-center text-3xl font-bold">Hizmetlerimiz</h2>
        <MarqueeDemo />
      </div>
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget),
      data = Object.fromEntries(formData.entries());

    const mailto = "mailto:info@riteknoloji.com";

    const body = `Ad: ${data.name}\nE-posta: ${data.email}\nMesaj: ${data.message}`,
      subject = "İletişim Formu";

    window.location.href = `${mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grid min-h-screen grid-cols-12 gap-3" id="contact">
      <h2 className="col-span-12 text-center text-3xl font-bold">İletişim</h2>
      <div className="col-span-12 md:col-span-6">
        <div className="grid gap-3">
          <h3 className="text-2xl font-bold">Bize Ulaşın</h3>
          <p className="max-w-lg">
            Bizimle iletişime geçmek için aşağıdaki formu doldurabilir veya
            doğrudan e-posta adresimiz üzerinden bizimle iletişime
            geçebilirsiniz
          </p>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Card className="w-full">
          <CardContent className="mt-5">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-1">
                <Label htmlFor="name">Adınız</Label>
                <Input placeholder="Adınız" required type="text" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="email">E-posta Adresiniz</Label>
                <Input placeholder="E-posta adresiniz" required type="email" />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea placeholder="Mesajınız" required rows={5} />
              </div>
              <Button>Gönder</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
