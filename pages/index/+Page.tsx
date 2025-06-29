import { lazy, Suspense } from "react";
const ComponetA = lazy(() => import('../../components/ComponetA'));

export default function Page() {
  return ((false) &&
    <Suspense fallback={<></>}>
      <ComponetA />
    </Suspense>
  );
}
