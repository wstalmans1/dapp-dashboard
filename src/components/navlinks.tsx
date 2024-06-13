import { Link, useLocation } from 'react-router-dom';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const links = [
  { name: 'Partysplit', href: '/partysplit', icon: HomeIcon },
  { name: 'Pay with Metamask', href: '/paywithmetamask', icon: DocumentDuplicateIcon },
  { name: 'Pay with Signer', href: '/paywithsigner', icon: UserGroupIcon },
  { name: 'test app', href: '/testapp', icon: UserGroupIcon },
];

const NavLinks = () => {
  const location = useLocation(); // Accesses the current location
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon; // Destructure the icon from the link object
        console.log(location.pathname);
        console.log(link.href);
        return (
          <Link key={link.name} to={link.href} className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-900 p-3 text-sm font-medium text-green-50 hover:bg-green-700 hover:text-green-50 md:flex-none md:justify-start md:p-2 md:px-3", { 'bg-green-700 text-green-50': location.pathname === link.href })}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
