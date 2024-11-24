import SideNavigation from "@/_components/SideNavigation";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[16rem_1fr]  gap-12 h-full">
      <SideNavigation />
      <div className="py-1 h-[75vh] overflow-y-auto">{children}</div>
    </div>
  );
}
