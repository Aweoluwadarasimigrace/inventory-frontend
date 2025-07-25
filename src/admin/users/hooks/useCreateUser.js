import { apiClient } from "@/lib/client";
import { useState } from "react";
import { toast } from "sonner";

export const useCreateUser = () => {
  const [formData, setformData] = useState({});
  const [errors, seterrors] = useState({});
  const [profileImage, setProfileImage] = useState("");
  const [dialog, setdialog] = useState(false);
  const [isloading, setisloading] = useState(false);

  const handleProfileimage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const basestring = reader.result;
      setProfileImage(basestring);
    };
    reader.readAsDataURL(file);
  };

  const changeFormDetails = (e) => {
    const { name, value } = e.target;

    setformData((prev) => {
      const updated = { ...prev, [name]: value };
      if (updated.number && updated.countrycode) {
        updated.contact = updated.countrycode + updated.number;
      }
      return updated;
    });
  };

  const createUser = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.username ||
      !formData.email ||
      !formData.number ||
      !formData.password ||
      !formData.role ||
      !profileImage
    ) {
      seterrors({
        firstname: !formData.firstname ? "field is required" : "",
        lastname: !formData.lastname ? "field is required" : "",
        username: !formData.username ? "field is required" : "",
        email: !formData.email ? "field is required" : "",
        number: !formData.number ? "field is required" : "",
        password: !formData.password ? "field is required" : "",
        profilepicture: !profileImage ? "field is required" : "",
        gender: !formData.gender ? "field is required" : "",
         role: !formData.role ? "field is required" : "",
      });
      return;
    }

    seterrors({});
    setisloading(true);
    const payload = { ...formData, profilepicture: profileImage };
    console.log(payload)
    try {
      console.log("is loading ")
      const res = await apiClient.post("/user/createuser", payload, {
        withCredentials: true,
      });
      if (res.data) {
        toast.success("user created successfully");
        setdialog(false);

    // ✅ Clear form
    setformData({});
    setProfileImage("");
      }
    } catch (error) {
      toast.success("not successful");
      console.log(error);
    } finally {
      setisloading(false);
      setdialog(false);
    }
  };
  return {
    dialog,
    errors,
    changeFormDetails,
    handleProfileimage,
    createUser,
    isloading,
    setdialog,
    formData
  };
};
