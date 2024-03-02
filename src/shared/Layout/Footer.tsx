import { LanguageDropdown, ThemeModeDropdown } from '../components'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between items-center mt-auto mb-10 border-t-2 border-dashed border-bunker-300'>
      <div className='w-full'>
        <p className='text-xs'>
          Diseñado y desarrollado por Javier Báez. ¡Gracias por visitar mi
          portafolio!
        </p>
      </div>
      <div className='md:flex flex-row items-center justify-end w-auto gap-4 hidden pt-4'>
        <LanguageDropdown className='animate-fade-in-down bottom-20' />
        <ThemeModeDropdown className='animate-fade-in-down bottom-20' />
      </div>
    </footer>
  )
}

export default Footer
