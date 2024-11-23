import RoomCard from "@/_components/RoomCard";
import type { Room } from "@/_types/index";

export const metadata = {
  title: "rooms",
};

export default function Page() {
  // CHANGE
  const rooms: Room[] = [];

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-primary-800 text-lg mb-10">
        Cozy yet luxurious rooms, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {rooms.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {rooms.map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      )}
    </div>
  );
}
