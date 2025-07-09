import { apiClient } from "../../lib/client"; // ✅ your axios instance
import { useEffect, useState } from "react";

export const useVerifyEmail = () => {
  const queryParams = URLSearchParams(window.location.search)
  const token = queryParams.get("token")
  console.log(token)
  const [status, setStatus] = useState("loading");


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await apiClient.get(`/auth/verify/?token=${token}`);
        setStatus("success");
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
