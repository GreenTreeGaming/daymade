import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // An isolated cache lets QA run beside an existing developer-owned server.
  distDir: process.env.DAYMADE_VERIFY === "1" ? ".next-verify" : ".next",
  cacheComponents: true,
  partialPrefetching: true,
};
export default nextConfig;
