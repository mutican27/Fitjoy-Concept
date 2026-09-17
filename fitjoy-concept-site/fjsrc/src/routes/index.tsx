import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const fitjoyLogo = "/images/fitjoy-logo.png";
const heroAerial = "/images/hero-pool-aerial.png";
const poolIndoor = "/images/pool-indoor.png";
const gymCardio = "/images/gym-cardio.png";
const pilatesReformer = "/images/pilates-reformer.png";
const saunaImg = "/images/sauna.png";
const hamamImg = "/images/hamam.png";
const restaurantCafeImg = "/images/restaurant-cafe.png";
const personalTrainingImg = "/images/personal-training.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fitjoy Concept | Defne Hatay Fitness, Havuz & Pilates" },
      {
        name: "description",
        content:
          "Hatay Defne'de yarı olimpik yüzme havuzu, fitness parkuru, reformer pilates, personal training, sauna, hamam ve restorant & café. Fitjoy Concept ile sağlıklı yaşama adım atın.",
      },
      {
        property: "og:title",
        content: "Fitjoy Concept | Defne Hatay Spor ve Yaşam Merkezi",
      },
      {
        property: "og:description",
        content:
          "Yüzme havuzu, fitness, reformer pilates, personal training, sauna, hamam ve restorant & café tek çatı altında. Bostancık / Defne, Hatay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "905064414545";
const WHATSAPP_TEXT = encodeURIComponent(
  "Merhaba, Fitjoy Concept tesisiniz ve üyelik paketleriniz hakkında bilgi almak istiyorum",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fitjoy+Concept+Bostanc%C4%B1k+Defne+Hatay";

const QR_MENU_URL = "https://www.fitjoyqrmenu.com/menu";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase shadow-glow transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] " +
        className
      }
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

const NAV_LINKS = [
  { href: "#tesisler", label: "Tesisler" },
  { href: "#paketler", label: "Paketler" },
  { href: "#iletisim", label: "İletişim" },
];

const FACILITIES = [
  {
    title: "Yüzme Havuzu",
    desc: "Yarı olimpik, hijyenik ve ferah yüzme alanı",
    img: poolIndoor,
    alt: "Fitjoy Concept yarı olimpik kapalı yüzme havuzu",
  },
  {
    title: "Gelişmiş Fitness Parkuru",
    desc: "Son teknoloji ağırlık ve kardiyo ekipmanları",
    img: gymCardio,
    alt: "Fitjoy Concept kardiyo ve ağırlık ekipmanları",
  },
  {
    title: "Reformer & Mat Pilates",
    desc: "Kişiye özel veya grup pilates dersleri",
    img: pilatesReformer,
    alt: "Fitjoy Concept reformer pilates stüdyosu",
  },
  {
    title: "Personal Training",
    desc: "Profesyonel antrenörler ile birebir gelişim takibi",
    img: personalTrainingImg,
    alt: "Personal antrenör eşliğinde birebir çalışma",
  },
  {
    title: "Sauna",
    desc: "Antrenman sonrası kasları gevşeten sıcak sauna",
    img: saunaImg,
    alt: "Fitjoy Concept ahşap sauna",
  },
  {
    title: "Hamam",
    desc: "Geleneksel taş hamam ile arınma ve dinlenme",
    img: hamamImg,
    alt: "Fitjoy Concept geleneksel hamam",
  },
  {
    title: "Restorant & Café",
    desc: "Sağlıklı menü, ferah teras — QR menüyle sipariş",
    img: restaurantCafeImg,
    alt: "Fitjoy Concept havuz manzaralı restorant ve café terası",
    link: { href: QR_MENU_URL, label: "QR Menü'yü Aç" },
  },
];

const PACKAGES = [
  {
    name: "Fitness Üyeliği",
    desc: "Ağırlık ve kardiyo parkuruna sınırsız erişim.",
    features: [
      "Sınırsız fitness alanı erişimi",
      "Son teknoloji kardiyo & ağırlık ekipmanları",
      "Yeni üyelere oryantasyon programı",
      "Soyunma & duş alanları",
    ],
    featured: false,
  },
  {
    name: "Havuz & Fitness",
    desc: "Yüzme ve fitness bir arada, en çok tercih edilen.",
    features: [
      "Fitness Üyeliği'nin tüm hakları",
      "Sınırsız yarı olimpik havuz erişimi",
      "Hijyenik ve ferah yüzme alanı",
      "Özel derslerde indirim avantajı",
    ],
    featured: false,
  },
  {
    name: "Full VIP Paket",
    desc: "Tesisin tamamı, sınırları olmayan deneyim.",
    features: [
      "Tesisin tamamına sınırsız erişim",
      "Reformer & mat pilates grup dersleri",
      "Aylık personal training seansları",
      "Öncelikli rezervasyon hakkı",
    ],
    featured: true,
  },
];

