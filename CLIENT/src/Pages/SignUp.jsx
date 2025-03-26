import React, { useState } from 'react'
import loginSignupImage from "../assets/animated.gif";
import { BiShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { ImagetoBase64 } from "../Utility/ImagetoBase64";
import {toast} from 'react-hot-toast';


function SignUp() {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image:"",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfileImage=async(e)=>{
    const imageData=await ImagetoBase64(e.target.files[0])
    console.log(imageData) //if we execute only this line,big history will show
    setData((prev)=>{
      return{
       ...prev,
       image:imageData
      }
    })
  }
  console.log(process.env.REACT_APP_SERVER_DOMIN)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        
        const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        })
        
        const dataRes=await fetchData.json()
        console.log(dataRes)
        
        //alert(dataRes.message);
        toast(dataRes.message);
        if(dataRes.alert){
          navigate("/login")
        }
        
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill all required fields");
    }
  }; //A24857

  return (
    <>
    <div className="p-4 md:p-4"
    style={{
      background:'#d2c7ba'
     }}
    >
      
      <div className="w-full max-w-sm bg-[#d2c7ba] m-auto flex items-center flex-col p-4 text-black">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative group">
          <img src={data.image ? data.image :loginSignupImage } className="w-full h-auto object-contain" alt="Sign up" />

          <label htmlFor="profileImage">   
          <div className=" absolute w-full inset-0 bg-gradient-to-t from-[#800000] to-[#EEEBE8] bg-opacity-50 text-center transform translate-y-full transition duration-300 ease-in-out group-hover:translate-y-0 cursor-pointer"> 
          <p className="absolute bottom-4 ml-3 text-sm p-1 text-1xl font-bold text-[#EEEEE8] [text-shadow:0px_0px_5px_rgba(255,255,255,0.5)] ">Upload</p>
          </div>
          <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/> 
          </label>
        </div>

        <form className="w-full py-3 flex flex-col rounded" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#800000] hover:bg-[#A89F91] "
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#800000] hover:bg-[#A89F91]"
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#800000] hover:bg-[#A89F91]"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex px-1 py-1 bg-white rounded mt-1 mb-2 focus-within:ring-2 focus-within:ring-[#800000] hover:bg-[#A89F91]">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-white border-none outline-none hover:bg-[#A89F91]"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>
          <label>Confirm Password</label>
          <div className="flex px-1 py-1 bg-white rounded mt-1 mb-2 focus-within:ring-2 focus-within:ring-[#800000] hover:bg-[#A89F91]">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-white border-none outline-none hover:bg-[#A89F91]"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>
          <button
            type="submit"
            className="max-w-[150px] w-full m-auto cursor-pointer rounded-full mt-4 text-white text-xl font-medium text-center py-1 px-1 bg-[#A02334] hover:bg-[#800000] border-[#800000]"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm mt-1">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#800000] font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default SignUp;
