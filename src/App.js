import CarContextProvider from "./contexts/CarContext";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import BasketProvider from "./contexts/BasketContext.js";
import Details from "./pages/Details";
import PaymentPage from "./pages/PaymentPage";
import toast, { Toaster } from "react-hot-toast";
import ConfirmOrder from "./pages/ConfirmOrder";
import OrderReceipt from "./pages/OrderReceipt";
import Membership from "./pages/Membership";
import MemberProvider from "./contexts/MemberContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarContextProvider>
          <MemberProvider>
            <BasketProvider>
              <Toaster position="top-center" />
              <Navbar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/orderReceipt">
                <OrderReceipt />
              </Route>
              <Route exact path="/details/:vin" component={Details} />
              <Route exact path="/payment">
                <PaymentPage />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/checkout">
                <ConfirmOrder />
              </Route>
              <Route exact path="/membership">
                <Membership />
              </Route>
            </BasketProvider>
          </MemberProvider>
        </CarContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
