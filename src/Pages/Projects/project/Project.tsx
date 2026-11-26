import React, { JSX } from 'react'
import styles from './Project.module.scss'
import Section from '../../../ui/components/Section'
import ExternalLink from '../../../ui/components/ExternalLink'
import { ColorVariant } from './colorVariant'

interface ProjectLink {
  title: string
  url: string
}

interface ProjectSectionProps {
  projectTitle: string
  projectDescription: string | JSX.Element
  links: ProjectLink[]
  backgroundColor?: ColorVariant
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  projectTitle,
  projectDescription,
  links,
  backgroundColor = ColorVariant.elementBlue
}) => {
  const tintStyle = { '--tint': `var(--${backgroundColor})` } as React.CSSProperties
  return (
    <Section title={projectTitle}>
      <div className={styles.project} style={tintStyle}>
        <div className={styles.description}>
          {typeof projectDescription === 'string'
            ? projectDescription.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : projectDescription}
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <ExternalLink key={link.url} href={link.url}>
              {link.title}
            </ExternalLink>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProjectSection
