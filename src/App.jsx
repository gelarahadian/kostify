import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { QueryProvider } from "./components/providers/QueryProvider";
import ToasterProvider from "./components/providers/ToasterProvider";
import EventBusProvider from "./components/providers/EventBusProvider";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";

function App() {
  return (
    <div className="font-poppins">
      <QueryProvider>
        <ToasterProvider>
          <Router>
            <EventBusProvider>
              <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* Dashboard */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<DashboardHome />} />
                </Route>
              </Routes>
            </EventBusProvider>
          </Router>
        </ToasterProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
