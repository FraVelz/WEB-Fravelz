import type { NextConfig } from "next";

import { getSecurityHeaders } from "./security-headers";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/pdfs/:path*",
        headers: getSecurityHeaders({ embeddable: true }),
      },
      {
        source: "/((?!pdfs/).*)",
        headers: getSecurityHeaders(),
      },
    ];
  },
};

export default nextConfig;
