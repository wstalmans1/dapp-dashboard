import { Link, useLocation } from 'react-router-dom';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const links = [
  { name: 'Partysplit', href: '/partysplit/', icon: HomeIcon },
  { name: 'Pay with Metamask', href: '/paywithmetamask/', icon: DocumentDuplicateIcon },
  { name: 'Pay with Signer', href: '/paywithsigner/', icon: UserGroupIcon },
];

const NavLinks = () => {
  const location = useLocation();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} to={link.href} className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-amber-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3', { 'bg-sky-100 text-blue-600': location.pathname === link.href })}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
