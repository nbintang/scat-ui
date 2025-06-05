"use client";
import { DynamicBreadcrumb } from "@/registry/scat-ui/components/dynamic-breadcrumb/DynamicBreadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const DynamicBreadCrumbExample = () => {
  const pathname = usePathname();
  return <DynamicBreadcrumb pathname={pathname} />;
};

export default DynamicBreadCrumbExample;
