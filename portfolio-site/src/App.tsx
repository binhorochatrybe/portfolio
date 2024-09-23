import { useState } from 'react'
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { items } from "../utils/variables"
import './App.css'

function App() {
  const [index, setIndex] = useState(0)

  const incrementIndex = () => {
    setIndex((prevIndex) => prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex);
  }

  const decrementIndex = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  }

  console.log(index);

  
  

  return (
    <>
      <header>
          <img className='github-icon' src="https://i.imgur.com/riRvI5l.png" alt="" />
          <img className='github-icon' src="https://i.imgur.com/Ni9oHG9.png" alt="" />
      </header>
      <div className='section-photo-description'>
        <div className='arrows-left-box' onClick={decrementIndex}>
          <GoArrowLeft className='arrow-left' />
        </div>
        <div className='float-box-photo'>
          <img src={items[index]} alt="" />
        </div>
        <div className='arrows-right-box' onClick={incrementIndex}>
          <GoArrowRight className='arrow-right' />
        </div>
        <div className='box-text'>
          <h1><span className='text-deco-gradient'>Hi! I'm Fabiano,</span> Software Developer.</h1>
          <p className='text-about-me'>I am Fabiano Sales, a developer passionate about technology and innovation. With experience in process automation and creating modern applications, I continuously strive to learn and apply new tools and techniques. I have a strong interest in design and user experience, which helps me create solutions that are not only functional but also visually appealing. I am always open to challenges and effectively collaborate in teams to achieve exceptional results.</p>
          <button className='connectwme-button'>Let's connect!</button>
        </div>
      </div>
    </>
  )
}

export default App
