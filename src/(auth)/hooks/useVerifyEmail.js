import { useNavigate, useSearchParams } from "react-router";
import { apiClient } from "../../lib/client"; // ✅ your axios instance
import { useEffect, useState } from "react";

export const useVerifyEmail = () => {
  const [queryParams] = useSearchParams();
  const token = queryParams.get("token");
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await apiClient.get(`/auth/verify-email/?token=${token}`);
console.log(res)
        if(res.data.token){
          sessionStorage.setItem("token", res.data.token);
        }
        setStatus("success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } catch (error) {
        setStatus("error");
      }
    };
    if (token) {
      verifyEmail();
    }
  }, [token]);

  return { status };
};
