import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Colleges from "../Components/Colleges" 

const College = () => {
  return (
    <div className="flex overflow-hidden  flex-col">
        <Header/>
        <Navbar/>
        <Colleges/>
       
    </div>
  )
}

export default College