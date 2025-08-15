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
  const response = await apiClient.patch(
    "/user/updateUser",
    { profilepicture: formdata.profilepicture },
    { withCredentials: true }
  );
  return response.data.user;
};

export const updateAdminUser = async (payload, userId) => {
  const responses = await apiClient.patch(
    `/user/updateuserbyadmin/${userId}`,
    payload,
    { withCredentials: true }
  );
  console.log(responses.data, "new fiel");
  return responses.data.user;
};

export const fetchUserCreatedByadmin = async () => {
  const apiresponse = await apiClient.get("/user/getuser", {
    withCredentials: true,
  });
  return apiresponse.data.salesusers;
};

export const deleteAdminUser = async (userId) => {
  const apiRes = await apiClient.delete(`/user/deleteuser/${userId}`, {
    withCredentials: true,
  });
  console.log(apiRes);
  return apiRes;
};

export const fetchCustomer = async () => {
  const res = await apiClient.get("/customer/getallcustomer", {
    withCredentials: true,
  });
  console.log(res);
  return res.data;
};

export const editCustomer = async (customerId, payload) => {
  console.log(customerId, "id")
  const res = await apiClient.patch( `/customer/updatecustomer/${customerId}`,
    payload,
    { withCredentials: true }
  );
  console.log(res.data)
  return res.data.customer;
};

export const deleteCustomer = async (customerId) => {
  const response = await apiClient.delete(
    `/customer/deletecustomer/${customerId}`,
    { withCredentials: true }
  );
  return response.data;
};
