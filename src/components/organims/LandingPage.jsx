import React from 'react'
import Categorias from '../molecules/Categorias';
import HomeText from '../molecules/HomeText';
import AboutText from '../molecules/AboutText';
import '../../assets/CSS/Footer.css'
import '../../assets/CSS/CardCategorias.css'
import Header from '../molecules/Header';
import FooterText from '../molecules/FooterText';
import ShoppinText from '../molecules/ShoppinText';
import fondo from '../../assets/Icon/Degradado.png'


function LandingPage() {
  return (
    <div>
      <Header/>
      <section className="home1" id="home">
        <HomeText />
	    </section>

      <section className='container-card1' id='categories'>
        <Categorias />
		  </section>

      <section className='courses ' id='courses'>
        <ShoppinText/>
      </section>


      <section className="about" id="about">
        <AboutText/>
	    </section>

      <hr />
      <FooterText />
    </div>
  )
}

export default LandingPage