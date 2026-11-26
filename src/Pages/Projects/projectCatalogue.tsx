import type { ReactNode } from 'react'
import ExternalLink from '../../ui/components/ExternalLink'
import { ColorVariant } from './project/colorVariant'

interface ProjectLink {
  title: string
  url: string
}

export interface Project {
  title: string
  description: ReactNode[]
  links: ProjectLink[]
  color: ColorVariant
}

export const projectCatalogue: Project[] = [
  {
    title: 'inv',
    description: [
      'A work-in-progress™ (read: very rough, and likely never to be finished), mobile-first website that originally began as a portfolio redesign. Over time, it evolved into a Pokémon Trading Card Game platform to help me sell my childhood collection at fair prices.'
    ],
    links: [
      { title: 'Link', url: 'https://inv.siffert.io' },
      { title: 'Github', url: 'https://github.com/FabianSiffert/inv' }
    ],
    color: ColorVariant.elementBlue
  },
  {
    title: 'docker-hud',
    description: [
      'A hud for the docker containers running on my local server',
      <>
        Built with a{' '}
        <ExternalLink href='https://shop.pimoroni.com/products/badger-2040?srsltid=AfmBOoqCMb0tOkZMvyGG12VLJ3naDkMUR3sO43zKV-8ED-8Im-PhuvR2'>
          Badger 2040
        </ExternalLink>{' '}
        in mind. It displays a randomly selected logo each day when everything is fine and a warning screen when a docker container is down.
        Also contains an overview screen of the health of my server and one for the containers. The Buttons are mapped to refresh, view
        switching and restarting docker containers.
      </>,
      'Vibecoded in Python.'
    ],
    links: [{ title: 'Github', url: 'https://github.com/FabianSiffert/docker-hud' }],
    color: ColorVariant.elementPink
  },
  {
    title: 'DIY Electronics & Home Assistant',
    description: [
      'Learning electronics hands-on — multimeter, soldering iron, cheap ESP32-S3 boards — by building things that plug into my Home Assistant setup. Everything runs on ESPHome, which turns a microcontroller into a native Home Assistant device from a few lines of YAML.',
      <>
        <b>Sunrise Alarm</b> — an alarm clock that wakes me with light instead of noise. Currently pulls time, temperature and the alarm
        state from Home Assistant. Next: driving the lamp and leaving the breadboard behind.
      </>,
      <>
        <b>Grundig Micro-Boy 300</b> — a shortwave pocket radio from the analogue era, brought back to life. The original electronics work
        again, the corroded battery holder is gone, and it now runs off my own power module.
      </>,
      <>
        But no German station broadcasts on shortwave anymore, so the receiver has nothing left to receive. It gets a second job instead: a
        Home Assistant voice satellite for switching the lights, with a NeoPixel behind the dial to signal <i>I'm listening</i>.
      </>
    ],
    links: [
      { title: 'ESPHome', url: 'https://esphome.io' },
      { title: 'Github', url: 'https://github.com/FabianSiffert/esphome-devices' }
    ],
    color: ColorVariant.elementLavender
  },
  {
    title: 'plant-care-ha',
    description: [
      "I'm busy setting up my Home Assistant nicely right now, and my plants are the first to benefit.",
      "A tiny Home Assistant plant calendar that keeps me from killing (or forgetting) them. One tap logs watering, fertilizing or pest spraying, and a single status icon tells me what's next: green when they're happy, orange when something's due, red when I'm late. Watering and fertilizing intervals are adjustable right from the UI.",
      <>
        Built with YAML and Jinja templates, plus <ExternalLink href='https://github.com/piitaya/lovelace-mushroom'>Mushroom</ExternalLink>{' '}
        cards for the dashboard.
      </>
    ],
    links: [{ title: 'Github', url: 'https://github.com/FabianSiffert/plant-care-ha' }],
    color: ColorVariant.elementGreen
  },
  {
    title: 'Inventory',
    description: [
      'A simple, Android-only investment tracker.',
      <>
        This is the project I'm currently working on, built using best practices recommended by Google's{' '}
        <ExternalLink href='https://github.com/android/nowinandroid'>NowInAndroid</ExternalLink> and informed by my professional experience.
      </>,
      "As of May 2025, it runs on a local database, which I plan to replace in the future. The project hasn't been deployed yet, as it's still a work in progress."
    ],
    links: [{ title: 'Github', url: 'https://github.com/FabianSiffert/inventory' }],
    color: ColorVariant.elementRose
  },
  {
    title: 'siffert.io 1.0',
    description: [
      'This is the first of two personal portfolios I’ve created.',
      'Built during my apprenticeship, it reflects my early exploration of web development with a focus on simplicity.'
    ],
    links: [
      { title: 'Link', url: 'https://old.siffert.io' },
      { title: 'Github', url: 'https://github.com/FabianSiffert/siffertio' }
    ],
    color: ColorVariant.elementPistachio
  },
  {
    title: 'siffert.io 2.0',
    description: ['This is my current portfolio—more minimalistic in design and built with responsiveness in mind.'],
    links: [
      { title: 'Link', url: 'https://siffert.io' },
      { title: 'Github', url: 'https://github.com/FabianSiffert/portfolio' }
    ],
    color: ColorVariant.elementPeach
  }
]
