import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Award,
  ArrowRight,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Facebook,
  Flame,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  Quote,
  Star,
  Tent,
  Users,
  Utensils,
  Wine,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroGirl from "@/assets/andjelagaco.jpg";
import chef from "@/assets/chef.jpg";
import fries from "@/assets/fries.jpg";
import chicken from "@/assets/chicken.jpg";
import menu1 from "@/assets/menu-1.jpg";
import menu2 from "@/assets/menu-2.jpg";
import menu3 from "@/assets/menu-3.jpg";
import feast1 from "@/assets/feast-1.jpg";
import heroWP from "@/assets/web-garden2_1920px2.jpg";
import feast2 from "@/assets/feast-2.jpg";
import feast3 from "@/assets/feast-3.jpg";
import statsPerson from "@/assets/stats-person.jpg";
import contactImg from "@/assets/kontaktslika.webp";
import testi1 from "@/assets/testi-1.jpg";
import testi2 from "@/assets/testi-2.jpg";
import logo from "@/assets/logo.jpg";
import paprika from "@/assets/sliced-paprika.png";
import veg1 from "@/assets/001-1.png";
import veg2 from "@/assets/004-1.png";
import veg3 from "@/assets/005.png";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  localeLabels,
  menuCategoryKeys,
  type Locale,
  type MenuCategoryKey,
} from "@/lib/i18n/translations";

const PHONE = "+38766319953";
const PHONE_DISPLAY = "+387 (0)66 319 953";
const ADDRESS = "Rogoušići bb, Pale";
const EMAIL = "restorangarden@yahoo.com";
const INSTAGRAM = "https://www.instagram.com/restaurantgarden2018/";
const FACEBOOK = "https://www.facebook.com/restaurantgarden2018";

const categoryImages: Record<MenuCategoryKey, string> = {
  breakfast: menu1,
  coldStarters: menu2,
  hotStarters: menu3,
  buckwheatPizza: feast1,
  soups: feast2,
  pasta: feast3,
  salads: chef,
  poultry: chicken,
  vealPork: fries,
  grill: menu1,
  fish: menu2,
  desserts: menu3,
};

const newGalleryModules = import.meta.glob<{ default: string }>('@/assets/galerija-nova/*.{JPG,jpg,jpeg,png}', { eager: true });
const galleryImages = Object.values(newGalleryModules).map(mod => ({
  src: mod.default,
  alt: "Restoran Garden — galerija"
}));

const wineWorkshopModules = import.meta.glob<{ default: string }>('@/assets/vinska-radionica/*.{JPG,jpg,jpeg,png}', { eager: true });
const wineWorkshopImages = Object.values(wineWorkshopModules).map(m => m.default);


