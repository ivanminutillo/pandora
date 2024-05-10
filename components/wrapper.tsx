"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { WagmiProvider } from 'wagmi' 
import { config } from '../config' 
import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ReactQueryProvider = ({ children, attribute, defaultTheme, enableSystem, disableTransitionOnChange }: { children: React.ReactNode, attribute: string, defaultTheme: string, enableSystem: boolean, disableTransitionOnChange: boolean }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
        <NextThemesProvider  attribute={attribute} defaultTheme={defaultTheme} enableSystem={enableSystem} disableTransitionOnChange={disableTransitionOnChange}>
          {children}
        </NextThemesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default ReactQueryProvider;