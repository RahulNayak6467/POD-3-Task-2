// app/providers.tsx
"use client"; // this whole file runs on client only

interface ProviderProps {
  children: React.ReactNode;
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  //                              ↑
  //                    created on client, never touches server

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
