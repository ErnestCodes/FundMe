import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import PaymentError from "./components/PaymentError";
import PaymentSuccess from "./components/PaymentSuccess";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { AuthProvider } from "./hooks/UseAuth";
import Dashboard from "./components/Dashboard";
import PasswordReset from "./components/auth/PasswordReset";
import Onboarding from "./components/auth/Onboarding";
import { setWalletIdFromParams } from "./features/wallet/walletSlice";
import { useDispatch } from "react-redux";
import VerificationSuccess from "./components/VerificationSuccess";

// GlobalGiving Api key: c857816a-f007-41db-a93b-c8cf53b7622c

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const data = queryParams.get("data");
  const dispatch = useDispatch();

  if (data) {
    dispatch(setWalletIdFromParams(data));
    console.log(data);
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.paymentError} element={<PaymentError />} />
          <Route path={routes.paymentSuccess} element={<PaymentSuccess />} />
          <Route path={routes.start} element={<Register />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.resetPassword} element={<PasswordReset />} />
          <Route path={routes.onboarding} element={<Onboarding />} />
          <Route path={routes.complete} element={<VerificationSuccess />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
