import { IrregularButton } from '@/shared/components/buttons'
import { useAllData } from '@/shared/hooks'
import { ContactType } from '@/shared/types/me'
import { openHref, sendEmail } from '@/shared/utils'

const Presentation = () => {
  const { allData } = useAllData()

  const actionContactByType = (type: ContactType, value: string) => {
    if (type === 'EMAIL') {
      return sendEmail(value)
    }
    if (type === 'HREF') {
      return openHref(value)
    }
  }

  return (
    <section className='flex flex-col gap-2 w-full animate-fade-in animate-delay-100'>
      <div className='flex flex-col md:flex-row gap-2 items-center justify-center text-center md:text-start'>
        <img
          className='aspect-square rounded-md'
          width={120}
          height={120}
          src={allData.me.IMAGES.AVATAR_MIN}
        />
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-extrabold text-rock-900 dark:text-bunker-50'>
            {allData.presentation.GREETINGS} {allData.me.NAME}
          </h1>
          <p className='text-pretty text-rock-600 dark:text-bunker-400'>
            {allData.me.DESCRIPTION}
          </p>
        </div>
      </div>
      {/* --- */}
      <div className='flex justify-center md:justify-end gap-2'>
        {allData.me.CONTACTS.map((contact) => (
          <IrregularButton
            key={contact.LABEL}
            onClick={() => actionContactByType(contact.TYPE, contact.VALUE)}
          >
            {contact.ICON}
            {contact.LABEL}
          </IrregularButton>
        ))}
      </div>
    </section>
  )
}

export default Presentation
