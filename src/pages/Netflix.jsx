import { useState } from 'react'
import Navvar from '../components/Navvar'

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div>
      <Navvar isScrolled={isScrolled} />
    </div>
  )
}
