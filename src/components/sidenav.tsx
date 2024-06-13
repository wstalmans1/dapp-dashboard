import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PowerIcon, UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

// Define the links for navigation
const links = [
  { name: 'Partysplit', href: '/partysplit', icon: HomeIcon },
  { name: 'Pay with Metamask', href: '/paywithmetamask', icon: DocumentDuplicateIcon },
  { name: 'Pay with Signer', href: '/paywithsigner', icon: UserGroupIcon },
];

// SideNav component providing sidebar with navigation links and sign-out button
const SideNav: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-gradient-to-r from-green-900 to-rich-gold p-4 md:h-40" to="/">
        <div className="w-32 text-white md:w-40">Team Blockchain Advisors</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-900 text-gray-50 p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3',
                { 'bg-green-800 text-gray-50': location.pathname === link.href }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        <div className="hidden h-auto w-full grow rounded-md bg-amber-50 md:block"></div>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-amber-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
