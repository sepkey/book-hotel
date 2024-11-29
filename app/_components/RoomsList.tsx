import { Room } from "@/_types/index";
import RoomCard from "./RoomCard";

export default async function RoomsList() {
  //TODO: change to db
  const res = await fetch("http://localhost:3000/api/rooms", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw Error("There was an error in fetching data.");
  }
  const rooms = (await res.json()) as Room[];

  if (!rooms.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {rooms.map((room) => (
        <RoomCard room={room} key={room.id} />
      ))}
    </div>
  );
}
