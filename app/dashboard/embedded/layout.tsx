import { ReactNode, Suspense } from "react";
import Profile from "@/components/profile";
import Nav from "@/components/nav";

export default function Customization({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="min-h-screen dark:bg-black">{children}</div>
    </div>
  );
}
