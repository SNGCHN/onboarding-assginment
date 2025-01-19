import { PropsWithChildren } from "react";
import Header from "./Header";

function Page({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 py-8">{children}</main>
    </div>
  );
}

export default Page;
