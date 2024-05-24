import { useState } from "react";
import LoginForm from "./components/pages/LoginForm";
import NoviSlackChat from "./components/pages/NoviSlackChat";
import { Toaster } from "sonner";
import { getUser, logout } from "./lib/auth";
import { apolloClient } from "./lib/graphql/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  const [user, setUser] = useState(getUser);
  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <ApolloProvider client={apolloClient}>
      {Boolean(user) ? (
        <NoviSlackChat user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={setUser} />
      )}
      <Toaster richColors position="top-center" closeButton />
    </ApolloProvider>
  );
}

export default App;
