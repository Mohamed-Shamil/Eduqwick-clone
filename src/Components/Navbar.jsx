import { useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate = useNavigate()

    

    return (
      <div>
        <div className="flex mb-2 justify-center">
          <hr className="border-black w-[90%]" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center ml-8">
            <img
            onClick={()=>navigate('/')}
              className="h-20 w-80 hover:cursor-pointer"
              src="Images/1690477575730.jpeg"
              alt=""
            />
          </div>
  
          <div className="flex items-center gap-4 ml-4">
            <h3 onClick={()=>navigate('/colleges')} className="font-bold text-gray-600 hover:text-black hover:cursor-pointer hover:">
              Colleges
            </h3>
            <h3 onClick={()=>navigate('/courses')} className="font-bold text-gray-600 hover:text-black hover:cursor-pointer hover:">
              Courses
            </h3>
            <h3 onClick={()=>navigate('/exams')} className="font-bold text-gray-600 hover:text-black hover:cursor-pointer hover:">
              Exams
            </h3>
            <h3 className="font-bold text-gray-600 hover:text-black hover:cursor-pointer hover:">
              Study Abroad
            </h3>
            <h3 className="font-bold text-gray-600 hover:text-black hover:cursor-pointer hover:">
              Get Counseling
            </h3>
            <h3 className="font-bold text-gray-600 hover:text-black hover:cursor-pointer hover:">
              Latest News
            </h3>
          </div>
  
          <div className="flex items-center mr-8">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="h-11"
            />
  
            <img className="h-24" src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  