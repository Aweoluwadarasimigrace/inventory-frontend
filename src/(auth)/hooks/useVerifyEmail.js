import { useParams } from "react-router"; // ✅ from react-router-dom
import { apiClient } from "../../lib/client"; // ✅ your axios instance
import { useEffect, useState } from "react";

export const useVerifyEmail = () => {
  const { token } = useParams(); // ✅ gets token from URL
  const [status, setStatus] = useState("loading");


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await apiClient.get(`/auth/verify/${token}`);
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
