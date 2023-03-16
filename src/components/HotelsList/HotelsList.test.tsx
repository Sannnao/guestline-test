import { screen } from "@testing-library/react";
import { renderWithProviders, getQueryClient } from "utils/test";
import { useHotelsQuery } from "api/useHotelsQuery";
import { HotelsList } from "./HotelsList";
import { MOCKED_HOTELS } from "utils/testingMocks";

jest.mock("axios", () => ({
  defaults: {},
}));
jest.mock("api/useHotelsQuery");

afterEach(() => {
  jest.clearAllMocks();
});

describe("HotelItem", () => {
  it("Renders HotelsList with loader", async () => {
    (useHotelsQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const queryClient = getQueryClient();
    renderWithProviders(
      <HotelsList
        filterData={{
          rating: null,
          adults: null,
          children: null,
        }}
      />,
      queryClient
    );

    expect(screen.getByText("loading")).toBeInTheDocument();
  });

  it("Renders HotelsList with hotels", async () => {
    (useHotelsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_HOTELS,
    });

    const queryClient = getQueryClient();
    renderWithProviders(
      <HotelsList
        filterData={{
          rating: null,
          adults: null,
          children: null,
        }}
      />,
      queryClient
    );

    expect(screen.getByText(/DBM Hotel 1/i)).toBeInTheDocument();
    expect(screen.getByText(/DBM Hotel 2/i)).toBeInTheDocument();
    expect(screen.getByText(/DBM Hotel 3/i)).toBeInTheDocument();
    expect(screen.getByText(/DBM Hotel 4/i)).toBeInTheDocument();
  });

  it("Renders HotelsList with rating filter", async () => {
    (useHotelsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_HOTELS,
    });

    const queryClient = getQueryClient();
    renderWithProviders(
      <HotelsList
        filterData={{
          rating: 5,
          adults: null,
          children: null,
        }}
      />,
      queryClient
    );

    expect(screen.queryByText(/DBM Hotel 1/i)).toBeNull();
    expect(screen.queryByText(/DBM Hotel 3/i)).toBeNull();

    expect(screen.getByText(/DBM Hotel 2/i)).toBeInTheDocument();
    expect(screen.getByText(/DBM Hotel 4/i)).toBeInTheDocument();
  });
});
