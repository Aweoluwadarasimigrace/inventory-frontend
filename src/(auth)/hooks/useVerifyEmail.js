import { useParams } from "react-router";
import { apiClient } from "../../lib/client";

export const useVerifyEmail = () => {
       const { token } = useParams();
const [status, setstatus] = useState("loading")
  const verifyEmail = async () => {
    try {
        const res = await apiClient.get(`auth/verify-email/${token}`)
        setstatus("success")
    } catch (error) {
        setstatus("error")
    }
  };

 useEffect(() => {
   if(token){
    verifyEmail()
   }
 
 }, [token])
 
  return {
status
  };
};
