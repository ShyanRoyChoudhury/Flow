import { ProfileSVG } from "@/SVGs/SVG";
import useAuth from "@/hooks/useAuth";

function Navbar() {
  
  const isAuthenticated = useAuth();
  const currentPath = window.location.pathname
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/signin'
  }
  return (
    <div className="w-full font-bold p-2 px-6 flex justify-between shadow items-center">
      <div className="text-lg">SalesBlink</div>
      <div onClick={handleLogout} className="flex">
        {!isAuthenticated ? (
          <div>
            {currentPath==='/signin' ? 
              (<button onClick={()=> window.location.href='/signup'} 
              className="bg-[#635BFF] border-[#9CBAF8] border-2 text-white flex px-4 py-2 rounded-md">
                Signup
              </button>) :
              (<button onClick={()=> window.location.href='/signin'} 
              className="bg-[#635BFF] border-[#9CBAF8] border-2 text-white flex px-4 py-2 rounded-md">
                Signin
              </button>)
            }
          </div>
          ) :
          <ProfileSVG />
        }
      </div>
    </div>
  );
}

export default Navbar;
