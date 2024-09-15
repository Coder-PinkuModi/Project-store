import { useState } from "react";
import axios from "axios";

// YET TO BE DESIGNED

const Signup = () => {
  // Form state to match the Mongoose schema
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phoneNumber: "",
    email: "",
    password: "",
    reEnterPassword: "",
    pincode: "",
  });

  // Error and success message states
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button while processing
    setError(null); // Reset errors before a new request
    setSuccess(null); // Reset success message before new request

    try {
      const response = await axios.post("/api/signup", formData);
      setSuccess("User signed up successfully!");
      console.log("Sign up success:", response.data);
      setFormData({
        firstName: "",
        secondName: "",
        phoneNumber: "",
        email: "",
        password: "",
        reEnterPassword: "",
        pincode: "",
      });
    } catch (error) {
      console.error("Sign up error:", error);
      setError("Sign up failed. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className='h-screen w-screen justify-center items-center'>
      <div className="form min-h-fit min-w-fit flex flex-col">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          {error && <h4 style={{ color: "red" }}>{error}</h4>}

          {/* First Name Input */}
          <input
            type="text"
            name="firstName"
            required
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          {/* Second Name Input */}
          <input
            type="text"
            name="secondName"
            required
            placeholder="Second Name"
            value={formData.secondName}
            onChange={handleChange}
          />

          {/* Phone Number Input */}
          <input
            type="text"
            name="phoneNumber"
            required
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* re-Enter-Password Input for users to confirm and remember*/}
          <input
            type="password"
            name="reEnterPassword"
            required
            placeholder="Re-Enter Password"
            value={formData.reEnterPassword}
            onChange={handleChange}
          />

          {/* Pincode Input */}
          <input
            type="number"
            name="pincode"
            required
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSubmitting} className='cursor-pointer'>
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
