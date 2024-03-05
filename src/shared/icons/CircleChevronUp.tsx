const CircleChevronUp = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='text-rock-600 dark:text-bunker-400'
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M9 13l3 -3l3 3' />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
    </svg>
  )
}

export default CircleChevronUp
