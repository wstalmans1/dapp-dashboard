import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/dashboardlayout';
import PartySplit from './components/partysplit';
import PayWithMetamask from './components/paywithmetamask';
import PayWithSigner from './components/paywithsigner';

export default function App() {
  return (
      <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-british-racing-green">
        <>
          <DashboardLayout>
            <Routes>
              <Route path="/partysplit" element={<PartySplit />} />
              <Route path="/paywithmetamask" element={<PayWithMetamask />} />
              <Route path="/paywithsigner" element={<PayWithSigner />} />
            </Routes>
          </DashboardLayout>
        </>
      </div>
  );
}
