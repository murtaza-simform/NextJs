"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "50vh" }}
    >
      <div className="text-2xl text-red-500">Error fetching users data!</div>
    </div>
  );
}
