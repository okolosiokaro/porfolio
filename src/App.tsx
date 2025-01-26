import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "./core/hooks/ScrollToTop";
import CustomLoader from "./core/components/CustomLoader";
import Navbar from "./core/components/Navbar";
import Footer from "./core/components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
// const Resume = React.lazy(() => import("./"));
const About = React.lazy(() => import("./pages/About"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Toaster />

      <Navbar />

      <div className="min-h-[50vh]">
        <Suspense fallback={<CustomLoader />}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
