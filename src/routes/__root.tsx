import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = "https://restoran-garden.com";
const OG_IMAGE = `${SITE_URL}/garden-og.jpg`;

const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${SITE_URL}/#restaurant`,
      name: "Restoran Garden",
      alternateName: "Restaurant Garden Pale",
      url: SITE_URL,
      image: OG_IMAGE,

      description:
        "Restoran Garden u Rogoušićima kod Pala nudi domaću i tradicionalnu kuhinju, prijatan prirodni ambijent, veliki parking i prostor za porodična i poslovna okupljanja.",

      telephone: "+38766319953",
      email: "restorangarden@yahoo.com",

      priceRange: "$$",

      servesCuisine: [
        "Tradicionalna kuhinja",
        "Domaća kuhinja",
        "Bosanska kuhinja",
        "Balkanska kuhinja",
        "Mediteranska kuhinja",
        "Italijanska kuhinja",
      ],

      acceptsReservations: true,

      address: {
        "@type": "PostalAddress",
        streetAddress: "Rogoušići bb",
        addressLocality: "Pale",
        postalCode: "71420",
        addressRegion: "Republika Srpska",
        addressCountry: "BA",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.872175,
        longitude: 18.558461,
      },

      areaServed: [
        {
          "@type": "City",
          name: "Pale",
        },
        {
          "@type": "Place",
          name: "Jahorina",
        },
        {
          "@type": "City",
          name: "Sarajevo",
        },
        {
          "@type": "City",
          name: "Istočno Sarajevo",
        },
      ],

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
            "https://schema.org/Sunday",
          ],
          opens: "09:00",
          closes: "22:00",
        },
      ],

      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Wi-Fi",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Dječije igralište",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Vanjska terasa",
          value: true,
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Restoran Garden",
      alternateName: "Garden Pale",
      inLanguage: "bs-BA",
      publisher: {
        "@id": `${SITE_URL}/#restaurant`,
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Stranica nije pronađena
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Stranica koju tražite ne postoji ili je premještena.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Početna stranica
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Došlo je do greške
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Stranica se trenutno ne može učitati. Pokušajte ponovo ili se vratite
          na početnu stranicu.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Pokušaj ponovo
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Početna
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      // =========================================================
      // PRIMARY SEO
      // =========================================================

      {
        title:
          "Restoran Garden Pale | Domaća hrana, Rogoušići i Jahorina",
      },

      {
        name: "description",
        content:
          "Restoran Garden u Rogoušićima kod Pala. Uživajte u domaćoj i tradicionalnoj kuhinji, prirodnom ambijentu i gostoprimstvu nadomak Pala, Sarajeva i Jahorine.",
      },

      {
        name: "author",
        content: "Restoran Garden",
      },

      {
        name: "application-name",
        content: "Restoran Garden",
      },

      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        name: "googlebot",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        name: "theme-color",
        content: "#ffffff",
      },

      // =========================================================
      // OPEN GRAPH / FACEBOOK / VIBER / WHATSAPP
      // =========================================================

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:site_name",
        content: "Restoran Garden",
      },

      {
        property: "og:title",
        content:
          "Restoran Garden Pale | Tradicionalna domaća kuhinja",
      },

      {
        property: "og:description",
        content:
          "Doživite domaću i tradicionalnu kuhinju Restorana Garden u Rogoušićima kod Pala, nadomak Sarajeva i Jahorine.",
      },

      {
        property: "og:url",
        content: SITE_URL,
      },

      {
        property: "og:image",
        content: OG_IMAGE,
      },

      {
        property: "og:image:width",
        content: "1200",
      },

      {
        property: "og:image:height",
        content: "630",
      },

      {
        property: "og:image:alt",
        content:
          "Restoran Garden Pale - tradicionalna domaća kuhinja i prirodni ambijent",
      },

      {
        property: "og:locale",
        content: "bs_BA",
      },

      // =========================================================
      // TWITTER / X
      // =========================================================

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content:
          "Restoran Garden Pale | Tradicionalna domaća kuhinja",
      },

      {
        name: "twitter:description",
        content:
          "Restoran Garden u Rogoušićima kod Pala - domaća kuhinja, prirodni ambijent i gostoprimstvo nadomak Sarajeva i Jahorine.",
      },

      {
        name: "twitter:image",
        content: OG_IMAGE,
      },
    ],

    links: [
      // =========================================================
      // CSS
      // =========================================================

      {
        rel: "stylesheet",
        href: appCss,
      },

      // =========================================================
      // FAVICONS
      // =========================================================

      {
        rel: "icon",
        href: "/favicon.ico",
      },

      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },

      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },

      // =========================================================
      // FONTS
      // =========================================================

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&family=Caveat:wght@500;700&display=swap",
      },
    ],

    // =========================================================
    // GOOGLE STRUCTURED DATA
    // =========================================================

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(restaurantStructuredData),
      },
    ],
  }),

  shellComponent: RootShell,

  component: RootComponent,

  notFoundComponent: NotFoundComponent,

  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="bs-BA">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}