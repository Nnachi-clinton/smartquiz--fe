import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "../src/components/common/ErrorBoundary.js";
import AuthState from "../src/context/auth/AuthState.js";
import { GlobalProvider } from "../src/context/GlobalState.js";
import HomePage from "../src/pages/Home.js";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <AuthState>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
