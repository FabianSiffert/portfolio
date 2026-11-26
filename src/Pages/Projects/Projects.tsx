import styles from './Projects.module.scss'
import ProjectCard from './project/Project'
import { projectCatalogue } from './projectCatalogue'

export default function Projects() {
  return (
    <div className={styles.projects}>
      {projectCatalogue.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      <div className={styles.spacer} />
    </div>
  )
}
