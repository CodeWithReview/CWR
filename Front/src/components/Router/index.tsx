import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Templates from "@/components/Templates";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Templates />}>
      <Route
        index
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
    </Route>
  )
);
