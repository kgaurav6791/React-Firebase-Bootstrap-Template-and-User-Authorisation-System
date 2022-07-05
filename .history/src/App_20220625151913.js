import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import "./Sidebar.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PageNotFound from "./components/PageNotFound";
import Admin from "./pages/Admin";
import AllCustomers from "./pages/AllCustomers";
import AmalgamationOFCITCash from "./pages/AmalgamationOfCITCash";
import CashOrderByRunNo from "./pages/CashOrderByRUNNo";
import CashRoom from "./pages/CashRoom";
import CashSheetToPrint from "./pages/CashSheetToPrint";
import ChangeOrderBySummary from "./pages/ChangeOrderBySummary";
import CoinBalance from "./pages/CoinBalance";
import CoinRoom from "./pages/CoinRoom";
import CoinSale from "./pages/CoinSale";
import DailyCITBalance from "./pages/DailyCITBalance";
import DailyPOOLBalance from "./pages/DailyPOOLBalance";
import DispatchBalance from "./pages/DispatchBalance";
import DispatchLabels from "./pages/DispatchLabels";
import Drawings from "./pages/Drawings";
import InputChangeOrders from "./pages/InputChangeOrders";
import Lodgment from "./pages/Lodgment";
import ManualInputChangeOfOrders from "./pages/ManualInputChangeOfOrders";
import ManualInputFloat from "./pages/ManualInputFloat";
import ProcessedCITBalance from "./pages/ProcessedCITBalance";
import ReceivedChangePayment from "./pages/ReceivedChangePayment";
import ShiftBalanceSheet from "./pages/ShiftBalanceSheet";
import Monday from "./pages/Monday";
import Tuesday from "./pages/Tuesday";
import Wednesday from "./pages/Wednesday";
import Thursday from "./pages/Thursday";
import Friday from "./pages/Friday";

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
        <Route
          path="/cashsheettoprint"
          element={
            <ProtectedRoute>
              <CashSheetToPrint />
            </ProtectedRoute>
          }
        />
        <Route
          path="/changeorderbysummary"
          element={
            <ProtectedRoute>
              <ChangeOrderBySummary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coinbalance"
          element={
            <ProtectedRoute>
              <CoinBalance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coinroom"
          element={
            <ProtectedRoute>
              <CoinRoom />
            </ProtectedRoute>
          }
        />
        <Route
          path="/coinsale"
          element={
            <ProtectedRoute>
              <CoinSale />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dailycitbalance"
          element={
            <ProtectedRoute>
              <DailyCITBalance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dailypoolbalance"
          element={
            <ProtectedRoute>
              <DailyPOOLBalance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dispatchbalance"
          element={
            <ProtectedRoute>
              <DispatchBalance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dispatchlabels"
          element={
            <ProtectedRoute>
              <DispatchLabels />
            </ProtectedRoute>
          }
        />
        <Route
          path="/drawings"
          element={
            <ProtectedRoute>
              <Drawings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inputchangeorders"
          element={
            <ProtectedRoute>
              <InputChangeOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lodgment"
          element={
            <ProtectedRoute>
              <Lodgment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manualinputchangeoforders"
          element={
            <ProtectedRoute>
              <ManualInputChangeOfOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maualinputfloat"
          element={
            <ProtectedRoute>
              <ManualInputFloat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/processedcitbalance"
          element={
            <ProtectedRoute>
              <ProcessedCITBalance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receivedchangepayment"
          element={
            <ProtectedRoute>
              <ReceivedChangePayment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shiftbalancesheet"
          element={
            <ProtectedRoute>
              <ShiftBalanceSheet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/monday"
          element={
            <ProtectedRoute>
              <Monday />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tuesday"
          element={
            <ProtectedRoute>
              <Tuesday />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wednesday"
          element={
            <ProtectedRoute>
              <Wednesday />
            </ProtectedRoute>
          }
        />
        <Route
          path="/thursday"
          element={
            <ProtectedRoute>
              <Thursday />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friday"
          element={
            <ProtectedRoute>
              <Friday />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
