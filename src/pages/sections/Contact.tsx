import { SectionTitle } from '@/shared/components'
import { SECTIONS_IDS } from '@/shared/data/constants'
import { useAllData } from '@/shared/hooks'

const contact = () => {
  const { allData } = useAllData()
  return (
    <section
      id={SECTIONS_IDS.at(3)}
      className='flex flex-col gap-2 animate-fade-in animate-delay-500'
    >
      <SectionTitle title={allData.tabs.at(3)?.label} />
    </section>
  )
}

export default contact
