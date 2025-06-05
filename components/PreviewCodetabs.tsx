"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface PreviewCodeTabsProps {
  preview: React.ReactNode;
  code: string;
}

export function PreviewCodeTabs({ preview, code }: PreviewCodeTabsProps) {
  const [tab, setTab] = useState("preview");

  return (
    <Tabs defaultValue="preview" onValueChange={setTab} className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card>
          <CardContent className="p-6">{preview}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code">
          <Card className="h-[400px]">
 
            <CardContent className="p-6 w-full h-full">
              <pre className="bg-muted p-4 overflow-auto rounded-md overflow-x-auto text-sm">
                <code>{code}</code>
              </pre>
            </CardContent>
          </Card>
      </TabsContent>
    </Tabs>
  );
}