// raspored velicina kartica — ciklicno se ponavlja svakih 7 slika radi raznovrsnosti
const bentoPattern = [
  "col-span-2 row-span-2", // istaknuta
  "col-span-1 row-span-1",
  "col-span-1 row-span-2", // visoka
  "col-span-1 row-span-1",
  "col-span-2 row-span-1", // siroka
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restoran Garden - Tamo gdje su ukusi, tamo smo mi" },
      {
        name: "description",
        content:
          "Autentičan restoran u Rogoušićima, 13 km od Sarajeva. Tradicionalna kuhinja iz krušne peći, bašta, dječije igralište i veliki parking.",
      },
      { property: "og:title", content: "Restoran Garden — Tamo gdje su ukusi, tamo smo mi" },
      {
        property: "og:description",
        content:
          "Autentičan restoran u Rogoušićima, 13 km od Sarajeva. Tradicionalna kuhinja iz krušne peći, bašta, dječije igralište i veliki parking.",
      },
    ],
  }),
  component: IndexPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const locales = Object.keys(localeLabels) as Locale[];

  return (
    <div className="flex items-center gap-1 rounded-full bg-cream/10 p-1">
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            locale === code ? "bg-sunshine text-ink" : "text-cream/80 hover:text-cream"
          }`}
          aria-label={localeLabels[code]}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.menu, id: "menu" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full bg-forest/85 backdrop-blur-md px-5 py-3 text-cream border border-white/10 shadow-lg shadow-forest-deep/20">
        <a href="#home" className="flex items-center gap-2 font-display text-xl shrink-0">
          <span className="grid place-items-center size-8 rounded-full bg-sunshine text-ink">
            <img src={logo} alt="" className="w-full h-full rounded-full" />
          </span>
          Restoran Garden
        </a>
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-sunshine transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-sunshine text-ink px-4 py-2 text-sm font-semibold hover:bg-leaf transition-colors whitespace-nowrap"
          >
            {t.nav.cta}
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <Menu className="size-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl bg-forest text-cream p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-sunshine text-ink px-4 py-2 text-center font-semibold"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative bg-forest text-cream overflow-hidden bg-cover bg-center pb-60"
    >
      <img src={heroWP} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="w-full h-full absolute z-5 bg-linear-to-t from-cream  to-transparent" />

      <div className="relative z-10">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[30%] size-16 rounded-full bg-orange-zest hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[12%] top-[20%] size-24 rounded-full bg-sunshine/40 blur-sm hidden md:block"
        />

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-end gap-8 h-full relative">
          <motion.div style={{ y: yText }} className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-display text-forest mt-5 text-[clamp(1rem,6vw,4.5rem)]"
            >
              {t.hero.titleLine1}{" "}
              <span className="italic text-sunshine">{t.hero.titleHighlight}</span>
              {t.hero.titleLine2 && (
                <>
                  <br />
                  <span className="relative inline-block">
                    {t.hero.titleLine2}
                    <svg
                      viewBox="0 0 200 20"
                      className="absolute -bottom-3 left-0 w-full h-3 text-orange-zest"
                      fill="none"
                    >
                      <path
                        d="M2 14 Q 50 2 100 10 T 198 8"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-md text-forest/80 text-lg"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-sunshine text-ink px-6 py-3.5 font-semibold hover:bg-leaf transition-colors"
              >
                {t.hero.ctaContact}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-forest/20 text-forest px-6 py-3.5 font-medium hover:bg-forest/5 transition-colors"
              >
                {t.hero.ctaMenu}
              </a>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yImg }} className="relative h-[500px] lg:h-[620px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 flex justify-center items-end"
            >
              <img
                src={heroGirl}
                alt="Restoran Garden"
                width={896}
                height={1152}
                className="h-full w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 -right-2 md:right-4 bg-cream text-ink rounded-2xl p-3 shadow-xl"
            >
              <div className="flex items-center gap-1 text-orange-zest">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs mt-1 font-medium">{t.hero.rating}</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-24 -left-4 md:-left-8 bg-cream text-ink rounded-2xl p-3 shadow-xl max-w-[160px]"
            >
              <div className="flex items-center gap-2 text-sunshine">
                <Award className="size-5 fill-current" />
                <GraduationCap className="size-5" />
              </div>
              <p className="text-xs mt-1 font-semibold">{t.hero.awardsAndEducation}</p>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 left-0 w-full text-cream"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,80 C360,140 1080,0 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}

function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.p {...fadeUp} className="text-script text-3xl text-orange-zest">
          {t.about.label}
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="text-display text-[clamp(2.25rem,5vw,4rem)] mt-2 text-forest"
        >
          {t.about.title}
        </motion.h2>
        <motion.p {...fadeUp} className="max-w-screen-xl mx-auto mt-6 text-muted-foreground">
          {t.about.p1}
          <br />
          <br />
          {t.about.p2}
        </motion.p>

        <div className="grid grid-cols-3 gap-3 md:gap-6 mt-14 items-end">
          <motion.img
            {...fadeUp}
            src={fries}
            alt=""
            loading="lazy"
            className="aspect-square w-full object-cover rounded-3xl shadow-lg"
          />
          <motion.img
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            src={chef}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full object-cover rounded-3xl shadow-2xl -translate-y-6"
          />
          <motion.img
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            src={chicken}
            alt=""
            loading="lazy"
            className="aspect-square w-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function Banner() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream text-cream py-20 md:py-28 relative overflow-hidden">
      <ChefHat className="absolute left-[8%] top-1/2 -translate-y-1/2 size-20 opacity-30 -rotate-12 hidden md:block" />
      <Utensils className="absolute right-[10%] top-[20%] size-14 opacity-30 rotate-12 hidden md:block" />
      <Coffee className="absolute right-[6%] bottom-[18%] size-16 opacity-30 hidden md:block" />

      <motion.h2
        {...fadeUp}
        className="text-display text-center text-forest text-[clamp(2.5rem,7vw,5.5rem)] max-w-5xl mx-auto px-4"
      >
        {t.banner.line1} <span className="italic">{t.banner.passion}</span>,<br />
        {t.banner.line2} <span className="text-sunshine">{t.banner.love}</span>
      </motion.h2>
    </section>
  );
}

function MenuSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<MenuCategoryKey>(menuCategoryKeys[0]);
  const activeCategory = t.menu.categories[active];

  return (
    <section id="menu" className="bg-forest text-cream py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.p {...fadeUp} className="text-script text-3xl text-sunshine text-center">
          {t.menu.label}
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="text-display text-center text-[clamp(2.25rem,5vw,4rem)] mt-2"
        >
          {t.menu.title}
        </motion.h2>
        <motion.p {...fadeUp} className="text-center text-cream/70 mt-4 text-sm">
          {t.menu.hint}
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {menuCategoryKeys.map((key, i) => {
            const cat = t.menu.categories[key];
            const isActive = active === key;
            return (
              <motion.button
                key={key}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setActive(key)}
                className={`text-left rounded-3xl overflow-hidden border transition-all ${
                  isActive
                    ? "border-sunshine ring-2 ring-sunshine/40 scale-[1.02]"
                    : "border-cream/10 hover:border-cream/30"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={categoryImages[key]}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-4 font-display text-lg">
                    {cat.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 max-w-3xl mx-auto rounded-3xl bg-cream/10 border border-cream/15 p-8 text-center"
        >
          <h3 className="font-display text-2xl text-sunshine">{activeCategory.title}</h3>
          <p className="mt-3 text-cream/85 leading-relaxed">{activeCategory.desc}</p>
        </motion.div>
      </div>
    </section>
  );
}



