"use client";

import { useEffect } from "react";
import { eventBus } from "../../lib/eventBus";
import { useNavigate } from "react-router-dom";

const EventBusProvider = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    eventBus.on("token-expired", () => {
      navigate("/login");
    });
  }, []);
  return <>{children}</>;
};

export default EventBusProvider;
