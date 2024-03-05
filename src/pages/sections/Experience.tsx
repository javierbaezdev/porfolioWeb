import { SectionTitle, TimeLine } from '@/shared/components'
import { SECTIONS_IDS } from '@/shared/data/constants'
import { useAllData } from '@/shared/hooks'

const Experience = () => {
  const { allData } = useAllData()
  return (
    <section
      id={SECTIONS_IDS.at(0)}
      className='flex flex-col gap-2 animate-fade-in animate-delay-200'
    >
      <SectionTitle title={allData.tabs.at(0)?.label} />
      <TimeLine
        items={allData.me.EXPERIENCE.map((item) => ({
          dateRange: item.DATE_RANGE,
          description: item.DESCRIPTION,
          firsTitle: item.COMPANY,
          secondTitle: item.POSITION,
        }))}
      />
    </section>
  )
}

export default Experience
