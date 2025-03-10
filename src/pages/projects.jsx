import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import XE from '@/images/project/xe.jpg'
import Orebl from '@/images/project/orebl.png'
import Primadios from '@/images/project/primadios.png'
import BookShop from '@/images/project/bookshop.png'
import DNK from '@/images/project/alwataniacandle.png'
import Arab from '@/images/project/arab.png'

const projects = [
  {
    name: 'Xe Alkhalej',
    description:
      'Design and development of the Exi website for recruitment and rental packages, a pioneer in home services in Saudi Arabia.',
    link: { href: 'https://xealkhalej.sa', label: 'xealkhalej.sa' },
    logo: XE,
  },
  {
    name: 'BookShop Online',
    description:
      'An online bookstore offering a wide range of titles with fast delivery and secure payment options.',
    link: { href: 'http://sahartyplasticsurgery.net', label: 'sahartyplasticsurgery.net' },
    logo: BookShop,
  },
  {
    name: 'Orebl E-Commerce',
    description:
      'A cutting-edge e-commerce platform designed to enhance online shopping experiences with AI-driven recommendations.',
    link: { href: 'https://orebishopping.reactbd.com', label: 'orebishopping.reactbd.com' },
    logo: Orebl,
  },
  {
    name: 'Primadios Fitness',
    description:
      'A fitness and wellness app providing personalized workout plans, meal tracking, and expert coaching.',
    link: { href: 'https://primedios.com', label: 'primedios.com' },
    logo: Primadios,
  },
  {
    name: 'Arab News Portal',
    description:
      'A modern news website delivering up-to-date regional and international news in Arabic,a pioneer in home services in  Egypt  ',
    link: { href: 'https://arab-italian.com', label: 'arab-italian.com' },
    logo: Arab,
  },
  {
    name: 'Alwatania Candle',
    description:
      'An E-Commerce software company specializing in automation,A cutting-edge e-commerce platform designed to enhance online.',
    link: { href: 'https://alwataniacandle.com', label: 'alwataniacandle.com' },
    logo: DNK,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - KARIM AKL</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
      // title="Things I’ve made trying to put my dent in the universe."
      // intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}
            >
              <div className="relative overflow-hidden z-10 flex h-40 w-full items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-full p-1 rounded-xl w-full object-cover"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  target='_block'
                  href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
