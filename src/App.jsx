
import './App.css'
import Navbar from './component/NabBar/Navbar'
import Chart from './component/chart/Chart'
import Phone from './component/phone/Phone'
import PriceOptions from './component/priceOptions/PriceOptions'
// import Nav from './component/daisyNav/Nav'

function App() {


  return (
    <>  
      {/* <Nav></Nav>   */}
      <Navbar></Navbar>  
      <PriceOptions></PriceOptions>

      <Chart></Chart>
      <Phone></Phone>
    </>
  )
}

export default App
