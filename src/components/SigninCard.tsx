import signinApi from "@/api/signin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SigninCard({ children }: { children?: React.ReactNode }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignIn = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    try{
      const response = await signinApi(formData);
      if(response.data.message === 'Login successful'){
        navigate('/')
      }
    }catch(err){
      console.error('Signin error',err)
    }
  };
  return (
    <div className=" p-4 lg:mt-16  w-full rounded-md h-5/6 bg-white text-[#3C4257] shadow-xl">
      <div className="space-y-4">
        <div className="px-4 py-8 font-semibold text-2xl">
          Login your SalesBlink Account
        </div>
        <form className="space-y-8" onSubmit={handleSignIn}>
          <div className="space-y-2">
            <label>username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="text-black w-full outline-blue-400 p-1.5 rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-black w-full outline-blue-400 p-1.5 rounded-md border"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="focus:outline-none text-white font-semibold w-full py-4 bg-[#635BFF] rounded-md"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-sm flex justify-center space-x-1">
          <div>Have an account?</div>
          <a href="signup" className="text-blue-700 hover:text-black">
            Sign up
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}
