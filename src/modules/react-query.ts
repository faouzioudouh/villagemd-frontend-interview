import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const defaultQueryClientOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
