import LoginForm from "./components/pages/LoginForm";
import NoviSlackChat from "./components/pages/NoviSlackChat";
import { Toaster, toast } from "sonner";

function App() {
  const user = "Rhix";
  const handleLogout = () => toast.info("coming soon ..");
  return (
    <>
      {Boolean(user) ? (
        <NoviSlackChat user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm />
      )}
      <Toaster richColors position="top-center" closeButton />
    </>
  );
}

export default App;
