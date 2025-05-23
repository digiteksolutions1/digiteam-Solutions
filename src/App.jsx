import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import AccountingServices from './Pages/AccountingService'
import Careers from './Pages/Careers'
import Contact from './Pages/Contact'
import ComingSoon from './Pages/ComingSoon'
import ThankYouPage from './Pages/ThankYou'

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isThankYouPage = location.pathname === '/thankYou';
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isThankYouPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isThankYouPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/accounting" element={<AccountingServices />} />
          <Route path="/services/web" element={<ComingSoon />} />
          <Route path="/services/ai" element={<ComingSoon />} />
          <Route path="/services/recruitment" element={<ComingSoon />} />
          <Route path="/services/sales" element={<ComingSoon />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankYou" element={<ThankYouPage />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  )
}

export default App