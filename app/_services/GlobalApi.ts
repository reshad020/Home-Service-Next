import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";
interface singleCategory {
  id: string;
  name: string;
  icon: { url: string };
  bgcolor: { hex: string };
}
interface CategoryType {
  categories: singleCategory[];
}
interface SingleBusinessList {
  id: string;
  name: string;
  contactPerson: string;
  images: { url: string }[];
  email: string;
  about: string;
  address: string;
  category: { name: string };
}
interface BusinessList {
  businessLists: SingleBusinessList[];
}
interface BusinessByIdResponse {
  businessList: SingleBusinessList;
}

const getCategories = async () => {
  const query = gql`
    query Category {
      categories {
        id
        name
        bgcolor {
          hex
        }
        icon {
          url
        }
      }
    }
  `;

  try {
    const result: CategoryType = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Handle the error here (optional)
    // You can throw a new error, return a default value, etc.
  }
};

const getAllBusinessList = async () => {
  const query = gql`
    query businessList {
      businessLists {
        address
        id
        name
        email
        about
        contactPerson
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  try {
    const result: BusinessList = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("error in business list fetching:", error);
  }
};
const getBusinessByCategory = async (category: string) => {
  const query =
    gql`
    query MyQuery {
      businessLists(where: { category: { _search: "` +
    category +
    `" } }) {
        contactPerson
        about
        address
        email
        id
        images {
          url
        }
        name
        category {
          name
        }
      }
    }
  `;
  const result: any = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (id: string) => {
  const query =
    gql`
    query getBusinessById {
      businessList(where: { id: "` +
    id +
    `" }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        name
        id
        images {
          url
        }
      }
    }
  `;
  const result: BusinessByIdResponse = await request(MASTER_URL, query);
  return result;
};

const createBooking = async (
  businessId: string,
  userEmail: string,
  date: string,
  time: string,
  userName: string
) => {
  const mutationQuery =
    gql`
    mutation CreateBooking {
      createBooking(
        data: {
          userEmail: "` +
    userEmail +
    `"
          date: "` +
    date +
    `"
          time: "` +
    time +
    `"
          bookingStatus: Booked
          businessLists: { connect: { id: "` +
    businessId +
    `" } }
          userName: "` +
    userName +
    `"
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const getBusinessBookedSlot = async (id: string, date: string) => {
  const query =
    `query MyQuery {
      bookings(
        where: {businessLists_every: {id: "` +
    id +
    `"}, date: "` +
    date +
    `"}
      ) {
        date
        time
      }
    }
    `;
  const result: any = await request(MASTER_URL, query);
  return result;
};
const GetUserBookingHistory = async (userEmail: string) => {
  const query =
    gql`
  query GetUserBookingHistory {
    bookings(where: {userEmail: "` +
    userEmail +
    `"}
    orderBy: publishedAt_DESC) {
      businessLists {
        name
        images {
          url
        }
        contactPerson
        address
      }
      date
      time
      id
    }
  }
  `;
  const result: any = await request(MASTER_URL, query);
  return result;
};

const deleteBooking = async (bookingId: string) => {
  const mutationQuery = gql`
    mutation DeleteBooking {
      updateBooking(
        data: { userName: "RRRS" }
        where: { id: "cltastwp36re707jzb02sgdlm" }
      ) {
        id
      }
    }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCategories,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createBooking,
  getBusinessBookedSlot,
  GetUserBookingHistory,
  deleteBooking,
};
