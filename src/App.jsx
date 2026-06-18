import Header from './components/Header/Header.jsx'
import TopOffer from './components/TopOffer/TopOffer.jsx'
import Hero from './components/Hero/Hero.jsx'
import LeadForm from './components/LeadForm/LeadForm.jsx'
import CloveStrip from './components/CloveStrip/CloveStrip.jsx'
import BenefitsBar from './components/BenefitsBar/BenefitsBar.jsx'
import DreamSmiles from './components/DreamSmiles/DreamSmiles.jsx'
import Results from './components/Results/Results.jsx'
import WhyWhistle from './components/WhyWhistle/WhyWhistle.jsx'
import WhistleDifference from './components/WhistleDifference/WhistleDifference.jsx'
import ComparisonTable from './components/ComparisonTable/ComparisonTable.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks.jsx'
import DoctorLed from './components/DoctorLed/DoctorLed.jsx'
import HappySmilers from './components/HappySmilers/HappySmilers.jsx'
import Faq from './components/Faq/Faq.jsx'
import Footer from './components/Footer/Footer.jsx'
import StickyCta from './components/StickyCta/StickyCta.jsx'

export default function App() {
  return (
    <>
      <Header />
      <TopOffer />
      <main>
        <Hero />
        <LeadForm />
        <CloveStrip />
        <BenefitsBar />
        <DreamSmiles />
        <Results />
        <WhyWhistle />
        <WhistleDifference />
        <ComparisonTable />
        <HowItWorks />
        <DoctorLed />
        <HappySmilers />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
