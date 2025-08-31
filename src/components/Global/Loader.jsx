"use client";
import { ClipLoader } from "react-spinners";
import { useLoading } from "./LoadingContext";

const Loading = ({ color = "#213F9B", size = 50 }) => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-white bg-opacity-90">
      <ClipLoader color={color} size={size} />
    </div>
  );
};

export default Loading;