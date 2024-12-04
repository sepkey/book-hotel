import { Suspense } from "react";
import RoomsList from "../_components/RoomsList";
import Spinner from "../_components/Spinner";

// export const revalidate = 0; // fully dynamic
export const revalidate = 3600; //makes sense
// export const revalidate = 15; //test ISR

export const metadata = {
  title: "rooms",
};

export default function Page() {
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

      <Suspense fallback={<Spinner />}>
        <RoomsList />
      </Suspense>
    </div>
  );
}
