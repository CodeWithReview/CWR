import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Templates from "@/components/Templates";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const SignUp = lazy(() => import("@/pages/SignUp"));
const SignIn = lazy(() => import("@/pages/SignIn"));

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
      <Route
        path="/signup"
        element={
          <Suspense>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/signin"
        element={
          <Suspense>
            <SignIn />
          </Suspense>
        }
      />
    </Route>
  )
);
