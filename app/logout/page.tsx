"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, [router]);

  return <div className="p-4 text-gray-600">Logging out...</div>;
}
