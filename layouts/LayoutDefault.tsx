import '@sei-js/sei-global-wallet/eip6963';
import React from "react";
import "./style.css";
import "./tailwind.css";
import { createThirdwebClient } from 'thirdweb';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectButton, ThirdwebProvider } from 'thirdweb/react';
import ComponetA from '../components/Link';

export const client = createThirdwebClient({
  clientId: "CLIENT_ID",
});

const queryClient = new QueryClient();

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      {queryClient && <QueryClientProvider client={queryClient}>
        <div className='flex justify-center items-center flex-col h-screen w-screen bg-zinc-900 gap-4'>
          <ConnectButton
            client={client}
            wallets={[]}
            showAllWallets={false}
            connectModal={{ size: "compact", showThirdwebBranding: false }}
            theme={'dark'}
            appMetadata={{
              name: "FFF",
              // logoUrl: logoUrl,
            }}
            detailsButton={{
              className: "wallet-profile",
            }}
          />
          {children}
        </div>
      </QueryClientProvider>}
    </ThirdwebProvider>
  );
}