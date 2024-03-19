'use client'

import {ClerkProvider} from '@clerk/nextjs';
import {esES} from '@clerk/localizations';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {


  return (
      <ClerkProvider localization={esES}>
        {children}
        </ClerkProvider>
  );
};