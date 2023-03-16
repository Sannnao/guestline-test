import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders, getQueryClient } from "utils/test";
import { useHotelRoomsQuery } from "api/useHotelRoomsQuery";
import { Hotel, HotelItem } from "./HotelItem";

const MOCKED_HOTEL_DATA: Hotel = {
  id: "OBMNG1",
  name: "DBM Hotel 1",
  description:
    "Etag for the win chocolate biscuit wafer soufflé toffee toffee donut. Tart biscuit wafer pudding chocolate cake oat cake halvah\r\nMarshmallow halvah gingerbread apple pie muffin biscuit. Cake pudding topping pie lemon drops lollipop. Bear claw oat cake jelly beans. Bonbon toffee caramels pudding gingerbread cookie lollipop.",
  address1: "Cajarc Blue Hotel",
  address2: "51 Bedford St",
  postcode: "WC2R 0PZ",
  town: "London",
  country: "United Kingdom",
  countryCode: "GB",
  starRating: "4",
  facilities: [
    { code: "1" },
    { code: "2" },
    { code: "3" },
    { code: "4" },
    { code: "5" },
    { code: "6" },
    { code: "7" },
    { code: "8" },
    { code: "9" },
    { code: "10" },
    { code: "11" },
    { code: "12" },
    { code: "13" },
    { code: "14" },
    { code: "15" },
    { code: "16" },
    { code: "17" },
    { code: "18" },
    { code: "19" },
    { code: "20" },
    { code: "21" },
    { code: "22" },
    { code: "23" },
    { code: "24" },
    { code: "25" },
    { code: "26" },
    { code: "27" },
    { code: "28" },
    { code: "29" },
    { code: "30" },
    { code: "31" },
    { code: "32" },
    { code: "33" },
    { code: "34" },
    { code: "35" },
  ],
  telephone: "12345666",
  email: "JabbaScript@guestline.com",
  images: [
    {
      url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/282214329.jpeg",
    },
    {
      url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/london-hotels-with-a-view-1614348818.jpeg",
    },
    {
      url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG1/Hotel1.JPG",
    },
  ],
  checkInHours: "14",
  checkInMinutes: "00",
  checkOutHours: "11",
  checkOutMinutes: "00",
  position: { latitude: 55.950191, longitude: -3.18755, timezone: "GMT" },
};

