import { apiClient } from "@/lib/client";

export const fetchUserData = async () => {
  try {
    const res = await apiClient.get("/user/getsingleuser");

    return res.data.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const updateUser = async (formdata) => {
try {
    const response = await apiClient.patch(
    "/user/updateUser",
    { profilepicture: formdata.profilepicture }
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
      payload
    );
    console.log(responses.data, "new fiel");
      return responses.data.user;
  } catch (error) {
    console.error("Error updating admin user:", error);
  }
};


export const fetchUserCreatedByadmin = async () => {
  try {
    const apiresponse = await apiClient.get("/user/getuser");
    return apiresponse.data.salesusers;
  } catch (error) {
    console.error("Error fetching users created by admin:", error);
  }
};

export const deleteAdminUser = async (userId) => {
  try {
      const apiRes = await apiClient.delete(`/user/deleteuser/${userId}`);
      return apiRes;
    } catch (error) {
      console.error("Error deleting admin user:", error);
    }
  };


export const fetchCustomer = async (page) => {
  try {
    const apiRes = await apiClient.get(`/customer/getallcustomer?page=${page}&limit=10`);
    return apiRes.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
  }
};

export const editCustomer = async (customerId, payload) => {
  console.log(customerId, "id in user service")
  try {
    const ress = await apiClient.patch(`/customer/updatecustomer/${customerId}`,
      payload
    );
    return ress.data.customer;
  } catch (error) {
    console.error("Error editing customer:", error);
  }
  
};

export const deleteCustomer = async (customerId) => {
  try {
    const response = await apiClient.delete(`/customer/deletecustomer/${customerId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
};
