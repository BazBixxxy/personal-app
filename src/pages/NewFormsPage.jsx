import axios from "axios";
import React, { useState } from "react";

const NewFormPage = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
    postalCode: "",
    road: "",
    neighbourhood: "",
    suburb: "",
    normalizedCity: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) {
      alert("Please enter a valid address");
      return;
    }

    // Start loading
    setLoading(true);

    try {
      // Encode the query and call the OpenCage API
      const encodedQuery = encodeURIComponent(query);
      const apiKey = "d4defcd12f7f4305b4f909a2207f0b86";
      const res = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodedQuery}&key=${apiKey}`
      );

      // Get the first result's components (if available)
      const result = res.data.results[0]?.components;
      if (result) {
        setLocation({
          country: result.country || "",
          state: result.state || "",
          city: result.city || "",
          postalCode: result.postcode || "",
          road: result.road || "",
          neighbourhood: result.neighbourhood || "",
          suburb: result.suburb || "",
          normalizedCity: result._normalized_city || "",
          address: res.data.results[0]?.formatted,
        });
      } else {
        alert("No results found for this address.");
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
      alert("Error fetching location details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-20">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Enter an Address to Get Location Details
      </h2>

      {/* Address Input Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="query"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter an address (e.g. Frauenplan 1, 99423 Weimar, Germany)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit Address"}
          </button>
        </div>
      </form>

      {/* Display Location Information */}
      <div className="location-details">
        <h3 className="text-lg font-semibold mb-4">Location Details</h3>
        {location.address && (
          <div>
            <p>
              <strong>Formatted Address:</strong> {location.address}
            </p>
            <p>
              <strong>Country:</strong> {location.country}
            </p>
            <p>
              <strong>State:</strong> {location.state}
            </p>
            <p>
              <strong>City:</strong> {location.city}
            </p>
            <p>
              <strong>Postal Code:</strong> {location.postalCode}
            </p>
            <p>
              <strong>Road:</strong> {location.road}
            </p>
            <p>
              <strong>Neighbourhood:</strong> {location.neighbourhood}
            </p>
            <p>
              <strong>Suburb:</strong> {location.suburb}
            </p>
            <p>
              <strong>Normalized City:</strong> {location.normalizedCity}
            </p>
          </div>
        )}
        {!location.address && !loading && (
          <p>No location details available yet.</p>
        )}
      </div>
    </div>
  );
};

export default NewFormPage;
