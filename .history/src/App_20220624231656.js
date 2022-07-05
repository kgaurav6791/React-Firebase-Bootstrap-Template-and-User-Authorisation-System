import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PageNotFound from "./components/PageNotFound";
import Admin from "./pages/Admin";
import AllCustomers from "./pages/AllCustomers";
import AmalgamationOFCITCash from "./pages/AmalgamationOfCITCash";

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/allcustomers"
          element={
            <ProtectedRoute>
              <AllCustomers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/amalgamationofcitcash"
          element={
            <ProtectedRoute>
              <AmalgamationOFCITCash />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cashorderbyrunno"
          element={
            <ProtectedRoute>
              <CashOrderByRunNo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cashroom"
          element={
            <ProtectedRoute>
              <CashRoom />
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
