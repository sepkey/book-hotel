import { z } from "zod";
import roomSchema from "../api/rooms/schema";

export type Room = z.infer<typeof roomSchema>;

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
