import { ProjectCard, SectionTitle } from '@/shared/components'
import { SECTIONS_IDS } from '@/shared/data/constants'
import { useAllData } from '@/shared/hooks'

const Projects = () => {
  const { allData } = useAllData()
  return (
    <section
      id={SECTIONS_IDS.at(1)}
      className='flex flex-col gap-2 animate-fade-in animate-delay-300'
    >
      <SectionTitle title={allData.tabs.at(1)?.label} />
      <div className='flex flex-col gap-6'>
        {allData.me.PROJECTS?.map((project, index) => (
          <ProjectCard
            key={project.PREVIEW_HREF}
            project={project}
            invert={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
