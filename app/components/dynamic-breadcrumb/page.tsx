import DynamicBreadCrumbExample from "@/components/examples/dynamic-breadcrumb/Example";
import { PreviewCodeTabs } from "@/components/PreviewCodetabs";
import { Button } from "@/registry/new-york/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DynamicBreadCrumbPage() {
  const preview = <DynamicBreadCrumbExample />;

  const code = `"use client";
  import { DynamicBreadcrumb } from "@/components/scat-ui/dynamic-breadcrumb/DynamicBreadcrumb";
  import { usePathname } from "next/navigation";
  import React from "react";
  
  const DynamicBreadCrumbExample = () => {
    const pathname = usePathname();
    return <DynamicBreadcrumb pathname={pathname} />;
  };
  
  export default DynamicBreadCrumbExample;`.trim();
  return (
    <div>
      <PreviewCodeTabs preview={preview} code={code} />
      <div className="flex flex-wrap-reverse items-center gap-3">
        <h1 className="text-sm text-muted-foreground font-semibold">
          See the example of how dynamic breadcrumb work
        </h1>
        <Button variant={"link"} asChild>
          <Link href={"/components/dynamic-breadcrumb/foo"}>
            See the Foo
            <ArrowRight className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
