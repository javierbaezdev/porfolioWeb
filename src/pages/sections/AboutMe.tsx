import { SectionTitle } from '@/shared/components'
import { SECTIONS_IDS } from '@/shared/data/constants'
import { useAllData } from '@/shared/hooks'

const AboutMe = () => {
  const { allData } = useAllData()
  return (
    <section
      id={SECTIONS_IDS.at(2)}
      className='flex flex-col gap-2 animate-fade-in animate-delay-400'
    >
      <SectionTitle title={allData.tabs.at(2)?.label} />
      <div className='flex flex-col md:flex-row gap-2 text-rock-600 dark:text-bunker-400 text-center md:text-start'>
        <div className='flex flex-col w-full md:w-4/6 gap-2 order-2 md:order-1'>
          {allData.me.ABOUT_ME.map((paragraph) => (
            <p
              key={paragraph}
              className='text-pretty'
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className='flex justify-center items-center order-1 md:order-2'>
          <img
            className='object-contain aspect-square hover:animate-float'
            loading='lazy'
            width={200}
            src={allData.me.IMAGES.AVATAR_FULL}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
