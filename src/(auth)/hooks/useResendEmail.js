import { toast } from "sonner";
import { apiClient } from "../../lib/client";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";

export const useResendEmail = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef();
  const resendEmail = async (e) => {
    setisLoading(true);
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      toast.error("please enter your email address");
      setisLoading(false);
      return;
    }
    try {
      const res = await apiClient.post(
        "/auth/resend-verification",
        { email: email },
        { withCredentials: true }
      );
      toast.success("email sent successfully");
      navigate("/auth/verify-message", { state: { email: email } });
    } catch (error) {
      const status = error.response?.status;
      if (status === 404) {
        toast.error("email doesn't exist trying signing up again");
        navigate("/auth");
      } else {
        toast.error("error occured");
      }
    } finally {
      setisLoading(false);
    }
  };

  return {
    resendEmail,
    emailRef,
    isLoading,
  };
};
