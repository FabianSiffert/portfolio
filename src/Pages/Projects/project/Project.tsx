import React from 'react'
import styles from './Project.module.scss'
import Section from '../../../ui/components/Section'
import ExternalLink from '../../../ui/components/ExternalLink'
import type { Project } from '../projectCatalogue'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const tintStyle = { '--tint': `var(--${project.color})` } as React.CSSProperties
  return (
    <Section title={project.title}>
      <div className={styles.project} style={tintStyle}>
        <div className={styles.description}>
          {project.description.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.links}>
          {project.links.map((link) => (
            <ExternalLink key={link.url} href={link.url}>
              {link.title}
            </ExternalLink>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProjectCard
