import { apiClient } from "@/lib/client";

export const fetchUserData = async () => {
  try {
    const res = await apiClient.get("/user/getsingleuser", {
      withCredentials: true,
    });

    return res.data.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const updateUser = async (formdata) => {
try {
    const response = await apiClient.patch(
    "/user/updateUser",
    { profilepicture: formdata.profilepicture },
    { withCredentials: true }
  );
  return response.data.user;
} catch (error) {
  console.error("Error updating user:", error);
}
};

export const updateAdminUser = async (payload, userId) => {
  try {
    const responses = await apiClient.patch(
      `/user/updateuserbyadmin/${userId}`,
      payload,
      { withCredentials: true }
    );
    console.log(responses.data, "new fiel");
      return responses.data.user;
  } catch (error) {
    console.error("Error updating admin user:", error);
  }
};


export const fetchUserCreatedByadmin = async () => {
  try {
    const apiresponse = await apiClient.get("/user/getuser", {
      withCredentials: true,
    });
    return apiresponse.data.salesusers;
  } catch (error) {
    console.error("Error fetching users created by admin:", error);
  }
};

export const deleteAdminUser = async (userId) => {
  try {
    const apiRes = await apiClient.delete(`/user/deleteuser/${userId}`, {
      withCredentials: true,
    });
    return apiRes;
  } catch (error) {
    console.error("Error deleting admin user:", error);
  }
};


export const fetchCustomer = async () => {
  try {
    const apiRes = await apiClient.get("/customer/getallcustomer", {
      withCredentials: true,
    });
    return apiRes.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

export const editCustomer = async (customerId, payload) => {
  console.log(customerId, "id in user service")
  try {
    const ress = await apiClient.patch(`/customer/updatecustomer/${customerId}`,
      payload,
      { withCredentials: true }
    );
    return ress.data.customer;
  } catch (error) {
    console.error("Error editing customer:", error);
  }
  
};

export const deleteCustomer = async (customerId) => {
  try {
    const response = await apiClient.delete(`/customer/deletecustomer/${customerId}`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};
