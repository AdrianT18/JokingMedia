import React from "react";
import './styles/Intro.css'
import './styles/offer.css'
import './styles/results.css'
import './styles/strategy.css'
import './styles/resultsSection2.css'
import './styles/demoCall.css'
import './styles/footer.css'
import './styles/buttons.css'
import Intro from './Components/Intro'
import Offer from './Components/offer'
import Results from './Components/results'
import Strategy from './Components/strategy'
import ResultSection2 from './Components/resultSection2'
import DemoCall from './Components/demoCall'
import Footer from './Components/footer'


function App() {
  return(
      <div>
          <Intro/>
          <Offer/>
          <Results/>
          <Strategy/>
          <ResultSection2/>
          <DemoCall/>
          <Footer/>
      </div>
  )
}

export default App;
