
import { Button } from "@/registry/new-york/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const data = { 
    slug: "slug-foo-bar",
    Name: "Slug Foo Bar",
};
export default function BarPage() {
  return (
    <main className="flex items-center flex-wrap-reverse gap-3 justify-center ">
      <div>Hello from Bar</div>
      <Button variant={"outline"} asChild>
        <div className="flex flex-row items-center gap-2">
          <Link href={`/components/dynamic-breadcrumb/foo/bar/${data.slug}`}>
            See the Slug Foo Bar
          </Link>
          <ArrowRight className="w-6 h-6" />
        </div>
      </Button>
    </main>
  );
}