const MARQUEE_ITEMS = [
  "Yüzme Havuzu",
  "Fitness",
  "Reformer Pilates",
  "Personal Training",
  "Sauna & Hamam",
  "Restorant & Café",
  "Defne / Hatay",
];

function MarqueeBand() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 text-sm font-bold tracking-[0.25em] text-muted-foreground uppercase"
              >
                {item}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header
        className={
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300 " +
          (scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent")
        }
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center" aria-label="Fitjoy Concept">
            <img
              src={fitjoyLogo}
              alt="Fitjoy Concept logosu"
              className="h-9 w-auto sm:h-10"
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-wide text-primary-foreground uppercase transition-transform duration-200 hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Bilgi Al</span>
            <span className="sm:hidden">Kayıt</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroAerial}
          alt="Fitjoy Concept tesislerinin havadan görünümü"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-40 sm:px-6">
          <img
            src={fitjoyLogo}
            alt="Fitjoy Concept logosu"
            className="reveal mb-6 h-20 w-auto sm:h-28"
          />
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-primary uppercase backdrop-blur">
            Defne / Hatay
          </span>
          <h1 className="reveal mt-6 max-w-4xl text-4xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            Hatay'ın En Kapsamlı Spor ve Yaşam Merkezi:{" "}
            <span className="text-primary">Fitjoy Concept</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
            Yüzme Havuzu, Fitness, Reformer Pilates ve Özel Grup Dersleri ile
            Sağlıklı Yaşama Adım Atın.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center gap-4" style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
            <WhatsAppButton label="WhatsApp'tan Bilgi & Kayıt Al" />
            <a
              href="#tesisler"
              className="text-sm font-bold tracking-wide text-foreground uppercase underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary"
            >
              Tesisleri Keşfet
            </a>
          </div>
        </div>
        <div className="animate-float-y absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <MarqueeBand />

      {/* Facilities */}
      <section id="tesisler" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
            Tesislerimiz
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Tek Çatı Altında{" "}
            <span className="text-primary">Her Şey</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f, i) => (
            <article
              key={f.title}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1.5"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                {f.link && (
                  <a
                    href={f.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-primary underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {f.link.label} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="paketler" className="border-t border-border bg-card/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Üyelik & Paketler
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Kendine Uygun <span className="text-primary">Programı</span> Seç
            </h2>
            <p className="mt-4 text-muted-foreground">
              Güncel fiyatlar ve kampanyalar için bize WhatsApp'tan ulaşın, sana
              en uygun paketi birlikte belirleyelim.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <article
                key={p.name}
                className={
                  "reveal relative flex flex-col rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1.5 " +
                  (p.featured
                    ? "border-primary bg-card shadow-glow"
                    : "border-border bg-card shadow-card")
                }
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[11px] font-black tracking-[0.2em] text-primary-foreground uppercase">
                    En Popüler
                  </span>
                )}
                <h3 className="text-xl font-extrabold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {p.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      >
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide uppercase transition-transform duration-200 hover:scale-[1.02] " +
                    (p.featured
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "border border-input bg-transparent text-foreground hover:border-primary hover:text-primary")
                  }
                >
                  WhatsApp'tan Fiyat Al
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="iletisim" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
            Konum & İletişim
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Seni Bekliyoruz
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-sm font-bold tracking-[0.25em] text-primary uppercase">Konum</h3>
            <p className="mt-4 text-lg font-extrabold">Fitjoy Concept</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Bostancık Mahallesi
              <br />
              Defne / Hatay
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-bold text-primary underline decoration-2 underline-offset-4 hover:opacity-80"
            >
              Yol Tarifi Al →
            </a>
          </div>
          <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-card" style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
            <h3 className="text-sm font-bold tracking-[0.25em] text-primary uppercase">
              Çalışma Saatleri
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <dt className="font-bold">Haftanın 7 Günü</dt>
                <dd className="text-muted-foreground">07:00 – 22:30</dd>
              </div>
            </dl>
          </div>
          <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-card" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            <h3 className="text-sm font-bold tracking-[0.25em] text-primary uppercase">
              Hemen Başla
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Üyelik, ders programları ve güncel kampanyalar için tek mesajla
              bize ulaşın.
            </p>
            <WhatsAppButton label="WhatsApp'tan Yaz" className="mt-6 w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <img
            src={fitjoyLogo}
            alt="Fitjoy Concept logosu"
            className="h-10 w-auto"
          />
          <p className="text-xs text-muted-foreground">
            Bostancık / Defne, Hatay — Spor ve Yaşam Merkezi
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan iletişime geç"
        className="animate-pulse-ring fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform duration-200 hover:scale-110 sm:right-8 sm:bottom-8"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
