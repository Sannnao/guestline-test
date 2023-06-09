import { Hotel } from "components/HotelItem";
import { Room } from "components/RoomsList";

export const MOCKED_HOTEL_DATA: Hotel = {
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

export const MOCKED_HOTELS: Hotel[] = [
  MOCKED_HOTEL_DATA,
  {
    id: "OBMNG2",
    name: "DBM Hotel 2",
    description:
      "Fruitcake brownie sugar plum cotton candy pastry marzipan pie lollipop ice cream. Sweet pie tootsie roll oat cake apple pie candy pastry wafer jelly beans. Cake sweet oat cake chocolate sweet chocolate pudding biscuit.",
    address1: "10 Carlisle St",
    address2: "",
    postcode: "W1D 3BR",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "5",
    facilities: [],
    telephone: "54453559",
    email: "JabbaScript@guestline.com",
    images: [
      {
        url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG2/lw0428_76188584_720x450.jpeg",
        alt: "Hotel image",
      },
      {
        url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG2/nobu-lobby-day-optimized.jpeg",
      },
    ],
    checkInHours: "13",
    checkInMinutes: "00",
    checkOutHours: "10",
    checkOutMinutes: "00",
    position: { timezone: "GMT" },
  },
  {
    id: "OBMNG3",
    name: "DBM Hotel 3",
    description:
      "Chocolate marzipan muffin danish cake chupa chups pastry. Croissant sweet sweet wafer sweet roll chocolate. Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.",
    address1: "10 Palace Pl",
    address2: "",
    postcode: "SW1E 5BW",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "3",
    facilities: [],
    telephone: "1235345",
    email: "jabbaservices@guestline.com",
    images: [
      {
        url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG3/ai.jpeg",
        alt: "hotel",
      },
      {
        url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG3/86613_albion-house-at-ramsgate_.jpeg",
      },
    ],
    checkInHours: "12",
    checkInMinutes: "00",
    checkOutHours: "9",
    checkOutMinutes: "00",
    position: { timezone: "GMT" },
  },
  {
    id: "OBMNG4",
    name: "DBM Hotel 4",
    description:
      "Carrot cake pudding tart pastry lemon drops croissant cupcake brownie croissant. Sweet lollipop soufflé tart cookie sweet gingerbread pudding croissant.\r\nSesame snaps tootsie roll tootsie roll chocolate cake halvah cake dessert. Sesame snaps wafer sweet ice cream cotton candy sugar plum sweet roll. Bonbon candy canes chocolate bar pie halvah caramels jelly-o. Powder chocolate cake carrot cake chupa chups apple pie.",
    address1: "25 Courtfield Gardens",
    address2: "",
    postcode: "SW5 0PG",
    town: "London",
    country: "United Kingdom",
    countryCode: "GB",
    starRating: "5",
    facilities: [],
    telephone: "123456",
    email: "jabbaservices@guestline.com",
    images: [
      {
        url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG4/ai4.jpeg",
        alt: "hotel",
      },
      {
        url: "https://uk2-roomlynx.eu.guestline.net/picturemanager/images/OBMNG4/BHP_Exterior-et-back.jpeg",
      },
    ],
    checkInHours: "15",
    checkInMinutes: "00",
    checkOutHours: "12",
    checkOutMinutes: "00",
    position: { timezone: "GMT" },
  },
];

export const MOCKED_ROOMS: { rooms: Room[] } = {
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
