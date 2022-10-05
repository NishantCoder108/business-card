import React from 'react'
import logo from "../assets/LogoIm.jpg"
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import Github from '../assets/Github.svg'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import "./Index.css"
const Index = () => {
  return (
    <div className='business-card-container'>
        <header className='header'>

          <img src={logo} alt="logo" />

          <h2>Nishant Kumar</h2>
          <h5> Frontend Developer</h5>
         <a href='https://thenishantkumar.in'>thenishantkumar.in  </a> 
        </header>



<section className='social'>


  <button><img src={mail}/> Email</button>
  <button > <img src={linkedin}/> LinkedIn</button>
</section>



{/* About Secition */}

<section className='about'>

  <h3>About</h3>
  <p>
    I am frontend developer with particular interest in making things simple . A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. and an always looking for new things to learn .
  </p>


</section>


{/* Interests */}
<section className='interests'>
  <h3>Interests</h3>
  <p>Food expert , Music Scholar ,Reader  , Interest fanatic. Entrepreneur . Travel geek ,pop Culture ninjs ,Coffee fanatic.</p>


</section>

{/* Social Media */}
<footer className='socialmedia'>

<button><img src={Twitter}  alt='twitter'/></button>
<button><img src={Facebook} alt='facebook'/></button>
<button><img src={Instagram}  alt='Instagram'/></button>
<button><img src={Github}  alt='Github'/></button>
</footer>
    </div>
  )
}

export default Index

// 