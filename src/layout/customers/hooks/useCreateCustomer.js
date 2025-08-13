import { apiClient } from "@/lib/client";
import useCustomerStore from "@/store/getCustomers";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useCreateCustomer = () => {
  const [formData, setformData] = useState({});
  const [errors, seterrors] = useState({});
  const { fetchAllCustomer } = useCustomerStore();
  const [isLoading, setisLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

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

  const createCustomer = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.address ||
      !formData.number ||
      !cities ||
      !countries ||
      !states
    ) {
      seterrors({
        firstname: !formData.firstname ? "field is required" : "",
        lastname: !formData.lastname ? "field is required" : "",
        email: !formData.email ? "field is required" : "",
        address: !formData.address ? "field is required" : "",
        number: !formData.number ? "field is required" : "",
        city: !cities ? "field is required" : "",
        country: !countries ? "field is required" : "",
        state: !states ? "field is required" : "",
      });
      return;
    }

    setisLoading(true);
    const payload = {
      ...formData,
      //   city: cities,
      state: selectedState,
      country: selectedCountry,
    };
    console.log(payload, "payload");

    try {
      console.log("ilsoajdjd");
      const res = await apiClient.post("/customer/createcustomer", payload, {
        withCredentials: true,
      });

      if (res.data) {
        toast.success("customer created successfullly");
        setformData({});
        await fetchAllCustomer();
        navigate("/dashboard/customer");
      }
    } catch (error) {
      toast.error("error creating customer, try again later");
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const fetchCountries = async () => {
    try {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/positions"
      );
      console.log(res.data.data);
      setCountries(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error("cannot seem to load country, check your connection");
    }
  };

  const fetchStates = async () => {
    if (!selectedCountry) {
      return toast.error("select a country first");
    }

    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: selectedCountry,
        }
      );
      console.log(response.data.data.states);
      setStates(response.data.data.states);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async () => {
    if (!selectedState) {
      return toast.error("select a state first");
    }

    try {
      const respon = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          country: selectedCountry,
          state: selectedState,
        }
      );
      console.log(respon.data.data);
      setCities(respon.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries(); // load all countries on mount
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetchStates(); // load states only when a country is selected
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      fetchCities(); // load cities only when a state is selected
    }
  }, [selectedState]);

  return {
    errors,
    formData,
    changeFormDetails,
    createCustomer,
    setSelectedCountry,
    setSelectedState,
    isLoading,
    cities,
    countries,
    states,
    selectedCountry,
    selectedState,
  };
};
