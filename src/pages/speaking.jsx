import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - KARIM AKL</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <SpeakingSection title="Television Appearance">
            <Appearance
              href="https://www.facebook.com/share/v/12DacAgnsJ2/"
              title="Television Interview on MehwartvChannel"
              description="I participated in an inspiring live TV interview on the 'Yom Saeed' program, where I discussed my journey and experience as one of the distinguished 2024 graduates of the Digital Egypt Builders Initiative. Together, we highlighted the tremendous impact of these national programs in shaping the future of technology-driven professionals in Egypt."
              event="MehwartvChannel - Yom Saeed"
              cta="Watch Video"
            />
          </SpeakingSection>
          <SpeakingSection title="Conference">
            <Appearance
              href="https://www.linkedin.com/posts/kareimakl_aepaesaevaeuaezaerabraeiaeyaezabraepaesaecaezaehaeyaer-activity-7298093046678614017-uVy7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPI2u0BcO2Etbe1eVgvB6IQgMBlOJg6j2k"
              title="Representing DEPI at the Illegal Migration Conference"
              description="Honored to be invited by the Digital Egypt Pioneers Initiative (DEPI) of the Ministry of Communications and Information Technology (MCIT), Egypt to represent our initiative at the illegal migration conference organized by IOM Egypt."
              event="IOM Egypt Conference"
              cta="View Post in LinkedIn"
            />
            <Appearance
              href="#"
              title="Empowering Youth & Creating Safe Pathways"
              description="Discussing the state's efforts to guide young people, provide alternative opportunities, and promote secure migration routes through innovative initiatives like Digital Egypt Generations (DEG)."
              event="Hilton Ramses Cairo Hotel"
              // cta="Watch Session"
            />
            <Appearance
              href="#!"
              title="A Future Shaped by Digital Transformation"
              description="Exploring how initiatives such as these empower youth, foster digital transformation, and prepare them for competitive roles in technology and beyond."
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
