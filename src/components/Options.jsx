const Options = () => {

  const handleGoogleLogin = () => {
  window.location.href = "http://localhost:3001/auth/google"; // redirect to backend
};

  return (

    
    <>
      <div className="flex justify-center mt-4">
        <img src="/google.png" className="w-7 h-7 mx-2 hover:cursor-pointer" 
        onClick={(e)=>{
          e.preventDefault()
          handleGoogleLogin()
        }}/>
        <img
          src="/facebook (1).png"
          className="w-7 h-7 mx-2 hover:cursor-pointer"
        />
        <img
          src="/apple-logo.png"
          className="w-7 h-7 mx-2 hover:cursor-pointer"
        />
      </div>
    </>
  );
};

export default Options;
