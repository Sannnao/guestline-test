import { screen } from "@testing-library/react";
import { getQueryClient, renderWithProviders } from "utils/test";
import { useHotelsQuery } from "api/useHotelsQuery";
import { Header } from "./Header";
import { MOCKED_HOTELS } from "utils/testingMocks";

jest.mock("axios", () => ({
  defaults: {},
}));
jest.mock("api/useHotelsQuery");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Header", () => {
  it("renders Header with Carousel and Filter", () => {
    (useHotelsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_HOTELS,
    });

    const queryClient = getQueryClient();
    renderWithProviders(<Header setFilterData={() => {}} />, queryClient);

    expect(screen.getByTestId("filter")).toBeInTheDocument();
    expect(screen.getAllByTestId("headerCarouselImg").length).toBe(11);
  });
});
