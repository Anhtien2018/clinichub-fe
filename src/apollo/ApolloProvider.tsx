'use client';

import React from 'react';
import { createApolloClient } from '@/apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = createApolloClient();

interface ApolloProviderProps {
  children: React.ReactNode;
}

export function ClientApolloProvider({ children }: ApolloProviderProps): React.JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
