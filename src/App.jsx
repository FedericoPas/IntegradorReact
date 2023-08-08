import Hero from "./components/Hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Layout from "./components/layout/Layout"
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer"






function App() {
  return (
    <>
    <Navbar/>
    <Layout>
        <Hero/>
        <Body/>
    </Layout>
    
    <Footer/>
    </>
  )
   
  
}

export default App