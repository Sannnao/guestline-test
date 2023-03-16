import { screen } from "@testing-library/react";
import { renderWithProviders, getQueryClient } from "utils/test";
import { MOCKED_ROOMS } from "utils/testingMocks";
import { RoomsList } from "./RoomsList";

describe("RoomsList", () => {
  it("Renders RoomsList correctly", () => {
    const queryClient = getQueryClient();
    renderWithProviders(<RoomsList rooms={MOCKED_ROOMS.rooms} />, queryClient);

    expect(screen.getAllByTestId("room").length).toBe(8);

    expect(screen.getByText(/Deluxe Twin/i)).toBeInTheDocument();
    expect(screen.getByText("Children: 4")).toBeInTheDocument();
    expect(screen.getByText("Adults: 6")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Danish candy pastry jujubes fruitcake jelly beans. Donut croissant dessert cotton candy cake icing biscuit. Cheesecake icing sugar plum fruitcake cookie./i
      )
    ).toBeInTheDocument();
  });
});
