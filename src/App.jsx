import { useEffect, useState } from "react";
import "./App.css";
import Background_Desk from "./Cards/Background_Desk";
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Dashboard, { products } from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Product_details from "./pages/Product_details";
import toast, { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./utils/ProtectedRoute";
import { Navigate, Outlet } from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
  const [count, setCount] = useState(0);
  const [statusCode,setStatusCode]=useState(0)



  // for getting the size of the screen
  // useEffect(()=>{
  //     const handleResize=()=>{
  //       setWindowDimensions({
  //         width: window.innerWidth,
  //       height: window.innerHeight,
  //       })
  //     }
  //     window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // },[])

    
  
    return (
    <>
      <Toaster />
      <BrowserRouter>
              <Routes>
                   {/* Public Route  */}
                   <Route path="/signup" element={<Background_Desk />} />

                    {/* Protected Routes  */}

                    <Route element={<ProtectedRoute statusCode= {statusCode} setStatusCode={setStatusCode} />}>
                            <Route path="/" element={<Dashboard statusCode= {statusCode} setStatusCode={setStatusCode} />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/product_details/:id" element={<Product_details />} />
                            {/* <Route path="/product_details" element={<Product_details />} /> */}

                    </Route>
                   
                   <Route path="*" element={<Navigate to="/" />}/>
                   <></>
                  
            </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
// https://docs.google.com/spreadsheets/d/12KWMkchj0WgpWeeDFtNxZpXE3kQ3_A31-Wc8XjhPU_A/edit?usp=sharing

// how to implement useNavigate in react ?

/*
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/target-path'); // relative or absolute path

*/




































{/* <div className='flex'>
            <div className='bg-brand-500 w-1/2 h-screen'>
                <p>Hi</p>
            </div>
            <div className='bg-white w-1/2 h-screen p-45'>

                      <div className='md-5'>
                        <p className='font-sans font-bold text-5xl md-5'>Sign up</p>  
                      </div>
                      <h6 className='font-serif text-stone-400 mt-1'>Join our Journalist network</h6>
                      <div><Input placeholder={"Username"}/></div>
                      <div><Input placeholder={"Email"}/></div>
                      <div><Password/></div>
                      <div><SignUpButton/></div> 
                      <div className='flex mt-2 justify-center'>
                        <p className='text-stone-400 text-xs text-sm mr-2'>Already have an account ?</p>
                        <a className='text-xs underline text-blue-500' href='#'>Sign in</a>
                      </div>
                      <div><Slash/></div>
            </div>
      </div> */}

      


//       <div className="bg-brand-500 sm:bg-white h-screen w-screen flex justify-center items-center">
//         {screen_width>640?<Background_Desk/>:
//         <>
//           <div className=" bg-brand-500 h-auto w-auto">
//             <div className="bg-brand-500 h-12 flex">
//               <span>
//                 {/* <img src="/camera.png" /> */}
//               </span>
//               <span>
//                 <img src="/person_cropped.png" className="w-40 h-auto relative top-4 left-25" />
//               </span>
//               <div className="flex flex-col">
//                       <span>
//                            {/* <img src="/pencil.png" /> */}
//                       </span>
//                        <span>
//                             {/* <img src="/book.png" /> */}
//                       </span>
//               </div>
              
// {/* bg-gradient-to-b from-red-500 to-white */}
// {/* bg-brand-500 h-auto w-auto */}
// {/* bg-gradient-to-b from-brand-500 to-white h-auto w-auto */}

//             </div>
//             {/* <SignInCard/> */}
//             {/* <SignUpCard/> */}

//           </div>
//         </>
        
//         }
       
//       </div>