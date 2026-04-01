import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How we work"
        title="A small team built for clarity, ownership, and execution."
        invert
      >
        <p>
          We partner closely with institutions that need more than a vendor.
          They need a team that can understand operational complexity and turn
          it into software that works in the real world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Clarity" invert>
            We break complex academic and operational workflows into systems
            that are easier to manage, measure, and improve over time.
          </GridListItem>
          <GridListItem title="Partnership" invert>
            We stay close to the people using the product so decisions are
            shaped by real institutional needs, not assumptions.
          </GridListItem>
          <GridListItem title="Execution" invert>
            Our work is practical by design, pairing product thinking with
            full-stack delivery so ideas move into production with confidence.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      { name: 'Nelson Perdomo', role: 'CEO' },
      { name: 'Sebastian Vargas', role: 'Project Manager' },
    ],
  },
  {
    title: 'Engineering',
    people: [
      { name: 'Juan Nárvaez', role: 'Full-stack developer' },
      { name: 'Julian Puyo', role: 'Full-stack developer' },
      { name: 'Laura Betancourt', role: 'Full-stack developer' },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        {/* <Border className="h-full rounded-3xl border border-neutral-200 px-6 py-8"> */}
                          <p className="font-display text-xl font-semibold text-neutral-950">
                            {person.name}
                          </p>
                          <p className="mt-3 text-base text-neutral-600">
                            {person.role}
                          </p>
                        {/* </Border> */}
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About us',
  description:
    'CPM Studio is a focused product and engineering team building operational software for schools, universities, and education teams.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="We build software around how institutions really operate.">
        <p>
          CPM Studio is a focused team designing and developing software for
          schools, universities, and education teams that need clarity in their
          day-to-day operations.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our work sits at the intersection of product thinking, operational
            design, and full-stack execution. We help organizations move beyond
            scattered spreadsheets, manual follow-up, and disconnected tools by
            building systems that support the people doing the work every day.
          </p>
          <p>
            We care about software that is useful, maintainable, and aligned
            with institutional reality. That means staying close to the problem,
            understanding the workflow behind it, and delivering products that
            create clarity for leadership, staff, and end users alike.
          </p>
        </div>
      </PageIntro>

      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label="Core team members" />
          <StatListItem value="3" label="Full-stack developers" />
          <StatListItem value="1" label="Project manager" />
          <StatListItem value="1" label="CEO" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      <ContactSection />
    </RootLayout>
  )
}
