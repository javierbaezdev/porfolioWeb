import { IrregularButton } from './buttons'

interface itemProps {
  dateRange: string
  firsTitle: string
  secondTitle: string
  description: string
  onClickButton?: () => void
  textButton?: string
}

interface Props {
  items: itemProps[]
}

const TimeLine = ({ items }: Props) => {
  return (
    <ol className='mx-2 md:mx-0 relative border-s border-bunker-50 dark:border-bunker-700'>
      {items?.map(
        ({
          dateRange,
          description,
          firsTitle,
          secondTitle,
          onClickButton,
          textButton,
        }) => (
          <li
            className='mb-10 ms-4'
            key={firsTitle + secondTitle}
          >
            <div className='absolute w-3 h-3 bg-old-lace-300 rounded-full mt-1.5 -start-1.5 border border-bunker-50 dark:border-bunker-900 dark:bg-bunker-700'></div>
            <time className='mb-1 text-sm font-normal leading-none text-rock-900 dark:text-bunker-500'>
              {dateRange}
            </time>
            <h1 className='text-xl font-semibold text-rock-900 dark:text-bunker-50'>
              {firsTitle}
            </h1>
            <h3 className='text-md font-semibold text-rock-900 dark:text-bunker-50'>
              {secondTitle}
            </h3>
            <p className='mb-4 text-base font-normal text-rock-600 dark:text-bunker-400 text-pretty'>
              {description}
            </p>
            {onClickButton && (
              <IrregularButton onClick={() => onClickButton()}>
                {textButton}
              </IrregularButton>
            )}
          </li>
        )
      )}
    </ol>
  )
}

export default TimeLine
