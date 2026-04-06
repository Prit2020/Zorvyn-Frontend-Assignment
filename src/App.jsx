import AppRouter from "@/router/AppRouter";
import { RoleProvider } from "@/context/RoleContext";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <RoleProvider>
      <AppRouter />

      <Toaster richColors position="top-right" />
    </RoleProvider>
  );
}

export default App;