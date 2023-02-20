import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubMenu} = useGlobalContext();
  

  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum blanditiis rem, illo sapiente nostrum non corporis aliquid voluptatibus architecto accusamus!</p>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className='phone-img' alt='phone'/>
        </article>
      </div>
    </section>
  )
}

export default Hero
