import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Landing from "../Components/Landing"

const Home = () => {
  return (
    <div className=" flex flex-col">
        <Header/>
        <Navbar/>
        <Landing/>
    </div>
  )
}

export default Home