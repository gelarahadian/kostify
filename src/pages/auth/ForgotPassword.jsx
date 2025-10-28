import { useState } from "react";
import logo from "../../assets/images/kostify-black.png";
import topGarnish from "../../assets/garnish/TopCircle.svg";
import bottomGarnish from "../../assets/garnish/BottomWave.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSendResetLink = async (e) => {
    e.preventDefault();

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulasi API call - ganti dengan endpoint forgot password Anda
      // Contoh: await axios.post('/api/forgot-password', { email });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Reset link sent to:", email);

      // Tampilkan success state
      setIsSuccess(true);
    } catch (error) {
      console.error("Forgot password error:", error);

      if (error.response) {
        if (error.response.status === 404) {
          setError("Email not found. Please check and try again.");
        } else {
          setError("Failed to send reset link. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendResetLink(e);
    }
  };

  const navigate = useNavigate();

  const handleBackToLogin = () => {
    // Redirect ke halaman login
    // window.location.href = '/login';
    // atau gunakan: navigate('/login');
    // console.log("Back to login");
    navigate("/login");
  };

  if (isSuccess) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white">
        <div className="absolute top-0 left-0 -z-10 pointer-events-none select-none opacity-30">
          <img src={topGarnish} alt="Top Garnish" aria-hidden="true" />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 pointer-events-none select-none opacity-30">
          <img src={bottomGarnish} alt="Bottom Garnish" aria-hidden="true" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md text-center">
            <div className="flex flex-col items-center mb-8">
              <img className="pb-10" src={logo} alt="Kostify Logo" />
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-black shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                We've sent a password reset link to
                <br />
                <span className="font-semibold text-black">{email}</span>
              </p>
              <p className="text-sm text-gray-500 mb-8">Please check your inbox and click on the link to reset your password. If you don't see it, check your spam folder.</p>

              <button
                onClick={handleBackToLogin}
                className="w-full px-4 py-3 border-2 border-black rounded-lg font-bold 
                         bg-black text-white
                         hover:bg-white hover:text-black 
                         transition-all duration-300 ease-in-out
                         transform hover:scale-[1.02] active:scale-[0.98]"
              >
                BACK TO LOGIN
              </button>

              <div className="mt-6 text-sm text-gray-600">
                Didn't receive the email?{" "}
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail("");
                  }}
                  className="text-black font-bold hover:underline"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute top-0 left-0 pointer-events-none select-none">
        <img src={topGarnish} alt="Top Garnish" aria-hidden="true" />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <img src={bottomGarnish} alt="Bottom Garnish" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md self-center mb-10">
          <div className="flex flex-col items-center mb-8">
            <img className="pb-6" src={logo} alt="Kostify Logo" />
          </div>

          <h1 className="text-2xl font-bold mb-2 text-center">Forgot Password</h1>
          <p className="text-gray-600 text-sm text-center">
            Kami akan mengirimkan pesan email untuk membantu
            <br />
            mereset kata sandi Anda.
          </p>
        </div>

        <div className="flex flex-col gap-y-5 self-center w-1/4" onKeyPress={handleKeyPress}>
          <div>
            <input
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${error ? "border-red-500 focus:ring-red-500" : "border-black focus:ring-black"}`}
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Your Email Address"
              disabled={isLoading}
              autoComplete="email"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            onClick={handleSendResetLink}
            disabled={isLoading || !email}
            className="w-full px-4 py-3 border-2 border-black rounded-lg font-bold 
                       bg-white text-black
                       hover:bg-black hover:text-white 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 ease-in-out
                       transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? "SENDING..." : "SEND RESET LINK"}
          </button>

          <div className="absolute bottom-10 self-center text-sm mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register" className="text-red-500 font-bold hover:underline">
              Sign up!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
