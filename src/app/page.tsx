import React from 'react'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import Hero from './components/Hero'
import Editor from './components/Editor'
import BestSeller from './components/BestSeller'
import Vita from './components/Vita'
import Universe from './components/Universe'
import Featured from './components/Featured'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <Editor />
      <BestSeller />
      <Vita />
      <Universe />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home