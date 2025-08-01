import axios from "axios";
import { useEffect, useState } from "react";
import { apiClient } from "../../lib/client";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const navigate = useNavigate();
  const [errors, seterrors] = useState({});
  const [countryValue, setcountryValue] = useState([]);
  const [formData, setformData] = useState({
    companyName: "",
    email: "",
    contact: "",
    number: "",
    countrycode: "",
    password: "",
    country: "",
  });

  const [isLoading, setisLoading] = useState(false);
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

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.email ||
      !formData.number ||
      !formData.password ||
      !formData.country ||
      !formData.countrycode
    ) {
      seterrors({
        name: !formData.companyName
          ? "please enter your organisation name"
          : "",
        email: !formData.email ? "please enter a valid email address" : "",
        number: !formData.number
          ? "please enter your mobile number and country code"
          : "",
        password: !formData.password
          ? "password cannot be fewer than 8 characters"
          : "",
        country: !formData.country ? "please select a country" : "",
      });
      return;
    }
    seterrors({}); // clear previous errors
    setisLoading(true);
    try {
      const res = await apiClient.post("/auth/register", formData, {
        withCredentials: true,
      });
      if (res.data) {
        toast.success("registration successful");
        navigate("/auth/verify-message", { state: { email: formData.email } });
      }
    } catch (error) {
      toast.success("not successful");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,idd"
        );
        const sorted = res.data
          .map((country) => {
            const name = country.name?.common;
            const root = country.idd?.root;
            const suffix = country.idd?.suffixes?.[0] || "";
            const phoneCode = root ? `${root}${suffix}` : null;
            return { name, phoneCode };
          })
          .sort((a, b) => a.name.localeCompare(b.name));
        setcountryValue(sorted);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return {
    changeFormDetails,
    submitForm,
    isLoading,
    countryValue,
    formData,
    errors,
  };
};
