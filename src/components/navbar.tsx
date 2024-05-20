import { ProfileSVG } from "@/SVGs/SVG";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Navbar() {
  const isAuthenticated = useAuth();
  const currentPath = window.location.pathname

  const [usernameState, setUsernameState] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsernameState(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/signin'
  }
  return (
    <div className="w-full font-bold p-2 px-6 flex justify-between shadow items-center">
      <div className="text-lg">SalesBlink</div>
      <div className="flex">
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
          ) :(
          <div className="flex space-x-1 hover:cursor-pointer">
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex space-x-1">
                  <div>
                    <ProfileSVG />
                  </div>
                  <div className="text-black">{usernameState}</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

          </div>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
