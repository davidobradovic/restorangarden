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
  Quote,
  Star,
  Tent,
  Users,
  Utensils,
  Wine,
  X,
  ZoomIn,
  Leaf,
  Trophy,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroGirl from "@/assets/andjelagaco.jpg";
import aboutImg1 from "@/assets/galerija-nova/specijalitet4.JPG";
import aboutImg2 from "@/assets/galerija/1.jpg";
import aboutImg3 from "@/assets/galerija-nova/biftek.JPG";
import imgDorucak from "@/assets/galerija-nova/dorucak.JPG";
import imgMeze from "@/assets/galerija-nova/meze.JPG";
import imgUstipci from "@/assets/galerija-nova/ustipci.JPG";
import imgPizza from "@/assets/galerija-nova/slatka-pita.JPG";
import imgSupa from "@/assets/galerija-nova/slano.JPG";
import imgPasta from "@/assets/galerija-nova/pasta.JPG";
import imgSalata from "@/assets/galerija-nova/biftek2.JPG";
import imgPiletina from "@/assets/galerija-nova/specijalitet.JPG";
import imgTeletina from "@/assets/galerija-nova/biftek3.JPG";
import imgRostilj from "@/assets/galerija-nova/specijaliteti.JPG";
import imgRiba from "@/assets/galerija-nova/riba.JPG";
import imgPoslastice from "@/assets/galerija-nova/kolaci.JPG";
import heroWP from "@/assets/web-garden2_1920px2.jpg";
import statsImage from "@/assets/galerija/MG_3661_prcsd_srgb.jpg";
import contactImg from "@/assets/kontaktslika.webp";
import testi1 from "@/assets/galerija/MG_3729_prcsd_srgb.jpg";
import testi2 from "@/assets/galerija-nova/kafe.JPG";
import logo from "@/assets/logo-garden.png";
import videoLjeto from "@/assets/videi/ljetougardenu.MP4";
import videoPorodicni from "@/assets/videi/porodicnivikend.MP4";
import videoSpecijaliteti from "@/assets/videi/specijaliteti.MP4";
import videoVinska from "@/assets/videi/vinskaradionica.MP4";
import paprika from "@/assets/sliced-paprika.png";
import veg1 from "@/assets/001-1.png";
import veg2 from "@/assets/004-1.png";
import veg3 from "@/assets/005.png";
import certifikat from "@/assets/galerija-nova/certifikat.JPG";
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
  breakfast: imgDorucak,
  coldStarters: imgMeze,
  hotStarters: imgUstipci,
  buckwheatPizza: imgPizza,
  soups: imgSupa,
  pasta: imgPasta,
  salads: imgSalata,
  poultry: imgPiletina,
  vealPork: imgTeletina,
  grill: imgRostilj,
  fish: imgRiba,
  desserts: imgPoslastice,
};

const galleryModules = import.meta.glob<{ default: string }>(
  "@/assets/galerija/*.{jpg,JPG,jpeg,png}",
  { eager: true },
);
const galleryImages = Object.values(galleryModules).map((mod) => ({
  src: mod.default,
  alt: "Restoran Garden — galerija",
}));

const siteVideos = [
  { src: videoLjeto, key: "summer" as const },
  { src: videoPorodicni, key: "family" as const },
  { src: videoSpecijaliteti, key: "specialties" as const },
  { src: videoVinska, key: "wine" as const },
];

const tabVideoMap = {
  playground: videoPorodicni,
  wineWorkshop: videoVinska,
  fireplaceRoom: videoLjeto,
  events: videoSpecijaliteti,
} as const;

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

