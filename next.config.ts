import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      // para desarrollo local
      "https://ministerio-plataforma.vercel.app", // reemplaza por tu dominio real en producción
    ],
  },
};

export default nextConfig;
