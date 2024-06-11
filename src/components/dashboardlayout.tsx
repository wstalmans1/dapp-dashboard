import React, { ReactNode } from 'react';
import SideNav from './sidenav';

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => (
    <div className="flex grow w-full h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <SideNav />
        </div>
        <div className="flex grow w-full md:w-64">
            {children}
        </div>
    </div>
);

export default DashboardLayout;