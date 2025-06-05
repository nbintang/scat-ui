"use client";
import * as React from "react";
import { ProgressProvider } from "@bprogress/next/app";

type ProgressProviderProps = {
  children: React.ReactNode;
};
export default function ProgressLoadProvider({
  children,
}: ProgressProviderProps) {
  return (
    <ProgressProvider
      height="4px"
      color="#111"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
