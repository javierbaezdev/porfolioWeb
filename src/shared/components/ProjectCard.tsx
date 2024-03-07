import { useState } from 'react'
import { Project } from '@/shared/types/me'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { IrregularButton } from './buttons'
import { Github, View360 } from '../icons'
import { openHref } from '../utils'
import { useAllData } from '../hooks'

interface Props {
  project: Project
  invert?: boolean
}

const ProjectCard = ({ project, invert }: Props) => {
  const [isHover, setIsHover] = useState(false)
  const { allData } = useAllData()
  return (
    <div
      className={twMerge(
        clsx('flex flex-col gap-2 md:gap-4', {
          'md:flex-row': !invert,
          'md:flex-row-reverse': invert,
        })
      )}
    >
      <div className='w-full md:w-1/2 relative'>
        <img
          className={twMerge(
            clsx(
              ' object-cover aspect-auto rounded-lg object-top max-h-[313px] animate-delay-300',
              {
                'animate-slide-in-left': !invert,
                'animate-slide-in-right': invert,
              }
            )
          )}
          loading='lazy'
          src={isHover && project.GIF ? project.GIF : project.IMAGE}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        {isHover && (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='animate-fade-in absolute bottom-0 flex flex-row gap-2 items-center font-bold bg-rock-800 dark:bg-bunker-800 text-rock-200 dark:text-bunker-50 p-2 bg-opacity-30 dark:bg-opacity-30 rounded-md w-full'
          >
            <img
              className='object-cover max-w-10 scale-75 border-1'
              src={project.ICON}
            />
            <h1 className='text-lg'>{project.TITLE}</h1>
          </div>
        )}
      </div>

      <div className='flex flex-col gap-2 w-full md:w-1/2'>
        <h1 className='text-xl text-rock-900 dark:text-bunker-50 text-center md:text-start'>
          {project.TITLE}
        </h1>
        <ul
          className={twMerge(
            clsx('flex flex-row gap-2 w-full px-2 flex-wrap justify-center', {
              'md:justify-end': !invert,
              ' md:justify-start': invert,
            })
          )}
        >
          {project.TECHNOLOGIES.map((tec) => (
            <li key={tec.LABEL}>
              <span
                className={twMerge(
                  clsx(
                    'flex flex-row gap-2 rounded-full px-2 py-1 border-2 border-rock-400 dark:border-bunker-400 font-semibold text-rock-400 dark:text-bunker-400',
                    {
                      'hover:bg-cyan-100 hover:text-cyan-700 dark:hover:bg-cyan-700 dark:hover:text-cyan-300':
                        tec.COLOR === 'cyan',
                      'hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-700 dark:hover:text-blue-300':
                        tec.COLOR === 'blue',
                      'hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-700 dark:hover:text-red-300':
                        tec.COLOR === 'red',
                    }
                  )
                )}
              >
                <img
                  className='object-cover max-w-6 scale-75 border-1'
                  loading='lazy'
                  src={tec.ICON}
                />
                {tec.LABEL}
              </span>
            </li>
          ))}
        </ul>
        <p className='text-pretty text-rock-600 dark:text-bunker-400 text-center md:text-start'>
          {project.DESCRIPTION}
        </p>
        <div
          className={twMerge(
            clsx('flex flex-row gap-2 justify-center w-full px-2', {
              'md:justify-end': !invert,
              'md:justify-start': invert,
            })
          )}
        >
          {project.CODE_HREF && (
            <IrregularButton
              onClick={() => project.CODE_HREF && openHref(project.CODE_HREF)}
            >
              <Github />
              {allData.projects.GITHUB_BUTTON_TEXT}
            </IrregularButton>
          )}
          {project.PREVIEW_HREF && (
            <IrregularButton
              onClick={() =>
                project.PREVIEW_HREF && openHref(project.PREVIEW_HREF)
              }
            >
              <View360 />
              {allData.projects.VIEW_BUTTON_TEXT}
            </IrregularButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
