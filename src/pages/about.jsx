import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsApp,
  YouTubeIcon,
  FacebookIcon,
  TikTokIcon,
  InstagramIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About KARIM AKL - Software Engineer, Full Stack Developer</title>
        <meta
          name="description"
          content="I’m Karim, a software engineer based in Egypt. I specialize in building modern web applications using React, Next.js, and Node.js, delivering high-performance solutions for various industries."
        />
      </Head>

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Karim Akl. I’m a software engineer passionate about building
              scalable web applications.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I specialize in full-stack development, working with modern
                frontend and backend technologies to create seamless and
                efficient user experiences. My expertise includes React.js,
                Next.js, Qwik, Svelte, and backend frameworks like Node.js,
                Express.js, and NestJS.
              </p>
              <p>
                I thrive in collaborative environments, where brainstorming
                ideas and open communication lead to innovative solutions. My
                work spans UI/UX design, backend logic, and database management,
                ensuring every project meets high-performance standards.
              </p>
              <p>
                Outside of coding, I enjoy traveling, maintaining a healthy
                lifestyle, and advocating for financial independence. My goal is
                to empower individuals through technology and knowledge sharing.
              </p>
              <p>
                {`Let’s connect! Visit my website at  `}
                <a
                  href=" https://karimakl.com "
                  className="text-blue-500 hover:underline"
                >
                  https://karimakl.com
                </a>
                {` or reach out via email at  `}
                <a
                  href="mailto:karimakl.com"
                  className="text-blue-500 hover:underline"
                >
                  info@karimakl.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.youtube.com/@Kariemakl"
                icon={YouTubeIcon}
                className="mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Youtube Channel
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/kareimakl"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                className="mt-4"
                href="https://www.facebook.com/kareimakl"
                icon={FacebookIcon}
              >
                Follow on Facebook Page
              </SocialLink>
              <SocialLink
                href="https://x.com/kareimakl"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/kareimakl"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/kareimakl"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.tiktok.com/@kareimakl"
                icon={TikTokIcon}
                className="mt-4"
              >
                Follow on Tiktok
              </SocialLink>

              <SocialLink
                href="https://api.whatsapp.com/send/?phone=201558820103&text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%20%D9%83%D8%B1%D9%8A%D9%85%20%D8%B9%D9%82%D9%84%20%20%D8%A3%D8%B1%D8%B3%D9%84%20%D9%87%D8%B0%D9%87%20%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%20%D9%85%D9%86%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9%20%D8%A7%D9%84%D8%B0%D9%8A%20%D8%B2%D9%8F%D8%B1%D8%AA%D9%87%7Bkarim.akl-bs.com%7D.%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85.%20%D8%A3%D8%AA%D9%85%D9%86%D9%89%20%D8%A3%D9%86%20%D8%A3%D8%AA%D9%85%D9%83%D9%86%20%D9%85%D9%86%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A3%D9%88%20%D8%A7%D9%84%D8%AA%D9%88%D8%AC%D9%8A%D9%87%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A8.%20%D8%B4%D9%83%D8%B1%D9%8B%D8%A7%20%D9%84%D9%83%D9%85!&type=phone_number&app_absent=0"
                icon={WhatsApp}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Contact WhatsApp
              </SocialLink>
              <SocialLink
                href="mailto:info@karimakl.com"
                icon={MailIcon}
                className="mt-4"
              >
                info@karimakl.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
