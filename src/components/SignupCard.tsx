export function SignupCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className=" p-4 lg:mt-16  w-full rounded-md h-5/6 bg-white text-[#3C4257] shadow-xl">
      <div className="space-y-4">
        <div className="px-4 py-8 font-semibold text-2xl">
          Create your PayGateway Account
        </div>
        <form className="space-y-8">
          <div className="space-y-2">
            <label>Full Name</label>
            <input className="text-black w-full outline-blue-400 p-1.5 rounded-md border" />
          </div>

          <div className="space-y-2">
            <label>Password</label>
            <input className="text-black w-full outline-blue-400 p-1.5 rounded-md border" />
          </div>
          <div className="pt-4">
            <button
              onClick={() => console.log("signup")}
              className="focus:outline-none w-full py-4 bg-[#635BFF] rounded-md"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="text-sm flex justify-center space-x-1">
          <div>Have an account?</div>
          <a
            href="signin"
            className="text-blue-700 hover:text-black rounded-md"
          >
            Sign in
          </a>
        </div>
      </div>
      {children}
    </div>
  );
}
