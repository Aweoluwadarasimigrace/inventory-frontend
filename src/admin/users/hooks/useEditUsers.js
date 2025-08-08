import useAdminUserStore from "@/store/getUserCreatedByAdmin";
import { useState } from "react";
import { toast } from "sonner";

export const useEditUsers = () => {
  const { adminUser, updateUserByAdmin } = useAdminUserStore();
  const [formData, setFormData] = useState({
    username: adminUser.username || "",
    contact: adminUser.contact || "",
    number: adminUser.number || "",
    countrycode: adminUser.countrycode || "",
    profilepicture: adminUser.profilepicture || "",
  });
  const changeFormDetails = (e) => {
    // Handle form changes
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (updated.number && updated.countrycode) {
        updated.contact = updated.countrycode + updated.number;
      }
      return updated;
    });
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const baseString = reader.result;
      setFormData((prevData) => ({
        ...prevData,
        profilepicture: baseString,
      }));
    };
    reader.readAsDataURL(file);
  };
  console.log(formData, "lolllk")

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await updateUserByAdmin(formData, adminUser._id);
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    }
  };
  // Custom hook logic for editing users can be added here
  return {
    changeFormDetails,
    submitForm,
    handleProfileImageChange,
    formData
  };
};
