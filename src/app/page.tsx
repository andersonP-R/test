export const revalidate = 60; // 60 segundos

import { InitialLoader } from "@/components";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <InitialLoader />
    </div>
  );
}
