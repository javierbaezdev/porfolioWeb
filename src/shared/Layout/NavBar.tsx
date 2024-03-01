import { useAllData } from '../hooks'
import TabItem from './TabItem'

const NavBar = () => {
  const { allData } = useAllData()
  console.log({ allData })
  return (
    <header className='flex justify-center items-center text-bunker-400 animate-slide-in-top'>
      <nav className='gap-y-4 rounded-md py-4 static hidden md:flex flex-row items-center sm:divide-x sm:divide-bunker-400 sm:divide-dashed sm:py-0  '>
        {allData?.tabs?.map((item) => (
          <TabItem
            key={item.href}
            href={item.href}
            label={item.label}
          />
        ))}
      </nav>
      {/* _ TODO: burger menu */}
    </header>
  )
}

export default NavBar
