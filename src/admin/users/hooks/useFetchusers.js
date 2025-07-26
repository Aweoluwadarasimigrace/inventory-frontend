import { apiClient } from "@/lib/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useFetchusers = () => {
  const [isLoading, setisLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    setisLoading(true);

    try {
      const res = await apiClient.get("/user/getuser", {
        withCredentials: true,
      });
      if (res.data) {
        setUsers(res.data.salesusers);
      }
      console.log(res.data.salesusers);
    } catch (error) {
      toast.error("error fetching user");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    users, isLoading
  };
};
