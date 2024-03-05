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
    </section>
  )
}

export default AboutMe
