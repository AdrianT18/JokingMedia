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
import Step1 from './Components/step1'
import Step2 from './Components/step2'
import Step3 from './Components/step3'
import ResultSection2 from './Components/resultSection2'
import DemoCall from './Components/demoCall'
import Footer from './Components/footer'
import Maintenance from "./maintanace";


function App() {
  return(
      <div>
          {/*<Maintenance/>*/}
          <Intro/>
          <Offer/>
          <Results/>
          <Strategy/>
          <Step1/>
          <Step2/>
          <Step3/>
          <ResultSection2/>
          <DemoCall/>
          <Footer/>
      </div>
  )
}

export default App;
