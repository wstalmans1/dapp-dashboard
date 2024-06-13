import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/sidenav';
import PartySplit from './components/partysplit';
import PayWithMetamask from './components/paywithmetamask';
import PayWithSigner from './components/paywithsigner';
import './styles/App.css';

// App component defining routes and layout
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-british-racing-green">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>
      <main className="flex grow w-full">
        <Routes>
          <Route path="/partysplit" element={<PartySplit />} />
          <Route path="/paywithmetamask" element={<PayWithMetamask />} />
          <Route path="/paywithsigner" element={<PayWithSigner />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
