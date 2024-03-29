const Chile = ({ ...props }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 64 64'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <path
        d='M2 32c0 16.6 13.4 30 30 30s30-13.4 30-30H2z'
        fill='#ed4c5c'
      ></path>
      <path
        d='M32 2c16.6 0 30 13.4 30 30H32V2z'
        fill='#f9f9f9'
      ></path>
      <path
        d='M32 2C15.4 2 2 15.4 2 32h30V2z'
        fill='#2a5f9e'
      ></path>
      <path
        fill='#f9f9f9'
        d='M20 21.7l4.9 3.3l-1.8-5.3l4.9-3.5h-6.1L20 11l-1.8 5.2H12l4.9 3.5l-1.8 5.3z'
      ></path>
    </svg>
  )
}

export default Chile
