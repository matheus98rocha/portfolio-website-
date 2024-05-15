import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { IoMdHome } from 'react-icons/io'
import { IoIosGitNetwork } from 'react-icons/io'
import { IoMdContacts } from 'react-icons/io'
import { GrProjects } from 'react-icons/gr'
import { NavLinksProps } from './floating-nave.types'
import { FaComputer } from "react-icons/fa6";

type useFloatingNavProps = {
  t: any
}

export const useFloatingNav = ({ t }: useFloatingNavProps) => {
  const { scrollYProgress } = useScroll()
  const [isFullWidth, setIsFullWidth] = useState(true)

  // Adicionar lógica de rolagem
  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() > 0) {
        setIsFullWidth(false)
      } else {
        if (direction < 0) {
          setIsFullWidth(true)
        } else {
          setIsFullWidth(false)
        }
      }
    }
  })

  const routes: NavLinksProps[] = [
    {
      name: t('routes.home'),
      link: '/',
      icon: <IoMdHome className='h-4 w-4 text-neutral-500 dark:text-white' />
    },
    {
      name: t('routes.skills'),
      link: '#portfolio',
      icon: <FaComputer className='h-4 w-4 text-neutral-500 dark:text-white' />
    },
    {
      name: t('routes.projects'),
      link: '#portfolio',
      icon: <GrProjects className='h-4 w-4 text-neutral-500 dark:text-white' />
    },
    {
      name: t('routes.experience'),
      link: '#experience',
      icon: (
        <IoIosGitNetwork className='h-4 w-4 text-neutral-500 dark:text-white' />
      )
    },
    {
      name: t('routes.contact'),
      link: '#contact',
      icon: (
        <IoMdContacts className='h-4 w-4 text-neutral-500 dark:text-white' />
      )
    }
  ]

  return {
    isFullWidth,
    routes
  }
}
