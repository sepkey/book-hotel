export type Room = {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
};

export type Booking = {
  id: string;
  guestId: string;
  startDate: string;
  endDate: Date;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: Date;
  rooms: Pick<Room, "image" | "name">;
};
