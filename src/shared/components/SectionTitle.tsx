interface Props {
  title?: string
}
const SectionTitle = ({ title }: Props) => {
  return (
    <h1 className='text-2xl font-bold text-center sm:text-start text-rose-400 dark:text-rose-500'>
      {`<${title}/>`}
    </h1>
  )
}

export default SectionTitle
