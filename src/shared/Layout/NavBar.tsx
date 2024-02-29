const TEXT_COLOR = 'bunker-700'

const NavBar = () => {
  return (
    <header className={`flex justify-center items-center text-${TEXT_COLOR}`}>
      <nav
        className={`gap-y-4 rounded-md py-4 static flex flex-row items-center sm:divide-x sm:divide-${TEXT_COLOR} sm:divide-dashed sm:py-0`}
        aria-label='Main menu'
      >
        <a
          href='/'
          className='px-4 py-4 sm:py-0 sm:hover:underline'
        >
          Home
        </a>
        <a
          href='/posts/'
          className='px-4 py-4 sm:py-0 sm:hover:underline'
        >
          Blog
        </a>
        <a
          href='/talks/'
          className='px-4 py-4 sm:py-0 sm:hover:underline'
        >
          Speaking
        </a>
        <a
          href='https://notes.thegiftcode.dev'
          className='px-4 py-4 sm:py-0 sm:hover:underline'
        >
          Notes
        </a>
      </nav>
    </header>
  )
}

export default NavBar
