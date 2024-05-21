import { backendURL } from "@/lib/config";
import { serverState } from "@/store/serverState";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";


const useServerStatus = () => {
    const setServerRunning = useSetRecoilState(serverState)
    
    useEffect(() => {
      const checkServerStatus = async () => {
          try {
              const response = await fetch(backendURL);
              if (response) {
                  setServerRunning(true);
                  clearInterval(intervalId)
              } else {
                  setServerRunning(false);
              }
          } catch {
              setServerRunning(false);
          }
      };
      window.addEventListener('load', checkServerStatus);
      const intervalId = setInterval(checkServerStatus, 2000);
      
      return () => {
        clearInterval(intervalId);
        window.removeEventListener('load', checkServerStatus);
    };

    }, []);
}

export default useServerStatus;