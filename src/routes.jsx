import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout.jsx";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const CollaboratePage = lazy(() => import("./pages/CollaboratePage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.jsx"));
const TermsPage = lazy(() => import("./pages/TermsPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function PageLoader() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
    </div>
  );
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "projects",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <ProjectsPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "collaborate",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <CollaboratePage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "contact",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "privacy",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <PrivacyPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "terms",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <TermsPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "*",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
];

export default routes;
