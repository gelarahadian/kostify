import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { QueryProvider } from "./components/providers/QueryProvider";
import ToasterProvider from "./components/providers/ToasterProvider";
import EventBusProvider from "./components/providers/EventBusProvider";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/dashboard/Home";
import Rooms from "./pages/dashboard/Rooms";
import Residents from "./pages/dashboard/Residents";
import PaymentReport from "./pages/dashboard/PaymentReport";
import FinancialReports from "./pages/dashboard/FinancialReports";
import Helps from "./pages/Helps";

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
                  <Route index element={<Home />} />
                  <Route path="/dashboard/rooms" element={<Rooms />} />
                  <Route path="/dashboard/residents" element={<Residents />} />
                  <Route
                    path="/dashboard/payment-reports"
                    element={<PaymentReport />}
                  />
                  <Route
                    path="/dashboard/financial-reports"
                    element={<FinancialReports />}
                  />
                </Route>

                <Route path="/helps" element={<Helps />} />
              </Routes>
            </EventBusProvider>
          </Router>
        </ToasterProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
