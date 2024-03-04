import { IrregularButton } from '@/shared/components/buttons'
import { useAllData } from '@/shared/hooks'
import { Linkedin, Mail } from '@/shared/icons'

const Presentation = () => {
  const { allData } = useAllData()
  return (
    <section className='flex flex-col gap-2 w-full animate-fade-in animate-delay-100'>
      <div className='flex flex-row gap-2 items-center justify-center'>
        <img
          className='aspect-square rounded-md'
          width={120}
          height={120}
          src={allData.me.IMAGES.AVATAR_MIN}
        />
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-extrabold'>
            {allData.presentation.GREETINGS} {allData.me.NAME}
          </h1>
          <p className='text-pretty'>{allData.me.DESCRIPTION}</p>
        </div>
      </div>
      {/* --- */}
      <div className='flex justify-end gap-2'>
        <IrregularButton>
          <Mail />
          {allData.presentation.CONTACT_ME}
        </IrregularButton>
        <IrregularButton>
          <Linkedin />
          LinkedIn
        </IrregularButton>
      </div>
    </section>
  )
}

export default Presentation
