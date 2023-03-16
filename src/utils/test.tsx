import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type WrapperProps = {
  children: React.ReactElement;
};

export const getQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: process.env.NODE_ENV === "test" ? () => {} : console.error,
    },
  });
};

export const renderWithProviders = (
  ui: React.ReactElement,
  queryClient: QueryClient
) => {
  const wrapper = ({ children }: WrapperProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return render(ui, { wrapper });
};
