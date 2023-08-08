import React from 'react'

import './app.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Header, Feature, Projects } from './containers'

import { NavBar, Skills, Learning, Home } from './components'

const App = () => {

  return (

    <Router>

      <div className="App">

        <div className="gradient__bg">

          <NavBar />

          <Header />

          <Routes>

          <Route exact path="/" Component={Home} />

            <Route path="/math" element={<Learning />} />

            {/* <Route path="/case-studies" component={CaseStudies} />

            <Route path="/library" component={Library} /> */}

          </Routes>

          

        </div>

      

      </div>

    </Router>

  )

}

export default App

