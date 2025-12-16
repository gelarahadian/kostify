import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { QueryProvider } from "./components/providers/QueryProvider";
import ToasterProvider from "./components/providers/ToasterProvider";
import EventBusProvider from "./components/providers/EventBusProvider";

function App() {
  return (
    <div>
      <QueryProvider>
        <ToasterProvider>
          <EventBusProvider>
            <Router>
              <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
              </Routes>
            </Router>
          </EventBusProvider>
        </ToasterProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
