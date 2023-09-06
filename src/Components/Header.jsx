const Header = () => {
    return (
      <div className="flex h-20 justify-center">
        <div className="w-[90%] flex justify-between items-center p-6">
          <div className="flex gap-4 items-center">
            <h1 className="font-bold">You can follow us on your fav!! <br /> Social Media platform ...</h1>
  
            <img className="h-12 hover:cursor-pointer" src="Images\facebook.png" alt="" />
            <img className="h-12 hover:cursor-pointer" src="Images\instagram.png" alt="" />
            <img className="h-12 hover:cursor-pointer" src="Images\whatsapp.png" alt="" />
            <img className="h-12 hover:cursor-pointer" src="Images\youtube.png" alt="" />
            <img className="h-12 hover:cursor-pointer" src="Images\twitter.png" alt="" />
          </div>
  
          <div className="flex items-center hover:cursor-pointer">
            <div className="flex items-center mr-9 mb-8">
              <img className="h-10" src="https://static.vecteezy.com/system/resources/previews/020/009/614/non_2x/email-and-mail-icon-black-free-png.png" alt="" />
              <p className="font-semibold">hello@eduqwick.com</p>
            </div>
  
            <div className="flex  items-centerhover:cursor-pointer  mb-8">
              <img className="h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EG7t0fA_XLCe4lzQkgtLXXJnDntvZMMlAg&usqp=CAU" alt="" />
              <p className="font-semibold">1800xxxxxxx</p>
            </div>
          </div>
        </div>
        <hr className="border-black" />
      </div>
    );
  };
  
  export default Header;
  