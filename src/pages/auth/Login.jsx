import logo from "../../assets/images/kostify-black.png";
import topGarnish from "../../assets/garnish/TopCircle.svg";
import bottomGarnish from "../../assets/garnish/BottomWave.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulasi API call - ganti dengan endpoint login Anda
      // Contoh: const response = await axios.post('/api/login', formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Login data:", {
        email: formData.email,
        password: formData.password,
      });

      // Simulasi response sukses
      const mockResponse = {
        success: true,
        token: "mock-jwt-token-12345",
        user: {
          id: 1,
          email: formData.email,
          name: "John Doe",
        },
      };

      // Simpan token ke localStorage (atau gunakan context/redux)
      // localStorage.setItem('token', mockResponse.token);
      // localStorage.setItem('user', JSON.stringify(mockResponse.user));

      alert("Login successful!");

      // Redirect ke dashboard atau home page
      // window.location.href = '/dashboard';
      // atau gunakan react-router: navigate('/dashboard');
    } catch (error) {
      console.error("Login error:", error);

      // Handle berbagai jenis error
      if (error.response) {
        // Error dari server
        if (error.response.status === 401) {
          setErrors({
            password: "Invalid email or password",
          });
        } else if (error.response.status === 404) {
          setErrors({
            email: "Account not found",
          });
        } else {
          alert("Login failed. Please try again.");
        }
      } else {
        // Network error atau error lainnya
        alert("Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute top-0 left-0 pointer-events-none select-none">
        <img src={topGarnish} alt="Top Garnish" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <img src={bottomGarnish} alt="Bottom Garnish" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center">
            <img className="pb-10" src={logo} alt="Kostify Logo" />
          </div>

          <div className="flex flex-col gap-y-6" onKeyPress={handleKeyPress}>
            <div>
              <input
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${errors.email ? "border-red-500 focus:ring-red-500" : "border-black"}`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                disabled={isLoading}
                autoComplete="email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <div className="relative">
                <input
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${errors.password ? "border-red-500 focus:ring-red-500" : "border-black"}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  disabled={isLoading}
                  autoComplete="current-password"
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors" disabled={isLoading}>
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-2 border-black focus:ring-2 focus:ring-black" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-black hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 border-black rounded-lg font-bold 
                           bg-white text-black
                           hover:bg-black hover:text-white 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300 ease-in-out
                           transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? "SIGNING IN..." : "SIGN IN"}
            </button>

            <div className="text-center text-sm mt-2">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/register" className="text-black font-bold hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
