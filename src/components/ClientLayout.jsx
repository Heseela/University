"use client";

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import TopScroll from "@/components/UI/TopScroll";
import { useEffect, useState } from "react";
import { LoadingProvider } from "@/components/Global/LoadingContext";
import Loading from "@/components/Global/Loader";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isStudentLoginPage = pathname === '/student-login';

  return (
    <LoadingProvider>
      <Loading />
      {!isStudentLoginPage && <TopScroll />}
      {!isStudentLoginPage && <Navbar />}
      {children}
      <Toaster position="top-right" />
      {!isStudentLoginPage && <Footer />}
    </LoadingProvider>
  );
}
