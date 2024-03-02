const DeviceImac = ({ ...props }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12z' />
      <path d='M3 13h18' />
      <path d='M8 21h8' />
      <path d='M10 17l-.5 4' />
      <path d='M14 17l.5 4' />
    </svg>
  )
}

export default DeviceImac
