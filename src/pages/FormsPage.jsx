import axios from "axios";
import React, { useEffect, useState } from "react";

const FormsPage = () => {
  const [location, setLocation] = useState({
    country: "",
    city: "",
    state: "",
    road: "",
    city_district: "",
    street: "",
    postalCode: "",
    lat: "",
    lon: "",
    address: "",
    neighbourhood: "",
    suburb: "",
    normalizedCity: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocation((prevState) => ({
      ...prevState,
      [name]: value || "", // Prevent undefined values
    }));
  };

  // Use browser's Geolocation API to autofill latitude and longitude
  const autofillLatLong = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prevState) => ({
            ...prevState,
            lat: latitude || "",
            lon: longitude || "",
          }));
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    // Automatically get user's location when component mounts
    autofillLatLong();
  }, []);

  const [loading, setLoading] = useState(false);

  // Helper function to encode the latitude and longitude in the required format
  const convertLatLongToSearchParam = (lat, lon) => {
    return `${encodeURIComponent(lat)}%2C${encodeURIComponent(lon)}`;
  };

  // Fetch user's location details using OpenCage API
  useEffect(() => {
    const fetchUserLocationDetails = async () => {
      if (location.lat && location.lon) {
        const searchParam = convertLatLongToSearchParam(
          location.lat,
          location.lon
        );
        setLoading(true);
        try {
          const res = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${searchParam}&key=d4defcd12f7f4305b4f909a2207f0b86`
          );
          const result = res.data.results[0]?.components;
          if (result) {
            setLocation((prevState) => ({
              ...prevState,
              country: result.country || "",
              state: result.state || "",
              city: result.city || "",
              postalCode: result.postcode || "",
              road: result.road || "",
              neighbourhood: result.neighbourhood || "",
              suburb: result.suburb || "",
              normalizedCity: result._normalized_city || "",
              address: res.data.results[0]?.formatted,
            }));
          }
        } catch (error) {
          console.error("Error fetching location details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserLocationDetails();
  }, [location.lat, location.lon]);
  console.log(location);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location); // Here, you can handle the data submission logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-screen-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-20"
    >
      <h2 className="text-xl font-semibold mb-6 text-center">
        Enter Your Location Details
      </h2>

      {/* Country */}
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={location.country || ""}
          onChange={handleInputChange}
          placeholder="Enter your country"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* City */}
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={location.city || ""}
          onChange={handleInputChange}
          placeholder="Enter your city"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Street */}
      <div className="mb-4">
        <label
          htmlFor="street"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Street Address
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={location.address || ""}
          onChange={handleInputChange}
          placeholder="Enter your street address"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Latitude */}
      <div className="mb-4">
        <label
          htmlFor="lat"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Latitude
        </label>
        <input
          type="text"
          id="lat"
          name="lat"
          value={location.lat || ""}
          onChange={handleInputChange}
          placeholder="Enter latitude"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Longitude */}
      <div className="mb-4">
        <label
          htmlFor="lon"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Longitude
        </label>
        <input
          type="text"
          id="lon"
          name="lon"
          value={location.lon || ""}
          onChange={handleInputChange}
          placeholder="Enter longitude"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="my-4 flex flex-col gap-2">
        <p>{location.country}</p>
        <p>{location.region}</p>
        <p>{location.city}</p>
        <p>{location.address}</p>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Submit Location
        </button>
      </div>
    </form>
  );
};

export default FormsPage;
