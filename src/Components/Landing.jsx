const Landing = () => {
  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <div className="h-80 w-[90%] flex items-center justify-between rounded-full bg-gray-200">
          <div className="flex ">
            {" "}
            <img
              className="h-72 w-72 rounded-full ml-3"
              src="https://png.pngtree.com/png-vector/20220228/ourlarge/pngtree-teacher-stand-with-laptop-png-image_4436475.png"
              alt=""
            />
          </div>
          <div className="flex  flex-col gap-5">
            <h2 className="font-bold text-3xl">
              From College Admission <br /> to 1st Job Placement...
            </h2>
            <p className="text-center font-medium"> We are with you...!!</p>
            <div className=" flex justify-center  gap-6">
              <button className="border w-44  border-black h-12 hover:text-white bg-violet-600 font-semibold">
                Secure your growth
              </button>

              <button className="border hover:text-black text-gray-800 hover:font-semibold border-black h-12 w-44">
                Get Enrolled Now
              </button>
            </div>
          </div>
          <div>
            {" "}
            <img
              className="h-72 w-72 rounded-full mr-3"
              src="https://elearningindustry.com/wp-content/uploads/2020/03/how-to-effectively-conduct-classes-online-1.png"
              alt=""
            />
          </div>
        </div>
      </div>

        <div className="mt-4 flex items-center justify-center h-16">
<img className="h-12" src="https://img.favpng.com/22/17/5/loudspeaker-enclosure-computer-icons-png-favpng-ir6R1u8TjAAsZB5AQsUY1vyHe.jpg" alt="" />
<div className="w-[90%] h-12  flex items-center justify-around rounded-md bg-gray-200">
<p className=" font-medium hover:font-bold hover:cursor-pointer">JEE Answer Key released</p>
<p className=" font-medium hover:font-bold hover:cursor-pointer">DU to release new courses list</p>
<p className=" font-medium hover:font-bold hover:cursor-pointer">LPU application form live</p>
<p className="font-medium hover:font-bold hover:cursor-pointer">Parul to conduct convacation</p>
</div>
        </div>

        <div className="flex mt-4 justify-center">
            <div className="flex w-[80%] h-20 items-center bg-gray-200 justify-around">
<h3 className="text-violet-700 text-center font-bold">10000 <br /> Application Registered </h3>
<h3 className="text-violet-700 text-center font-bold">1000 <br /> Admission Registered</h3>
<h3 className="text-violet-700 text-center font-bold"> 10000 <br /> Student Free Counsilled</h3>
            </div>
        </div>
    </>
  );
};

export default Landing;
