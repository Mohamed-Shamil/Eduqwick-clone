import { useNavigate } from "react-router-dom";
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"

const Courses = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />

      <div className="flex justify-center items-center h-full">
        <div className=" w-96 h-96 text-white text-center p-4">
         <h3 className="text-2xl text-violet-800 animate-pulse font-bold ">Sorry No Courses Added for now... </h3>
        </div>
      </div>
      <div className="flex justify-center items-center p-8">

      <p> <span className="text-lg text-blue-500 hover:cursor-pointer font-medium hover:text-blue-700" onClick={()=>navigate('/')}>Click Here</span> to Return to Home Page</p>
      </div>

    </div>
  );
};

export default Courses;
