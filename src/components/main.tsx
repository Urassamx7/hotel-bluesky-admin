import type { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative mx-2 my-3 flex-1 overflow-hidden rounded-xl bg-background focus:outline-none md:mx-0 md:my-4 pr-3">
      <div className="flex h-full flex-col mb-2 mt-2 p-4 md:p-8 bg-backgroundColor rounded-xl">
        {children}
      </div>
    </main>
  );
};

export default Main;
