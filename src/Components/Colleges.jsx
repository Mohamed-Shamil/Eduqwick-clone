const Colleges = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%] flex gap-5 p-5 bg-gray-100">
          <div className="bg-sky-200 w-1/5">
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Engineering</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Management</h1>
            <h1 className="hover:text-lg hover:cursor-pointer ml-4 font-bold ">Hotel Management</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Medical</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Physiotherapy</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Paramedical</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Arts & Humanities</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Science</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Mass Comm & Journalism</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Nursing</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Agriculture</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Design</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Information Technology</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Pharmacy</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Dental</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Performing Arts</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Comm & Banking</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Education</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer font-bold ">Law</h1>
            <h1 className="ml-4 hover:text-lg hover:cursor-pointer  font-bold ">Fashion</h1>

          

          </div>

          <div className="p-2 bg-red-200 w-4/5">
            <h3 className="text-xl underline mb-3 font-bold">Engineering Colleges</h3>
            <div className="flex justify-around">
                <div >
                    <h4 className="text-lg font-bold">Colleges By Degree</h4>
                    <p className="font-medium hover:cursor-pointer">B.Tech</p>
                    <p className="font-medium hover:cursor-pointer">M.Tech</p>
                    <p className="font-medium hover:cursor-pointer">B.Tech + M.Tech</p>
                    <p className="font-medium hover:cursor-pointer"> Diploma</p>
                    <p className=" hover:cursor-pointer text-blue-700 font-semibold">View All</p>
                     </div>
                     <div >
                    <h4 className="text-lg font-bold">Colleges By Cities</h4>
                    <p className="font-medium hover:cursor-pointer">Delhi</p>
                    <p className="font-medium hover:cursor-pointer">Jaipur</p>
                    <p className="font-medium hover:cursor-pointer">Banglore</p>
                    <p className="font-medium hover:cursor-pointer"> Hyderabad</p>
                    <p className=" hover:cursor-pointer text-blue-700 font-semibold">View All</p>
                     </div>
                
            </div>
            <div className="flex mt-8 justify-around">
                <div >
                    <h4 className="text-lg font-bold">Colleges By States</h4>
                    <p className="font-medium hover:cursor-pointer">Delhi-NCR</p>
                    <p className="font-medium hover:cursor-pointer">Rajasthan</p>
                    <p className="font-medium hover:cursor-pointer">Karnataka</p>
                    <p className="font-medium hover:cursor-pointer"> Maharashtra</p>
                    <p className=" hover:cursor-pointer text-blue-700 font-semibold">View All</p>
                     </div>
                     <div >
                    <h4 className="text-lg font-bold">Popular Colleges</h4>
                    <p className="font-medium hover:cursor-pointer">Parul University</p>
                    <p className="font-medium hover:cursor-pointer">LPU</p>
                    <p className="font-medium hover:cursor-pointer">BITS-Pilani</p>
                    <p className="font-medium hover:cursor-pointer"> IIT-Madras</p>
                    <p className=" hover:cursor-pointer text-blue-700 font-semibold">View All</p>
                     </div>
                
            </div>
            <p className="mt-16">Didn&apos;t find what you are looking for <span className="hover:cursor-pointer text-blue-500 font-semibold">Click Here</span> to get a call from a counselor</p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
