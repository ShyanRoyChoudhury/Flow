import signinApi from "@/api/signin";
import { useState } from "react";

export function SigninCard({ children }: { children?: React.ReactNode }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignIn = async () => {
    await signinApi(formData);
  };
  return (
    <div className=" p-4 lg:mt-16  w-full rounded-md h-5/6 bg-white text-[#3C4257] shadow-xl">
      <div className="space-y-4">
        <div className="px-4 py-8 font-semibold text-2xl">
          Login your SalesBlink Account
        </div>
        <form className="space-y-8">
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
              onClick={handleSignIn}
              className="focus:outline-none w-full py-4 bg-[#635BFF] rounded-md"
            >
              Signin
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
