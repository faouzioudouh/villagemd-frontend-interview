import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./modules/react-query";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ProviderList } from "./components/providers-list";
import "./App.css";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Box padding={2}>
          <img
            src="https://www.villagemd.com/hs-fs/hubfs/villagemd-logo-1.png?width=297&height=73&name=villagemd-logo-1.png"
            alt="Village Medical"
            className="logo"
          />
        </Box>

        <Typography variant="h3">Village Medical - Providers</Typography>

        <ProviderList />
      </main>
    </QueryClientProvider>
  );
}
