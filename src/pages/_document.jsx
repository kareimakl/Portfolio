import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        {/* Dark mode script */}
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />

        {/* RSS Feeds */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />

        {/* Primary Meta Tags */}
        <title>
          KARIM AKL – Full Stack Software Engineer | React & Next.js & Node.js
          Expert
        </title>
        <meta
          name="description"
          content="Karim Akl is a full stack software engineer specializing in building modern, high-performance web applications using React, Next.js, and Node.js. Based in Egypt and working globally."
        />
        <meta
          name="keywords"
          content="Karim Akl, karimakl, Kareim Akl, Karim Aql, Kariem Akl, Karim, Akl, kareimakl, kareemakl, Kareem Akl, Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Expert, Web Applications, Frontend, Backend, karimakl.com"
        />
        <meta name="author" content="Karim Akl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karimakl.com/" />
        <meta
          property="og:title"
          content="KARIM AKL – Full Stack Software Engineer"
        />
        <meta
          property="og:description"
          content="I’m Karim Akl, a full stack developer based in Egypt. I create fast, scalable web applications using modern technologies like React and Node.js."
        />
        <meta
          property="og:image"
          content="https://karimakl.com/mesoc.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://karimakl.com/" />
        <meta
          name="twitter:title"
          content="KARIM AKL – Full Stack Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Modern full stack development with React, Next.js, and Node.js by Karim Akl."
        />
        <meta
          name="twitter:image"
          content="https://karimakl.com/mesoc.png"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Karim Akl',
              url: 'https://karimakl.com',
              image: 'https://karimakl.com/mesoc.png',
              jobTitle: 'Full Stack Software Engineer',
              description:
                'I build scalable apps with React, Next.js, and Node.js.',
              sameAs: [
                'https://www.youtube.com/@Kariemakl',
                'https://linkedin.com/in/kareimakl',
                'https://www.facebook.com/kareimakl',
                'https://x.com/kareimakl',
                'https://github.com/kareimakl',
                'https://www.instagram.com/kareimakl',
                'https://www.tiktok.com/@kareimakl',
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