function FeaturesTabs() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"playground" | "wineWorkshop" | "fireplaceRoom" | "events">("playground");
  const f = t.features;

  const tabs = [
    { id: "playground" as const, label: f.tabs.playground, icon: Tent },
    { id: "wineWorkshop" as const, label: f.tabs.wineWorkshop, icon: Wine },
    { id: "fireplaceRoom" as const, label: f.tabs.fireplaceRoom, icon: Flame },
    { id: "events" as const, label: f.tabs.events, icon: Users },
  ];

  const activeData = f[activeTab];

  // Pick images based on active tab
  const tabImages =
    activeTab === "wineWorkshop"
      ? wineWorkshopImages
      : galleryImages.slice(activeTab === "playground" ? 0 : activeTab === "fireplaceRoom" ? 6 : 12, 
          activeTab === "playground" ? 6 : activeTab === "fireplaceRoom" ? 12 : 18).map(img => img.src);

  const heroImage = tabImages[0];
  const gridImages = tabImages.slice(1, 5);

  return (
    <section id="features" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-forest/3 to-white/0 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.p {...fadeUp} className="text-script text-3xl text-orange-zest text-center">
          {f.label}
        </motion.p>
        <motion.h2 {...fadeUp} className="text-display text-center text-[clamp(2.25rem,5vw,4rem)] mt-2 text-forest">
          {f.title}
        </motion.h2>

        {/* Tab buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  isActive
                    ? "bg-forest text-cream border-forest shadow-lg scale-105"
                    : "bg-white text-forest/70 border-forest/15 hover:border-forest/40 hover:bg-forest/5"
                }`}
              >
                <Icon className="size-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          {/* Left: Text content */}
          <div className="space-y-5 lg:sticky lg:top-32">
            {/* Hero image for this tab */}
            {heroImage && (
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <h3 className="text-display text-2xl md:text-3xl text-forest mt-6">{activeData.title}</h3>
            <p className="text-base md:text-lg text-forest/75 leading-relaxed">{activeData.desc}</p>

            {/* Video placeholder for events */}
            {activeTab === "events" && (
              <div className="relative aspect-video bg-forest/8 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-dashed border-forest/25 mt-4">
                <div className="text-center space-y-2">
                  <PlayCircle className="size-14 text-forest/35 mx-auto" />
                  <p className="text-forest/50 font-medium text-sm">{f.events.videoLabel}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Image gallery grid */}
          <div className="grid grid-cols-2 gap-3">
            {gridImages.length > 0 ? gridImages.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl shadow-md ${idx === 0 ? "col-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                    idx === 0 ? "h-56" : "h-40"
                  }`}
                />
              </div>
            )) : (
              // Placeholder if no images yet
              Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl bg-forest/8 border-2 border-dashed border-forest/20 flex items-center justify-center ${
                    idx === 0 ? "col-span-2 h-56" : "h-40"
                  }`}
                >
                  <p className="text-forest/30 text-sm font-medium">Galerija</p>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



function GalleryLightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { t } = useLanguage();
  const image = galleryImages[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 size-11 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors"
        aria-label={t.gallery.close}
      >
        <X className="size-5" />
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors"
        aria-label={t.gallery.prev}
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20 transition-colors"
        aria-label={t.gallery.next}
      >
        <ChevronRight className="size-6" />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
      />
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        {index + 1} / {galleryImages.length}
      </p>
    </div>
  );
}

function GallerySection() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const nextLightbox = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section id="gallery" className="bg-cream">
      <div className="relative h-[55vh] min-h-[350px] max-h-[600px] overflow-hidden">
      <img src={galleryImages[0]?.src} alt="" className="absolute top-0 w-full h-full object-cover md:object-[25%_25%]" />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-cream px-4">
          <motion.p {...fadeUp} className="text-script text-3xl text-sunshine">
            {t.gallery.label}
          </motion.p>
          <motion.h2 {...fadeUp} className="text-display text-[clamp(2.25rem,5vw,4rem)] mt-2">
            {t.gallery.title}
          </motion.h2>
          <motion.p {...fadeUp} className="max-w-xl mt-4 text-cream/85">
            {t.gallery.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[150px] md:auto-rows-[160px] gap-3 md:gap-4 grid-flow-dense">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 12) * 0.04 }}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-md ${bentoPattern[i % bentoPattern.length]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors flex items-center justify-center">
                <ZoomIn className="size-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  );
}

function Stats() {
  const { t } = useLanguage();
  const stats = t.stats.items;
  const colors = [
    "bg-sunshine text-ink",
    "bg-orange-zest text-cream",
    "bg-cream text-forest",
  ];
  const rotations = ["-rotate-6", "rotate-3", "-rotate-3"];

  return (
    <section className="bg-forest text-cream py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          {...fadeUp}
          className="text-display text-[clamp(2.25rem,5vw,4rem)] whitespace-pre-line"
        >
          {t.stats.title}
        </motion.h2>
        <motion.p {...fadeUp} className="max-w-xl mx-auto mt-4 text-cream/70">
          {t.stats.subtitle}
        </motion.p>

        <div className="relative mt-16 h-[420px] md:h-[500px]">
          <img
            src={statsPerson}
            alt=""
            loading="lazy"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-64 md:size-80 object-cover rounded-full shadow-2xl border-4 border-cream"
          />
          {stats.map((s, i) => {
            const positions = [
              "left-[5%] top-[10%]",
              "right-[5%] top-[20%]",
              "left-1/2 -translate-x-1/2 bottom-0",
            ];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05 }}
                className={`absolute ${positions[i]} ${colors[i]} ${rotations[i]} size-36 md:size-40 grid place-items-center rounded-[40%_60%_50%_50%/60%_40%_60%_40%] shadow-2xl px-3`}
              >
                <div>
                  <p className="text-display text-3xl md:text-4xl">{s.value}</p>
                  <p className="text-xs md:text-sm font-medium mt-1">{s.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const [idx, setIdx] = useState(0);
  const item = testimonials[idx];

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.p {...fadeUp} className="text-script text-3xl text-orange-zest">
          {t.testimonials.label}
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="text-display text-forest text-[clamp(2.25rem,5vw,4rem)] mt-2"
        >
          {t.testimonials.title}
        </motion.h2>

        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid md:grid-cols-3 gap-6 items-center"
        >
          <img
            src={testi1}
            alt=""
            loading="lazy"
            className="hidden md:block aspect-[4/5] rounded-3xl object-cover w-full shadow-lg"
          />
          <div className="bg-forest text-cream rounded-3xl p-8 md:p-10 text-left relative">
            <Quote className="absolute -top-4 -left-2 size-10 text-sunshine" />
            <p className="font-display text-xl md:text-2xl leading-snug">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-1 mt-4 text-sunshine">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 font-semibold">{item.name}</p>
            <p className="text-sm text-cream/70">{item.role}</p>
          </div>
          <img
            src={testi2}
            alt=""
            loading="lazy"
            className="hidden md:block aspect-[4/5] rounded-3xl object-cover w-full shadow-lg"
          />
        </motion.div>

        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            type="button"
            onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
            className="size-11 rounded-full bg-forest text-cream grid place-items-center hover:bg-orange-zest transition-colors"
            aria-label={t.gallery.prev}
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-forest" : "w-2 bg-forest/30"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIdx((idx + 1) % testimonials.length)}
            className="size-11 rounded-full bg-forest text-cream grid place-items-center hover:bg-orange-zest transition-colors"
            aria-label={t.gallery.next}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative grid lg:grid-cols-2 rounded-[2rem] overflow-hidden bg-forest text-cream shadow-2xl">
          <div className="relative h-80 lg:h-auto min-h-[320px]">
            <img
              src={contactImg}
              alt="Restoran Garden"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/50 via-transparent to-forest/30" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-script text-2xl text-sunshine">{t.contact.label}</p>
            <h2 className="text-display text-[clamp(2.25rem,5vw,3.5rem)] mt-1">{t.contact.title}</h2>
            <p className="mt-3 text-cream/80 text-sm max-w-md">{t.contact.subtitle}</p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-sunshine mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{t.contact.phone}</p>
                  <a href={`tel:${PHONE}`} className="text-cream/85 hover:text-sunshine transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-sunshine mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{t.contact.address}</p>
                  <p className="text-cream/85">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-sunshine mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{t.contact.email}</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-cream/85 hover:text-sunshine transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="size-5 text-sunshine mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{t.contact.instagram}</p>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/85 hover:text-sunshine transition-colors"
                  >
                    @restaurantgarden2018
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-sunshine mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{t.contact.hoursTitle}</p>
                  <p className="text-cream/85">{t.contact.hoursWeek}</p>
                  <p className="text-cream/70">{t.contact.hoursMonday}</p>
                </div>
              </div>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sunshine text-ink px-6 py-3.5 font-semibold hover:bg-leaf transition-colors"
            >
              <Phone className="size-4" />
              {t.contact.callUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-cream pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-script text-2xl text-orange-zest">{t.footer.label}</p>
          <h2 className="text-display text-forest text-[clamp(2rem,5vw,3.5rem)] mt-1 whitespace-pre-line">
            {t.footer.title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-sm">
          <div className="flex items-start gap-3">
            <Clock className="size-5 text-orange-zest mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-forest">{t.footer.hours}</p>
              <p className="text-muted-foreground">{t.contact.hoursWeek}</p>
              <p className="text-muted-foreground">{t.contact.hoursMonday}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-forest">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-10 grid place-items-center rounded-full border border-forest/20 hover:bg-forest hover:text-cream transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-10 grid place-items-center rounded-full border border-forest/20 hover:bg-forest hover:text-cream transition-colors"
            >
              <Facebook className="size-4" />
            </a>
          </div>
          <div className="flex items-start gap-3 md:justify-end">
            <MapPin className="size-5 text-orange-zest mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-forest">{t.footer.visit}</p>
              <p className="text-muted-foreground">{ADDRESS}</p>
              <p className="text-muted-foreground flex items-center gap-1.5">
                <Phone className="size-3.5" /> {PHONE_DISPLAY}
              </p>
              <p className="text-muted-foreground flex items-center gap-1.5">
                <Mail className="size-3.5" /> {EMAIL}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="grid place-items-center size-14 rounded-full bg-forest text-sunshine overflow-hidden">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </span>
          <span className="text-display text-forest text-[clamp(2rem,8vw,5rem)] leading-none">
            Restoran Garden
          </span>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

function IndexContent() {
  return (
    <main className="bg-cream text-ink overflow-x-hidden relative">

      {/* Scattered Vegetables */}
      <motion.img
        src={paprika}
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] size-16 md:size-24 object-contain opacity-60 z-0 drop-shadow-md"
        alt=""
      />
      <motion.img
        src={veg1}
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[8%] size-20 md:size-32 object-contain opacity-50 z-0 drop-shadow-md"
        alt=""
      />
      <motion.img
        src={veg2}
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[60%] left-[10%] size-24 md:size-36 object-contain opacity-40 z-0 drop-shadow-md"
        alt=""
      />
      <motion.img
        src={veg3}
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[30%] right-[15%] size-16 md:size-24 object-contain opacity-60 z-0 drop-shadow-md"
        alt=""
      />

      <Nav />
      <Hero />
      <BrandStory />
      <Banner />
      <MenuSection />
      <FeaturesTabs />
      <GallerySection />
      <Stats />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}

function IndexPage() {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
}