function VideoPlayer({ src, poster, label }: { src: string; poster?: string; label?: string }) {
  return (
    <div className="relative aspect-auto rounded-2xl overflow-hidden shadow-xl bg-forest/10 border border-forest/10">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}

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

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-black/10
        bg-white
        shadow-sm
        lg:border-white/10
        lg:bg-forest
      "
    >
      <nav
        className="
          mx-auto flex min-h-[72px]
          w-full max-w-7xl
          items-center justify-between
          gap-4 px-4
          sm:px-6 lg:px-8
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Restoran Garden"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Restoran Garden"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        {/* Desktop navigacija */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="
                  text-sm font-medium text-cream
                  transition-colors duration-200
                  hover:text-sunshine
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop opcije */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <a
            href="#contact"
            className="
              inline-flex items-center justify-center
              whitespace-nowrap rounded-full
              bg-sunshine px-5 py-2.5
              text-sm font-semibold text-ink
              transition-colors
              hover:bg-leaf
            "
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile dugme */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="
            grid size-11 place-items-center
            rounded-full text-forest
            transition-colors
            hover:bg-forest/10
            lg:hidden
          "
        >
          <Menu className="size-6" />
        </button>
      </nav>

      {/* Mobile meni */}
      <div
        className={`
          overflow-hidden bg-white
          transition-[max-height,opacity]
          duration-300 ease-in-out
          lg:hidden

          ${
            open
              ? "max-h-[520px] border-t border-black/10 opacity-100"
              : "max-h-0 border-t border-transparent opacity-0"
          }
        `}
      >
        <div
          className="
            mx-auto flex max-w-7xl
            flex-col px-4 py-4
            sm:px-6
          "
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="
                border-b border-black/5
                px-1 py-3
                font-medium text-forest
                transition-colors
                hover:text-leaf
              "
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                inline-flex flex-1
                items-center justify-center
                rounded-full bg-sunshine
                px-4 py-3
                font-semibold text-ink
                transition-colors
                hover:bg-leaf
              "
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

type ProduceItem = {
  src: string;
  left: string;
  top: string;
  width: string;
  rotation: number;
  delay: number;
  duration: number;
  hideOnMobile?: boolean;
};

const heroProduce: ProduceItem[] = [
  {
    src: paprika,
    left: "16%",
    top: "5%",
    width: "clamp(42px, 5.5vw, 115px)",
    rotation: -8,
    delay: 0.15,
    duration: 4.8,
  },
  {
    src: veg1,
    left: "39%",
    top: "3%",
    width: "clamp(42px, 5vw, 110px)",
    rotation: -6,
    delay: 0.48,
    duration: 5.4,
    hideOnMobile: true,
  },
  {
    src: veg2,
    left: "80%",
    top: "6%",
    width: "clamp(46px, 6vw, 125px)",
    rotation: 12,
    delay: 0.3,
    duration: 5,
  },
  {
    src: veg3,
    left: "7%",
    top: "27%",
    width: "clamp(40px, 4.5vw, 95px)",
    rotation: -6,
    delay: 0.43,
    duration: 5.2,
    hideOnMobile: true,
  },
  {
    src: paprika,
    left: "87%",
    top: "30%",
    width: "clamp(52px, 7vw, 145px)",
    rotation: 16,
    delay: 0.25,
    duration: 4.6,
  },
  {
    src: veg1,
    left: "85%",
    top: "62%",
    width: "clamp(48px, 6.5vw, 135px)",
    rotation: 8,
    delay: 0.4,
    duration: 5.5,
    hideOnMobile: true,
  },
  {
    src: veg2,
    left: "9%",
    top: "72%",
    width: "clamp(52px, 7vw, 145px)",
    rotation: -12,
    delay: 0.54,
    duration: 5.1,
  },
  {
    src: veg3,
    left: "28%",
    top: "85%",
    width: "clamp(40px, 5vw, 105px)",
    rotation: 6,
    delay: 0.6,
    duration: 4.9,
    hideOnMobile: true,
  },
  {
    src: paprika,
    left: "62%",
    top: "86%",
    width: "clamp(40px, 5vw, 105px)",
    rotation: -12,
    delay: 0.35,
    duration: 5.3,
  },
];

const awards = [
  {
    icon: Award,
    title: "Najbolji restoran",
    subtitle: "2023",
    iconClassName: "text-sunshine",
  },
  {
    icon: Trophy,
    title: "Kulinarna znamenitost",
    subtitle: "2022",
    iconClassName: "text-orange-zest",
  },
  {
    icon: GraduationCap,
    title: "Certificiran kuvar",
    subtitle: "Le Cordon Bleu",
    iconClassName: "text-sunshine",
  },
  {
    icon: Leaf,
    title: "Ekološka sertifikacija",
    subtitle: "2024",
    iconClassName: "text-leaf",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const storyRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [45, -35]);
  const yImage = useTransform(scrollYProgress, [0, 1], [70, -25]);

  return (
    <>
      {/* HERO: ista struktura kao poslani HTML */}
      <section id="home" className="relative w-full overflow-hidden bg-cream">
  <div
    className="
      relative mx-auto w-full max-w-[2200px] overflow-hidden
      h-auto aspect-video
    "
  >
    <img
      src={heroWP}
      alt="Restoran Garden - tamo gdje su ukusi, tamo smo mi"
      width={2200}
      height={1007}
      loading="eager"
      fetchPriority="high"
      draggable={false}
      className="
        absolute inset-0
        aspect-video w-full
        object-cover
        object-[50%_48%]
      "
    />

    {heroProduce.map((item, index) => (
      <motion.div
        key={`${item.src}-${index}`}
        aria-hidden="true"
        initial={{
          opacity: 0,
          y: -18,
          scale: 0.88,
          rotate: item.rotation,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: item.rotation,
        }}
        transition={{
          duration: 0.7,
          delay: item.delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`pointer-events-none absolute z-10 select-none ${
          item.hideOnMobile ? "hidden sm:block" : "block"
        }`}
        style={{
          left: item.left,
          top: item.top,
          width: item.width,
        }}
      >
        <motion.img
          src={item.src}
          alt=""
          loading="lazy"
          draggable={false}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-auto w-full drop-shadow-[0_10px_16px_rgba(20,36,26,0.22)]"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* NOVA SEKCIJA: tekst, žena, rating, certifikat i nagrade */}
      <section
        ref={storyRef}
        id="garden-intro"
        className="relative overflow-hidden bg-cream text-forest"
      >
        {/* Pozadinski dekorativni elementi */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-24 size-[420px] rounded-full bg-forest/[0.05] blur-2xl" />
          <div className="absolute -right-32 bottom-40 size-[380px] rounded-full bg-sunshine/15 blur-3xl" />

          <motion.img
            src={veg3}
            alt=""
            animate={{ y: [0, -14, 0], rotate: [-10, -4, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[3%] top-[12%] hidden w-24 opacity-[0.15] lg:block xl:w-32"
          />

          <motion.img
            src={paprika}
            alt=""
            animate={{ y: [0, 12, 0], rotate: [12, 18, 12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[3%] top-[18%] hidden w-20 opacity-[0.15] lg:block xl:w-28"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* Tekst */}
            <motion.div
              style={{ y: yText }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              className="relative z-20 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="mb-5 inline-flex items-center gap-3 rounded-full border border-forest/10 bg-white/[0.65] px-4 py-2 shadow-sm backdrop-blur"
              >
                <span className="size-2 rounded-full bg-orange-zest" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest/70 sm:text-sm">
                  Restoran Garden
                </span>
              </motion.div>

              <h1 className="text-display text-[clamp(2.35rem,5vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.04em] text-forest">
                {t.hero.titleLine1}{" "}
                <span className="italic text-orange-zest">
                  {t.hero.titleHighlight}
                </span>

                {t.hero.titleLine2 && (
                  <>
                    <br />
                    <span className="relative inline-block">
                      {t.hero.titleLine2}
                      <svg
                        viewBox="0 0 220 22"
                        aria-hidden="true"
                        className="absolute -bottom-3 left-0 h-3 w-full text-sunshine"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M3 15 C55 2 110 20 217 8"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-forest/70 sm:text-lg">
                {t.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-cream shadow-[0_16px_35px_rgba(20,36,26,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-zest sm:w-auto"
                >
                  {t.hero.ctaContact}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#menu"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-forest/15 bg-white/50 px-7 py-3.5 font-semibold text-forest transition duration-300 hover:border-forest hover:bg-white sm:w-auto"
                >
                  {t.hero.ctaMenu}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-forest/10 pt-7">
                <div>
                  <p className="text-3xl font-bold text-forest">4.9</p>
                  <div className="mt-1 flex items-center gap-1 text-orange-zest">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="h-12 w-px bg-forest/10" />

                <p className="max-w-[220px] text-sm font-medium leading-6 text-forest/[0.65]">
                  {t.hero.rating}
                </p>
              </div>
            </motion.div>

            {/* Žena, certifikat i floating elementi */}
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.92, y: 45 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-1 mx-auto flex min-h-[430px] w-full max-w-[620px] items-end justify-center sm:min-h-[570px] lg:order-2 lg:min-h-[650px]"
            >
              <div className="absolute inset-x-[4%] bottom-[3%] top-[8%] overflow-hidden rounded-[2.5rem] bg-forest shadow-[0_35px_90px_rgba(20,36,26,0.2)] sm:rounded-[4rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,220,80,0.26),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%)]" />
                <div className="absolute -left-16 bottom-14 size-52 rounded-full border border-cream/10" />
                <div className="absolute -right-20 top-16 size-72 rounded-full border border-cream/10" />
              </div>

              <img
                src={heroGirl}
                alt="Restoran Garden"
                width={896}
                height={1152}
                loading="lazy"
                className="relative z-10 max-h-[420px] w-auto max-w-full object-contain drop-shadow-2xl sm:max-h-[560px] lg:max-h-[640px]"
              />

              <motion.div
                animate={{ y: [0, 11, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-[14%] z-20 rounded-2xl border border-white/50 bg-white/85 p-3 shadow-xl backdrop-blur-md sm:left-3 sm:p-4"
              >
                <div className="flex items-center gap-1 text-orange-zest">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-3.5 fill-current sm:size-4" />
                  ))}
                </div>
                <p className="mt-1.5 text-xs font-bold text-forest sm:text-sm">
                  {t.hero.rating}
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0], rotate: [-2, 1, -2] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute -bottom-3 right-0 z-20 rounded-[1.75rem] border border-white/60 bg-white/90 p-2.5 shadow-2xl backdrop-blur-md sm:right-2 sm:p-3"
              >
                <img
                  src={certifikat}
                  alt="Garden Restaurant Recommended"
                  loading="lazy"
                  className="h-auto w-24 object-contain sm:w-32 lg:w-36"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Nagrade */}
          <div className="mt-20 border-t border-forest/10 pt-10 md:mt-28 md:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-zest sm:text-sm">
                Kvalitet koji je prepoznat
              </p>
              <h2 className="mt-3 text-2xl font-bold text-forest sm:text-3xl">
                Certifikati i nagrade
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
              {awards.map((award, index) => {
                const Icon = award.icon;

                return (
                  <motion.article
                    key={award.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-forest/10 bg-white/[0.55] p-4 text-center shadow-[0_15px_40px_rgba(20,36,26,0.06)] backdrop-blur transition-colors duration-300 hover:bg-white sm:rounded-3xl sm:p-6"
                  >
                    <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-forest/[0.06] sm:size-14">
                      <Icon className={`size-5 sm:size-7 ${award.iconClassName}`} />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-forest sm:text-base">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-xs text-forest/[0.55] sm:text-sm">
                      {award.subtitle}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
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
            src={aboutImg1}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full object-cover rounded-3xl shadow-lg"
          />
          <motion.img
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            src={aboutImg2}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full object-cover rounded-3xl shadow-2xl -translate-y-6"
          />
          <motion.img
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            src={aboutImg3}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full object-cover rounded-3xl shadow-lg"
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

            <VideoPlayer
              src={tabVideoMap[activeTab]}
              poster={heroImage}
              label={t.videos.items[activeTab === "playground" ? "family" : activeTab === "wineWorkshop" ? "wine" : activeTab === "fireplaceRoom" ? "summer" : "specialties"]}
            />
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



function VideosSection() {
  const { t } = useLanguage();

  return (
    <section id="videos" className="bg-forest text-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.p {...fadeUp} className="text-script text-3xl text-sunshine text-center">
          {t.videos.label}
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="text-display text-center text-[clamp(2.25rem,5vw,4rem)] mt-2"
        >
          {t.videos.title}
        </motion.h2>
        <motion.p {...fadeUp} className="text-center text-cream/75 mt-4 max-w-2xl mx-auto">
          {t.videos.subtitle}
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {siteVideos.map(({ src, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <VideoPlayer src={src} label={t.videos.items[key]} />
            </motion.div>
          ))}
        </div>
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
            src={statsImage}
            alt="Restoran Garden"
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
          {...fadeUp}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-white border border-forest/10 px-5 py-2.5 shadow-sm"
        >
          <span className="grid place-items-center size-8 rounded-full bg-white shadow border border-forest/10 text-sm font-bold text-forest">
            G
          </span>
          <div className="text-left">
            <div className="flex items-center gap-1 text-orange-zest">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-semibold text-forest">{t.testimonials.googleRating}</p>
          </div>
        </motion.div>

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
          <span className="grid place-items-center text-sunshine overflow-hidden">
            <img src={logo} alt="" className="w-full h-10 object-cover" />
          </span>
          <span className="text-display text-forest text-[clamp(1rem,6vw,3rem)] leading-none">
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
      <VideosSection />
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
