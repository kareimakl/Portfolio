import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import webDevelopmentIcon from '@/images/logos/airbnb.svg'
import mobileAppIcon from '@/images/logos/animaginary.svg'
import wordpressIcon from '@/images/logos/helio-stream.svg'
import designIcon from '@/images/logos/open-shuttle.svg'

const projects = [
  {
    name: 'Web Development',
    description:
      'High-quality development of websites at a professional level using modern technologies like React, Next.js, and Node.js.',
    link: { href: 'https://karimakl.netlify.app', label: 'karimakl.netlify.app' },
    logo: webDevelopmentIcon,
  },
  {
    name: 'WordPress Development',
    description:
      'Custom WordPress development, including theme customization, plugin development, and performance optimization.',
    link: { href: '#', label: 'Learn More' },
    logo: wordpressIcon,
  },
  {
    name: 'Mobile Development',
    description:
      'Professional development of mobile applications for iOS and Android using React Native.',
    link: { href: '#', label: 'View More' },
    logo: mobileAppIcon,
  },


  {
    name: 'Web Design',
    description:
      'Creating modern and high-quality web designs that ensure great user experience and aesthetics.',
    link: { href: '#', label: 'See Portfolio' },
    logo: designIcon,
  },
];


function work() {
  return (
    <div>
      <Head>
        <title>Projects - KARIM AKL</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href="#!">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {/* <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p> */}
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default work