import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../src/components/common/ErrorBoundary.js";
import AuthState from "../src/context/auth/AuthState.js";
import { GlobalProvider } from "../src/context/GlobalState.js";
import HomePage from "../src/pages/Home.js";
import Login from "../src/pages/authentication/Login.js";
import Signup from "../src/pages/authentication/signup/Signup.js";
import ResetPassword from "./pages/authentication/resetpassword/ResetPassword.js";
import ChangePassword from "./pages/authentication/changepassword/ChangePassword.js";
import EmailConfirmation from "./pages/authentication/modal/Emailsent.js";
import PasswordUpdate from "./pages/authentication/modal/PasswordUpdate.js";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <AuthState>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/emailsent" element={<EmailConfirmation />} />
                <Route path="/PasswordUpdate" element={<PasswordUpdate />} />
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
