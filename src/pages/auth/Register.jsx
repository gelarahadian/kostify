import logo from "../../assets/images/kostify-black.png";
import topGarnish from "../../assets/garnish/TopCircle.svg";
import bottomGarnish from "../../assets/garnish/BottomWave.svg";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error saat user mulai mengetik
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulasi API call - ganti dengan API endpoint Anda
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Registration data:", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      // Reset form setelah sukses
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      alert("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRegister(e);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute top-0 left-0 z-10 pointer-events-none select-none">
        <img src={topGarnish} alt="Top Garnish" />
      </div>
      <div className="absolute bottom-0 right-0 z-10 pointer-events-none select-none">
        <img src={bottomGarnish} alt="Bottom Garnish" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center">
            <img className="pb-10" src={logo} alt="Kostify Logo" />
          </div>

          <div className="flex flex-col gap-y-4" onKeyPress={handleKeyPress}>
            <div>
              <input
                className={`w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                disabled={isLoading}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <input
                className={`w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${errors.email ? "border-red-500" : "border-gray-300"}`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                disabled={isLoading}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                className={`w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${errors.password ? "border-red-500" : "border-gray-300"}`}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                disabled={isLoading}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <input
                className={`w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                disabled={isLoading}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <button
              onClick={handleRegister}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 border-black rounded-lg font-bold 
                       bg-white text-black
                       hover:bg-black hover:text-white 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 ease-in-out
                       transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? "SIGNING UP..." : "SIGN UP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