const MOCKED_ROOMS = {
  rooms: [
    {
      id: "DTFF",
      name: "Deluxe Twin",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: { maxAdults: 2, maxChildren: 0, maxOverall: 2 },
      disabledAccess: false,
      bedConfiguration: "Twin",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "15", name: "24 Hour Room Service" },
        { code: "3", name: "TV" },
        { code: "4", name: "Telephone" },
        { code: "25", name: "Jacuzzi Bath" },
        { code: "28", name: "Kitchen Utensils" },
        { code: "5", name: "Video" },
        { code: "8", name: "Mini Bar" },
        { code: "27", name: "4 Poster Bed" },
        { code: "33", name: "24 Hour Reception" },
      ],
    },
    {
      id: "STND",
      name: "Double/Twin Standard Double",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.\r\nHalvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes to",
      occupancy: { maxAdults: 2, maxChildren: 0, maxOverall: 2 },
      disabledAccess: false,
      bedConfiguration: "Both",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "10", name: "Bathrobes" },
        { code: "12", name: "TV with Satellite channels" },
        { code: "11", name: "Radio" },
        { code: "17", name: "Air Conditioning" },
        { code: "25", name: "Jacuzzi Bath" },
        { code: "8", name: "Mini Bar" },
        { code: "27", name: "4 Poster Bed" },
        { code: "24", name: "Ironing Facilities" },
        { code: "19", name: "Hot Tub" },
        { code: "2", name: "High Speed Internet Access" },
        { code: "22", name: "iPod Docking Station" },
        { code: "3", name: "TV" },
        { code: "13", name: "In-room Safe" },
        { code: "29", name: "Garden" },
        { code: "35", name: "Lake View" },
        { code: "5", name: "Video" },
        { code: "15", name: "24 Hour Room Service" },
        { code: "16", name: "Hair Dryer" },
        { code: "1", name: "Internet Access" },
        { code: "34", name: "Sea View" },
        { code: "6", name: "TV / Radio" },
        { code: "9", name: "Room Service (Restricted Hours)" },
        { code: "4", name: "Telephone" },
        { code: "28", name: "Kitchen Utensils" },
        { code: "31", name: "Balcony" },
        { code: "33", name: "24 Hour Reception" },
        { code: "7", name: "Tea / Coffee Making Facilities" },
      ],
    },
    {
      id: "STTW",
      name: "Standard Twin",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription: "Standard Twin",
      occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 2 },
      disabledAccess: false,
      bedConfiguration: "Twin",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "10", name: "Bathrobes" },
        { code: "12", name: "TV with Satellite channels" },
        { code: "18", name: "DVD Player" },
        { code: "11", name: "Radio" },
        { code: "17", name: "Air Conditioning" },
        { code: "25", name: "Jacuzzi Bath" },
        { code: "8", name: "Mini Bar" },
        { code: "27", name: "4 Poster Bed" },
        { code: "24", name: "Ironing Facilities" },
        { code: "26", name: "Dishwasher" },
        { code: "19", name: "Hot Tub" },
        { code: "2", name: "High Speed Internet Access" },
        { code: "22", name: "iPod Docking Station" },
        { code: "3", name: "TV" },
        { code: "13", name: "In-room Safe" },
        { code: "29", name: "Garden" },
        { code: "32", name: "Fully Equipped Kitchen" },
        { code: "35", name: "Lake View" },
        { code: "14", name: "Disabled Access / Facilities" },
        { code: "15", name: "24 Hour Room Service" },
        { code: "16", name: "Hair Dryer" },
        { code: "20", name: "Cooking Facilities" },
        { code: "1", name: "Internet Access" },
        { code: "34", name: "Sea View" },
        { code: "6", name: "TV / Radio" },
        { code: "9", name: "Room Service (Restricted Hours)" },
        { code: "4", name: "Telephone" },
        { code: "30", name: "Games Console" },
        { code: "28", name: "Kitchen Utensils" },
        { code: "31", name: "Balcony" },
        { code: "33", name: "24 Hour Reception" },
        { code: "7", name: "Tea / Coffee Making Facilities" },
      ],
    },
    {
      id: "PSFF",
      name: "Principle Suite Front Facing",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 3 },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "19", name: "Hot Tub" },
        { code: "10", name: "Bathrobes" },
        { code: "15", name: "24 Hour Room Service" },
        { code: "16", name: "Hair Dryer" },
        { code: "17", name: "Air Conditioning" },
        { code: "20", name: "Cooking Facilities" },
        { code: "13", name: "In-room Safe" },
        { code: "30", name: "Games Console" },
        { code: "32", name: "Fully Equipped Kitchen" },
        { code: "31", name: "Balcony" },
        { code: "27", name: "4 Poster Bed" },
        { code: "14", name: "Disabled Access / Facilities" },
      ],
    },
    {
      id: "SMCF",
      name: "Small Double Courtyard",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.",
      occupancy: { maxAdults: 1, maxChildren: 0, maxOverall: 1 },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "10", name: "Bathrobes" },
        { code: "15", name: "24 Hour Room Service" },
        { code: "18", name: "DVD Player" },
        { code: "17", name: "Air Conditioning" },
        { code: "20", name: "Cooking Facilities" },
        { code: "30", name: "Games Console" },
        { code: "32", name: "Fully Equipped Kitchen" },
        { code: "31", name: "Balcony" },
        { code: "27", name: "4 Poster Bed" },
        { code: "33", name: "24 Hour Reception" },
        { code: "14", name: "Disabled Access / Facilities" },
        { code: "26", name: "Dishwasher" },
      ],
    },
    {
      id: "STUDIO",
      name: "Studio Suite",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.\r\nHalvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes to",
      occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 3 },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room5.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "10", name: "Bathrobes" },
        { code: "15", name: "24 Hour Room Service" },
        { code: "17", name: "Air Conditioning" },
        { code: "20", name: "Cooking Facilities" },
        { code: "31", name: "Balcony" },
        { code: "27", name: "4 Poster Bed" },
        { code: "14", name: "Disabled Access / Facilities" },
      ],
    },
    {
      id: "DSFF",
      name: "Deluxe Suite Front Facing",
      shortDescription:
        "Halvah pastry tart marshmallow croissant chupa chups jelly-o.",
      longDescription:
        "Caramels muffin candy gingerbread dessert wafer dessert gummi bears marshmallow. Toffee sweet bear claw icing gummies chocolate chocolate cake tootsie roll. Liquorice dessert candy wafer topping oat cake ice cream marzipan halvah. Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.",
      occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 3 },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room2.jpg",
          alt: "image 1",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "living room",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "music",
        },
      ],
      facilities: [],
    },
    {
      id: "DLXDBL",
      name: "Deluxe Double",
      shortDescription:
        "blah blah blah blah blah test test test test test blah blah blah blah https://www.destinationedinburghapartments.co.uk/terms-and-conditions/",
      longDescription:
        "Danish candy pastry jujubes fruitcake jelly beans. Donut croissant dessert cotton candy cake icing biscuit. Cheesecake icing sugar plum fruitcake cookie. Marzipan gummies topping jelly icing biscuit halvah. Muffin pie brownie bear claw jelly beans toffee jelly marshmallow croissant. Bonbon bonbon jelly beans gummi bears jelly biscuit tootsie roll. Chocolate cake topping oat cake oat cake oat cake dragée cotton candy jujubes. Caramels muffin candy gingerbread dessert wafer dessert gummi bears marshmallow. Toffee sweet bear claw icing gummies chocolate chocolate cake tootsie roll. Liquorice dessert candy wafer topping oat cake ice cream marzipan halvah. Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish. (Testing This out)\r\n\r\nTesting\r\n1\r\n2\r\n3",
      occupancy: { maxAdults: 6, maxChildren: 4, maxOverall: 10 },
      disabledAccess: false,
      bedConfiguration: "Double",
      images: [
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room1.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
          alt: "",
        },
        {
          url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
          alt: "",
        },
      ],
      facilities: [
        { code: "10", name: "Bathrobes" },
        { code: "12", name: "TV with Satellite channels" },
        { code: "18", name: "DVD Player" },
        { code: "11", name: "Radio" },
        { code: "17", name: "Air Conditioning" },
        { code: "25", name: "Jacuzzi Bath" },
        { code: "8", name: "Mini Bar" },
        { code: "27", name: "4 Poster Bed" },
        { code: "24", name: "Ironing Facilities" },
        { code: "26", name: "Dishwasher" },
        { code: "21", name: "Washing Facilities" },
        { code: "19", name: "Hot Tub" },
        { code: "2", name: "High Speed Internet Access" },
        { code: "22", name: "iPod Docking Station" },
        { code: "3", name: "TV" },
        { code: "13", name: "In-room Safe" },
        { code: "29", name: "Garden" },
        { code: "32", name: "Fully Equipped Kitchen" },
        { code: "35", name: "Lake View" },
        { code: "5", name: "Video" },
        { code: "14", name: "Disabled Access / Facilities" },
        { code: "15", name: "24 Hour Room Service" },
        { code: "16", name: "Hair Dryer" },
        { code: "20", name: "Cooking Facilities" },
        { code: "23", name: "WIFI" },
        { code: "1", name: "Internet Access" },
        { code: "34", name: "Sea View" },
        { code: "6", name: "TV / Radio" },
        { code: "9", name: "Room Service (Restricted Hours)" },
        { code: "4", name: "Telephone" },
        { code: "30", name: "Games Console" },
        { code: "28", name: "Kitchen Utensils" },
        { code: "31", name: "Balcony" },
        { code: "33", name: "24 Hour Reception" },
        { code: "7", name: "Tea / Coffee Making Facilities" },
      ],
    },
  ],
};

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: MOCKED_ROOMS,
    })
  ),
  defaults: {
    baseUrl: "https://obmng.dbm.guestline.net/api",
  },
}));
jest.mock("api/useHotelRoomsQuery");

beforeEach(() => {
  (useHotelRoomsQuery as jest.Mock).mockReturnValue({
    data: MOCKED_ROOMS,
    isLoading: false,
    isError: false,
  });
});

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
