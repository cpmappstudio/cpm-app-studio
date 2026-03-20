'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import cpcaTeachers from '@/images/screenshots/cpca-teachers.jpeg'
import alefUniversity from '@/images/screenshots/alef-university.jpeg'
import dismissalApp from '@/images/screenshots/dismissal-app.jpeg'
import cpcaSports from '@/images/screenshots/cpca-sports.jpeg'

const features = [
  {
    title: 'Alef University SRU',
    description:
      'Architecting centralized academic ecosystems to unify programs and student records, ensuring every user enjoys seamless access to grading analytics.',
    image: alefUniversity,
  },
  {
    title: 'CPCA Teachers',
    description:
      'Optimizing academic load distribution and faculty oversight, this module tracks real-time teaching progress and syllabus completion across every assigned section.',
    image: cpcaTeachers,
  },
  {
    title: 'CPCA Sports',
    description:
      'Deploying custom digital infrastructure that automates school enrollments and fee collection, allowing institutions to scale their impact without administrative overhead.',
    image: cpcaSports,
  },
  {
    title: 'Dismissal APP',
    description:
      'Leveraging real-time protocols for secure student release, our system coordinates end-of-day pickups to provide parents and staff with total peace of mind.',
    image: dismissalApp,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative isolate overflow-hidden bg-neutral-950 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_35%,transparent_65%)] fill-white/[0.02] stroke-white/10"
        yOffset={-96}
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Built for scale. <br/> Designed for education.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-neutral-300">
            Streamline your institutional operations with our suite of
            specialized solutions.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 transition lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white text-neutral-950 lg:bg-white/10 lg:text-white lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg data-selected:not-data-focus:outline-hidden',
                            selectedIndex === featureIndex
                              ? 'text-neutral-950 lg:text-white'
                              : 'text-neutral-300 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-neutral-400 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/5 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-neutral-200 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-180 overflow-hidden rounded-xl bg-neutral-100 shadow-2xl ring-1 shadow-black/30 ring-black/5 sm:w-auto lg:mt-0 lg:w-271.25">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
