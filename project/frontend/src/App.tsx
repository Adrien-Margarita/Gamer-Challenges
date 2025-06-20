import "./index.css"
import { createRoot } from "react-dom/client"
import Router from "./Router.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider as JotaiProvider } from "jotai"
import { BrowserRouter } from "react-router"
import AuthProvider from "./stores/AuthProvider.tsx"
import { Toaster } from "react-hot-toast";

const container = document.getElementById("root")
if (!container) {
  throw new Error("Root container missing in index.html")
}

const queryClient = new QueryClient()

const AppTree = (
  <QueryClientProvider client={queryClient}>
    <JotaiProvider>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
      <Toaster position="top-right" toastOptions={{
        className: "border-1 border-purple-700 rounded-lg shadow-xl border-primary",
        style: {
          background: "#12243E",
          color: "#fff",
          fontFamily: "Montserrat, sans-serif !important",
          fontWeight: "400",
          fontSize: "16px",
        },
        duration: 4500
      }} />
    </JotaiProvider>
  </QueryClientProvider>
)

createRoot(container).render(
  import.meta.env.DEV ? AppTree : AppTree
)