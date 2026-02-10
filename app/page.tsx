'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Phone, MapPin, Clock, Star, Wind, Wrench, Sparkles } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)

      if (currentY > lastScrollY && currentY > 120) {
        // scroll down
        setHideHeader(true)
      } else {
        // scroll up
        setHideHeader(false)
      }

      lastScrollY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '628124082991'
  const phoneNumber = '628124082991'
  const whatsappMessage = encodeURIComponent(
    'Halo, saya tertarik dengan layanan Service AC Gowa. Bisakah Anda membantu saya?',
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 rounded-full bg-green-500 p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-green-600"
        aria-label="Hubungi WhatsApp"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          priority
        />
      </a>

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ${
          hideHeader ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled ? 'shadow-sm' : ''}`}
      >
        {/* Top info bar (desktop only) */}
        <div className="hidden bg-primary text-xs text-white md:block">
          <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-1.5">
            <span className="hidden text-white/80 md:inline">info@kangservice.id</span>
            <span className="h-4 w-px bg-white/30" />
            <a
              href={`tel:+${phoneNumber}`}
              className="font-semibold text-white hover:underline"
            >
              0{phoneNumber.slice(2)}
            </a>
            <span className="h-4 w-px bg-white/30" />
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF7A00] px-3 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-[#ff8a1f]"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
              />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="border-b border-border/60 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:py-3.5">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src="/logo.png"
                alt="Logo Service AC Gowa - Kang Service"
                width={220}
                height={80}
                className="h-10 w-auto drop-shadow-sm sm:h-11 md:h-12"
                priority
              />
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <nav
                className={`${
                  mobileMenuOpen ? 'right-0 opacity-100' : '-right-full opacity-0 md:opacity-100'
                } fixed top-[56px] z-20 h-[calc(100vh-56px)] w-full bg-white px-6 pb-8 pt-4 shadow-lg transition-all duration-200 md:static md:h-auto md:w-auto md:bg-transparent md:p-0 md:shadow-none`}
              >
                <ul className="flex flex-col gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center md:gap-8">
                  <li>
                    <a href="#about" className="hover:text-primary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-primary">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-primary">
                      Daftar Harga
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="hover:text-primary">
                      Area Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="hover:text-primary">
                      Testimoni
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-primary">
                      Kontak
                    </a>
                  </li>
                </ul>
              </nav>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-lg bg-[#FF7A00] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#ff8a1f] md:inline-flex"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
                WhatsApp
              </a>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xl md:hidden"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Buka menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-24 md:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 md:flex-row md:items-center md:gap-12">
          <div className="flex-1 space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-300 ring-1 ring-orange-400/60">
              <Sparkles size={14} />
              Kang Service • Service AC Panggilan Bergaransi
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.2rem]">
              Service AC Gowa & Sekitarnya
            </h1>
            <p className="max-w-xl text-balance text-sm text-white/80 md:text-base">
              Udara panas bikin ruangan nggak nyaman? Panggil tim kami! AC Anda kami pastikan
              kembali dingin, optimal, dan dikerjakan dengan cepat serta rapi, semua layanan
              bergaransi.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF7A00] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#ff8a1f] sm:px-9 sm:py-3.5 sm:text-base"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                Hubungi Kami
              </a>
              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 bg-transparent px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-primary sm:px-9 sm:py-3.5 sm:text-base"
              >
                <Phone size={20} />
                Telepon Sekarang
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['/profil1.jpg', '/profil2.jpg', '/profil3.jpg'].map((src, index) => (
                    <div
                      key={src}
                      className="relative h-8 w-8 rounded-full border-2 border-primary bg-white/90"
                    >
                      <Image
                        src={src}
                        alt={`Pelanggan ${index + 1}`}
                        fill
                        sizes="32px"
                        className="rounded-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-white/80">
                  <p className="text-lg font-bold leading-none text-white">4900+</p>
                  <p>Satisfied Reviews</p>
                </div>
              </div>
              <div className="h-10 w-px bg-white/30" />
              <div className="flex gap-6 text-xs text-white/80 sm:text-sm">
                <div>
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p>Tahun pengalaman</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">300+</p>
                  <p>Proyek berhasil</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">0</p>
                  <p>Biaya tersembunyi</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-1 items-end justify-center md:justify-end">
            <div className="relative mx-auto h-[260px] w-full max-w-md sm:h-[300px] lg:h-[360px]">
              <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute inset-0 rounded-[2.5rem] bg-white/5 ring-1 ring-white/10" />
              <div className="relative h-full w-full animate-hero-float transition-transform duration-500 hover:scale-105">
                <Image
                  src="/teknisi.png"
                  alt="Teknisi AC profesional Kang Service"
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenali Kami Section */}
      <section id="about" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left: images + years card */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/teknisi8.jpg"
                    alt="Teknisi Kang Service sedang servis AC di apartemen"
                    fill
                    sizes="(min-width: 768px) 240px, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/teknisi9.jpg"
                    alt="Teknisi Kang Service sedang servis AC di gedung"
                    fill
                    sizes="(min-width: 768px) 240px, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <Card className="inline-flex items-center rounded-2xl bg-primary text-white px-6 py-4">
                <div>
                  <p className="text-3xl font-bold leading-tight md:text-4xl">5+</p>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                    Years of Experience
                  </p>
                </div>
              </Card>
            </div>

            {/* Right: text and bullet points */}
            <div>
              <span className="mb-2 inline-block h-1 w-6 rounded-full bg-[#FF7A00]" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Kenali Kang Service, Mitra Service AC yang Selalu Siap Membantu.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Kang Service hadir untuk memberikan layanan perbaikan dan perawatan AC yang cepat,
                profesional, dan terpercaya. Kami memahami betapa pentingnya AC yang bekerja
                optimal untuk kenyamanan rumah maupun kantor Anda.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-foreground sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-[#FF7A00]" />
                    <span>
                      <span className="font-semibold">Layanan Ramah & Transparan</span>
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-[#FF7A00]" />
                    <span>
                      <span className="font-semibold">Hemat Waktu & Tenaga</span>
                    </span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-[#FF7A00]" />
                    <span>
                      <span className="font-semibold">Hasil Profesional & Tahan Lama</span>
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-[#FF7A00]" />
                    <span>
                      <span className="font-semibold">Ketenangan Pikiran Sepenuhnya</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="mb-2 inline-block h-1 w-6 rounded-full bg-[#FF7A00]" />
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Temukan Solusi Perbaikan AC Terbaik untuk Ruangan Anda
              </h2>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#FF7A00] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ff8a1f]"
            >
              Hubungi Sekarang
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                image: '/teknisi1.jpg',
                icon: <Wrench className="h-5 w-5" />,
                title: 'Pemasangan & Perakitan AC',
                description: 'Memastikan unit terpasang dengan tepat dan aman.',
              },
              {
                image: '/teknisi7.jpg',
                icon: <Wind className="h-5 w-5" />,
                title: 'Perbaikan & Pembersihan Saluran AC',
                description: 'Menjaga aliran udara tetap lancar dan sejuk.',
              },
              {
                image: '/teknisi6.jpg',
                icon: <Clock className="h-5 w-5" />,
                title: 'Perawatan Berkala',
                description: 'Rutin dicek agar AC tetap awet dan hemat energi.',
              },
              {
                image: '/teknisi9.jpg',
                icon: <MapPin className="h-5 w-5" />,
                title: 'Perbaikan Ringan Rumah Terkait AC',
                description: 'Seperti dinding, penyangga, atau area sekitar AC.',
              },
              {
                image: '/teknisi5.jpg',
                icon: <Phone className="h-5 w-5" />,
                title: 'Kelistrikan AC',
                description: 'Memastikan instalasi aman dan sesuai standar.',
              },
              {
                image: '/teknisi10.jpg',
                icon: (
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                ),
                title: 'Mudah & Cepat',
                description: 'Pemesanan praktis via telepon, WhatsApp, atau website.',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="flex h-full flex-col overflow-hidden border-none bg-[#003064] text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute -bottom-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-lg bg-[#FF7A00] text-white shadow-md">
                    {item.icon}
                  </div>
                </div>
                <CardContent className="flex flex-1 flex-col gap-2 px-6 pb-6 pt-8">
                  <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                  <p className="text-xs text-white/80 md:text-sm">{item.description}</p>
                  <button className="mt-3 inline-flex w-max text-xs font-semibold text-[#FF7A00] hover:underline">
                    Read More
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Cara Kerja Kami
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Kami Perbaiki AC Anda, Hasilnya Sempurna!
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Di Kang Service, setiap layanan kami dirancang untuk membuat AC Anda kembali dingin,
              optimal, dan dikerjakan dengan langkah yang cepat, rapi, dan terpercaya.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Pemasangan & Perakitan AC',
                description:
                  'Teknisi kami menangani pemasangan dan perakitan AC dengan presisi agar unit terpasang sempurna.',
                image: '/teknisi8.jpg',
              },
              {
                step: '02',
                title: 'Pembersihan & Perbaikan Saluran AC',
                description:
                  'Kami membersihkan dan memperbaiki saluran AC secara menyeluruh agar aliran udara tetap sejuk.',
                image: '/teknisi7.jpg',
              },
              {
                step: '03',
                title: 'Perbaikan Dinding Ruangan',
                description:
                  'Selain AC, area pemasangan kami rapikan kembali agar tampilan ruangan tetap estetik.',
                image: '/teknisi1.jpg',
              },
              {
                step: '04',
                title: 'Perbaikan Kerangka & Penyangga AC',
                description:
                  'Jika unit AC goyah atau penyangga tidak stabil, teknisi kami memperbaikinya hingga aman dan kokoh.',
                image: '/teknisi9.jpg',
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="flex h-full flex-col overflow-hidden border-none bg-transparent text-foreground"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 260px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {item.step}
                  </div>
                </div>
                <CardContent className="flex flex-1 flex-col items-center gap-2 px-0 pt-6 text-center">
                  <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                  <p className="text-xs text-muted-foreground md:text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Daftar Harga
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Harga Jelas, Tanpa Biaya Tersembunyi
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Berikut kisaran harga layanan kami. Untuk bangunan gedung, pabrik, apartemen, dan
              kantor akan ada penyesuaian biaya tambahan.
            </p>
          </div>
          {/* Highlighted price cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Cuci AC Reguler',
                price: 'Mulai Rp75.000',
                items: ['Cuci AC 0.5 – 1 PK', 'Pembersihan indoor & outdoor', 'Pengecekan fungsi dasar'],
                accent: 'bg-[#FF7A00]',
              },
              {
                title: 'Perawatan Lengkap',
                price: 'Mulai Rp250.000',
                items: ['Cuci AC + Vakum', 'Cek kebocoran freon', 'Pengecekan kelistrikan dasar'],
                accent: 'bg-primary',
              },
              {
                title: 'Instalasi & Bongkar Pasang',
                price: 'Mulai Rp350.000',
                items: ['Pasang AC baru', 'Bongkar pasang unit lama', 'Penataan pipa & kabel rapi'],
                accent: 'bg-[#0AA5FF]',
              },
            ].map((card) => (
              <Card
                key={card.title}
                className="flex h-full flex-col overflow-hidden border-none bg-white shadow-sm"
              >
                <div className={`h-2 w-full ${card.accent}`} />
                <CardContent className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-base font-semibold text-foreground md:text-lg">{card.title}</h3>
                  <p className="text-sm font-bold text-primary">{card.price}</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground md:text-sm">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF7A00]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full price table */}
          <div className="mt-10 overflow-hidden rounded-xl border border-border/70 bg-white">
            <div className="max-h-[460px] overflow-auto text-sm">
              <table className="min-w-full border-collapse">
                <thead className="bg-muted/70 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 sm:px-6">No</th>
                    <th className="px-4 py-3 sm:px-6">Layanan</th>
                    <th className="px-4 py-3 text-right sm:px-6">Harga Per Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70">
                  {[
                    ['1', 'Cuci AC 0.5 – 1 PK', 'Rp75.000'],
                    ['2', 'Cuci AC 1.5 – 2 PK', 'Rp85.000'],
                    ['3', 'Cuci AC Inverter 0.5 – 2 PK', 'Rp135.000'],
                    ['4', 'Tambah Freon 0.5 – 1 PK', 'Rp275.000'],
                    ['5', 'Tambah Freon 1.5 – 2 PK', 'Rp375.000'],
                    ['6', 'Isi Freon 0.5 – 1 PK', 'Rp375.000'],
                    ['7', 'Isi Freon 1.5 – 2 PK', 'Rp475.000'],
                    ['8', 'Vakum AC 0.5 – 1 PK', 'Rp250.000'],
                    ['9', 'Vakum AC 1.5 – 2 PK', 'Rp300.000'],
                    ['10', 'Cuci Besar / Overhaul 0.5 – 1 PK', 'Rp475.000'],
                    ['11', 'Cuci Besar / Overhaul 1.5 – 2 PK', 'Rp575.000'],
                    ['12', 'Pasang AC 0.5 – 1 PK', 'Rp350.000'],
                    ['13', 'Pasang AC 1.5 – 2 PK', 'Rp450.000'],
                    ['14', 'Bongkar Pasang AC 0.5 – 1 PK', 'Rp450.000'],
                    ['15', 'Bongkar Pasang AC 1.5 – 2 PK', 'Rp550.000'],
                    ['16', 'Pengecekan AC (survey)', 'Rp65.000'],
                  ].map(([no, name, price]) => (
                    <tr key={no} className="hover:bg-muted/60">
                      <td className="px-4 py-3 text-xs text-muted-foreground sm:px-6">{no}</td>
                      <td className="px-4 py-3 text-xs font-medium text-foreground sm:px-6 sm:text-sm">
                        {name}
                      </td>
                      <td className="px-4 py-3 text-right text-xs font-semibold text-primary sm:px-6 sm:text-sm">
                        {price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-border/70 bg-muted/40 px-4 py-4 text-xs text-muted-foreground sm:px-6 sm:text-sm">
              <p>
                Untuk jenis bangunan gedung, pabrik, apartemen, dan kantor akan dikenakan biaya
                tambahan sekitar <span className="font-semibold text-foreground">Rp20.000</span> per
                unit. Jika terjadi pembatalan setelah teknisi tiba di lokasi, akan dikenakan biaya
                kunjungan <span className="font-semibold text-foreground">Rp50.000</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Merk yang Kami Tangani
            </p>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Kang Service berpengalaman menangani berbagai merk AC ternama.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { src: '/panasonik-removebg-preview.png', alt: 'Panasonic' },
              { src: '/lg-removebg-preview.png', alt: 'LG' },
              { src: '/midea-removebg-preview.png', alt: 'Midea' },
              { src: '/daikin-removebg-preview.png', alt: 'Daikin' },
              { src: '/changhong-removebg-preview.png', alt: 'Changhong' },
              { src: '/sharp-removebg-preview.png', alt: 'Sharp' },
            ].map((brand) => (
              <div key={brand.src} className="relative h-10 w-24 md:h-12 md:w-28">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Testimoni Pelanggan
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Pelanggan Puas, AC Kembali Dingin
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              Berikut beberapa ulasan dari pelanggan yang telah memakai jasa kami.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Andrian',
                role: 'Pemilik Rumah',
                text: 'Praktis dan jelas dari awal. Teknisi datang tepat waktu, hasilnya AC kembali dingin tanpa drama.',
                avatar: '/profil1.jpg',
              },
              {
                name: 'Bianca',
                role: 'Pengusaha',
                text: 'Timnya ramah dan rapi. Kantor jadi lebih nyaman, dan mereka jelaskan semua biaya dengan transparan.',
                avatar: '/profil2.jpg',
              },
              {
                name: 'Candra',
                role: 'Karyawan',
                text: 'Pelayanan cepat, AC kamar langsung adem lagi. Sangat membantu saat cuaca lagi panas-panasnya.',
                avatar: '/profil3.jpg',
              },
            ].map((t) => (
              <Card
                key={t.name}
                className="flex h-full flex-col rounded-2xl border border-border/60 bg-white shadow-sm"
              >
                <CardContent className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm italic text-muted-foreground">“{t.text}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow ring-2 ring-[#FF7A00]/70">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="bg-gradient-to-br from-primary to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-white">
          <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Hubungi Kami
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Siap Memperbaiki AC Anda?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
                Tim kami akan mengecek kondisi AC Anda secara profesional dan memberikan estimasi
                biaya yang jelas dan transparan. Jangan tunggu sampai AC benar-benar rusak.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-600 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain"
                  />
                  Chat WhatsApp Sekarang
                </a>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  <Phone size={22} />
                  Telepon Langsung
                </a>
              </div>
              <div className="mt-6 grid gap-4 text-sm text-white/85 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Alamat Workshop</p>
                    <p>
                      Jl. Kamboja I No.4c, Kallongtala, Sungguminasa,
                      <br />
                      Kab. Gowa, Sulawesi Selatan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p>Setiap hari • 08.00 – 18.00 WITA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-white/10 shadow-xl backdrop-blur">
              <div className="h-64 w-full md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.897476936428!2d119.42099!3d-5.287847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe0b88b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sJl.%20Kamboja%20I%20No.4c%2C%20Kallongtala%2C%20Sungguminasa!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-4">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo Service AC Gowa - Kang Service"
                  width={130}
                  height={38}
                  className="h-8 w-auto drop-shadow-sm brightness-110"
                />
              </div>
              <p className="max-w-md text-sm text-white/80">
                Kang Service adalah spesialis service, perawatan, dan pemasangan AC untuk rumah dan
                kantor di wilayah Gowa dan sekitarnya. Cepat, rapi, dan bergaransi.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Kontak
              </h3>
              <p className="text-sm text-white/80">
                Telepon / WA:{' '}
                <a href={`tel:+${phoneNumber}`} className="font-semibold hover:underline">
                  +62 812-4082-9156
                </a>
              </p>
              <p className="text-sm text-white/80">Buka setiap hari • 08.00 – 18.00 WITA</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Area Layanan
              </h3>
              <p className="text-sm text-white/80">
                Gowa, Makassar, dan area sekitar yang masih terjangkau dari workshop kami.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-white/60 md:flex-row">
            <p>© {new Date().getFullYear()} Service AC Gowa - Kang Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
