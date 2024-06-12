// src/routes.ts
import React from 'react';
import PartySplit from './partysplit';
import PayWithMetamask from './paywithmetamask';
import PayWithSigner from './paywithsigner';

interface RouteConfig {
  path: string;
  element: React.FC<{}>;
  label: string;
}

export const routes: RouteConfig[] = [
  { path: '/partysplit', element: PartySplit, label: 'Party Split' },
  { path: '/paywithmetamask', element: PayWithMetamask, label: 'Pay with Metamask' },
  { path: '/paywithsigner', element: PayWithSigner, label: 'Pay with Signer' },
];
