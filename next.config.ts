import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

// import nextMDX from "@next/mdx";
// import rehypePrettyCode from "rehype-pretty-code";
// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [
//       [
//         rehypePrettyCode,
//         {
//           theme: "github-dark",
//           onVisitLine(node) {
//             if (node.children.length === 0) {
//               node.children = [{ type: "text", value: " " }];
//             }
//           },
//         },
//       ],
//     ],
//   },
// });

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};
export default withMDX(nextConfig);
