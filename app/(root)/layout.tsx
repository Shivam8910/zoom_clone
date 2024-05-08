import React, { ReactNode } from "react";

import StreamVideoProvider from "@/providers/StreamClientProvider";

console.log(typeof StreamVideoProvider);
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
