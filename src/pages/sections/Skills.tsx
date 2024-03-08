import { SectionTitle } from '@/shared/components'
import { SECTIONS_IDS } from '@/shared/data/constants'
import { useAllData } from '@/shared/hooks'
import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Skills = () => {
  const { allData } = useAllData()
  const [stateNumber, setStateNumber] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStateNumber(Math.floor(Math.random() * allData.skills.length + 1))
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section
      id={SECTIONS_IDS.at(3)}
      className='flex flex-col gap-2 animate-fade-in animate-delay-500'
    >
      <SectionTitle title={allData.tabs.at(3)?.label} />
      <div className='flex flex-wrap flex-row gap-2 justify-center items-center text-rock-600 dark:text-bunker-400 text-center md:text-start'>
        {allData.skills.map((skill, index) => (
          <span
            key={skill}
            className={twMerge(
              clsx(
                ' bg-rock-200 text-rock-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-bunker-900 dark:text-bunker-300 border border-rock-400 dark:border-bunker-300',
                {
                  'animate-pop': index === stateNumber,
                }
              )
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
