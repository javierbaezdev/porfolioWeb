import Footer from './Footer'
import NavBar from './NavBar'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-w-screen min-h-screen p-0 m-0  bg-old-lace-50 text-biscay-950 dark:bg-bunker-950 dark:text-white'>
      <section className='max-w-[48rem] min-h-screen ml-auto mr-auto md:pt-[4rem]  md:px-0 flex flex-col gap-4'>
        <NavBar />
        <main className='min-h-screen z-0 px-2 md:px-0'>{children}</main>
        <Footer />
      </section>
    </div>
  )
}

export default Layout
