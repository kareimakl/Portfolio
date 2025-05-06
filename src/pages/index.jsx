import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { BookFree15 } from '@/components/BookFree15'
import Work from '@/components/work'
import {
  WhatsApp,
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.png'
import khamsat from '@/images/logos/khamsat.jpeg'
import oncall from '@/images/logos/oncall_hq_logo.jpeg'
import moneyleek from '@/images/logos/moneyleek.jpeg'
import depi from '@/images/logos/depi.jpeg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="block">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Khamsat',
      title: `Full-Stack Web Developer - Mostaql`,
      logo: khamsat,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Money Leek',
      title: 'Frontend Developer - Full-time',
      logo: moneyleek,
      start: 'Jul 2024',
      end: 'Sep 2024',
    },
    {
      company:
        'DEPI of the Ministry of Communications and Information Technology',
      title: 'Mern Stack Developer - Internship',
      logo: depi,
      start: 'Apr 2024',
      end: 'Oct 2024',
    },
    {
      company: 'OnCall',
      title: 'Frontend Web Developer - Internship',
      logo: oncall,
      start: 'Jul 2024',
      end: 'Sep 2024',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-10 w-10" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        target="_block"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1o0nS6K795Ztu8BplgRxIwO0BYreyFTzq/view"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>KARIM AKL – Software Engineer | Full Stack Developer</title>
        <meta
          name="description"
          content="I’m Karim Akl, a software engineer based in Egypt. I build modern web apps with React, Next.js & Node.js, delivering high‑performance solutions."
        />
        <meta
          name="keywords"
          content="Karim Akl, Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Expert, Web Applications, Frontend, Backend, karimakl.com"
        />
        <meta name="author" content="Karim Akl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn */}
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
          content="https://karimakl.com/images/og-image.png"
        />

        {/* Twitter */}
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
          content="https://karimakl.com/images/og-image.png"
        />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full Stack Web Developer , WordPress Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {`
            Hi, I'm Karim Akl. I am a passionate Full Stack Web Developer with a love for building diverse and innovative products. My recent projects have involved developing web applications using ReactJS on the front end and Node.js on the back end. I thrive on learning new technologies and applying them to create cool products that bring new ideas to life in various fields. Skills: Front-End Technologies: ReactJS, Redux, JavaScript, Tailwind, Bootstrap Back-End Technologies: Node.js, Express.js Databases: SQL APIs: RESTful API, GraphQL Programming Concepts: Object-Oriented Programming (OOP), Data Structures, Algorithms`}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.youtube.com/@Kariemakl"
              icon={YouTubeIcon}
            ></SocialLink>
            <SocialLink
              href="https://api.whatsapp.com/send/?phone=201558820103&text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%20%D9%83%D8%B1%D9%8A%D9%85%20%D8%B9%D9%82%D9%84%20%20%D8%A3%D8%B1%D8%B3%D9%84%20%D9%87%D8%B0%D9%87%20%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%20%D9%85%D9%86%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9%20%D8%A7%D9%84%D8%B0%D9%8A%20%D8%B2%D9%8F%D8%B1%D8%AA%D9%87%7Bkarim.akl-bs.com%7D.%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85.%20%D8%A3%D8%AA%D9%85%D9%86%D9%89%20%D8%A3%D9%86%20%D8%A3%D8%AA%D9%85%D9%83%D9%86%20%D9%85%D9%86%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A3%D9%88%20%D8%A7%D9%84%D8%AA%D9%88%D8%AC%D9%8A%D9%87%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B3%D8%A8.%20%D8%B4%D9%83%D8%B1%D9%8B%D8%A7%20%D9%84%D9%83%D9%85!&type=phone_number&app_absent=0"
              aria-label="Follow on Instagram"
              icon={WhatsApp}
            />
            <SocialLink
              href="https://github.com/kareimakl"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/kareimakl"
              aria-label="Follow on LinkedIn"
              target="_blank"
              icon={LinkedInIcon}
            />
            {/* <SocialLink
              href="https://www.facebook.com/kareimakl"
              icon={FacebookIcon}
            >
            </SocialLink> */}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
            <Work />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <BookFree15 />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
