import React from 'react';
import { useLocation } from 'react-router-dom';
import { CatalogIndexPage } from '@backstage/plugin-catalog';

export const ResourcesCatalogPage = () => {
  const location = useLocation();

  // Extrae el tipo desde la ruta, por ejemplo: /catalog/resource
  const kind = location.pathname.split('/')[1]; // "resources" o "systems"

  const kindMap: Record<string, string> = {
    resources: 'Resource',
    systems: 'System',
  };

  const initialKind = kindMap[kind] || undefined;

  return (
    <CatalogIndexPage
      initialKind={initialKind}
      ownerPickerMode="all"
      initiallySelectedFilter="all"
    />
  );
};
