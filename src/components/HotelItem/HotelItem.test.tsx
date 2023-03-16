import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders, getQueryClient } from "utils/test";
import { MOCKED_HOTEL_DATA, MOCKED_ROOMS } from "utils/testingMocks";
import { useHotelRoomsQuery } from "api/useHotelRoomsQuery";
import { HotelItem } from "./HotelItem";

jest.mock("axios", () => ({
  defaults: {},
}));
jest.mock("api/useHotelRoomsQuery");

afterEach(() => {
  jest.clearAllMocks();
});

describe("HotelItem", () => {
  it("Renders HotelItem with no filter data", async () => {
    (useHotelRoomsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_ROOMS.rooms,
    });

    const queryClient = getQueryClient();
    renderWithProviders(
      <HotelItem
        hotel={MOCKED_HOTEL_DATA}
        filterData={{
          rating: null,
          adults: null,
          children: null,
        }}
      />,
      queryClient
    );

    expect(screen.getAllByTestId("carouselImg").length).toBe(3);
    expect(screen.getByText(/Cajarc Blue Hotel/i)).toBeInTheDocument();
    expect(screen.getByText(/51 Bedford St/i)).toBeInTheDocument();
    expect(screen.getByText(/DBM Hotel 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4/i)).toBeInTheDocument();

    const showBtn = screen.getByText(/Show rooms/i);
    expect(showBtn).toBeInTheDocument();
    fireEvent.click(showBtn);
    expect(showBtn).toHaveTextContent(/Hide rooms/i);
  });

  it("Renders HotelItem with filter by adults", async () => {
    (useHotelRoomsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_ROOMS.rooms,
    });

    const queryClient = getQueryClient();
    renderWithProviders(
      <HotelItem
        hotel={MOCKED_HOTEL_DATA}
        filterData={{
          rating: null,
          adults: 2,
          children: null,
        }}
      />,
      queryClient
    );

    const showBtn = screen.getByText(/Show rooms/i);
    fireEvent.click(showBtn);

    expect(screen.getAllByTestId("room").length).toBe(7);
  });

  it("Renders HotelItem with filter by children and adults", async () => {
    (useHotelRoomsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_ROOMS.rooms,
    });

    const queryClient = getQueryClient();
    renderWithProviders(
      <HotelItem
        hotel={MOCKED_HOTEL_DATA}
        filterData={{
          rating: null,
          adults: 2,
          children: 2,
        }}
      />,
      queryClient
    );

    const showBtn = screen.getByText(/Show rooms/i);
    fireEvent.click(showBtn);

    expect(screen.getAllByTestId("room").length).toBe(2);
  });

  it("Renders HotelItem with no items", async () => {
    (useHotelRoomsQuery as jest.Mock).mockReturnValue({
      data: MOCKED_ROOMS.rooms,
    });

    const queryClient = getQueryClient();
    const { container } = renderWithProviders(
      <HotelItem
        hotel={MOCKED_HOTEL_DATA}
        filterData={{
          rating: null,
          adults: 9,
          children: 7,
        }}
      />,
      queryClient
    );

    expect(container).toBeEmptyDOMElement();
  });
});
