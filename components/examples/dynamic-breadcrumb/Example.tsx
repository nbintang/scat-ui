"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {DynamicBreadcrumb} from "@/registry/scat-ui/components/dynamic-breadcrumb"; // Sesuaikan dengan path file Anda

const DynamicBreadCrumbExample = () => {
  const pathname = usePathname();
  return (
    <div className="p-4 space-y-5 ">
      <DynamicBreadcrumb path={pathname} />
      <DynamicBreadcrumb 
        path={pathname} 
        separatorClassName="text-gray-400" 
      />
      <DynamicBreadcrumb 
        path={pathname} 
        showSeparator={false} 
      />
      <DynamicBreadcrumb 
        path={pathname} 
        excludeSegments={["admin", "dashboard"]} 
      />
      <DynamicBreadcrumb 
        path={pathname} 
        appendSegments={["settings"]} 
      />
      <DynamicBreadcrumb 
        path={pathname} 
        formatLabel={(label) => label.toUpperCase()} 
      />
    </div>
  );
};

export default DynamicBreadCrumbExample;