import prisma from "@/prisma/client";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { roomId: string };
};

export async function generateMetadata({ params }: Props) {
  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.roomId) },
  });

  return { title: `Room ${room?.name}` };
}

export async function generateStaticParams() {
  const rooms = await prisma.room.findMany();
  const ids = rooms.map((room) => ({ roomId: room.id.toString() }));
  console.log(ids);
  return ids;
}

export default async function RoomPage({ params }: Props) {
  const room = await prisma.room.findUnique({
    where: { id: parseInt(params.roomId) },
  });

  if (!room) {
    notFound();
  }

  const { name, image, description, maxCapacity } = room;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative ">
          <Image
            src={image!}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-200 font-black text-7xl mb-5   p-6 pb-1 w-[150%]">
            Room: {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h3>
      </div>
    </div>
  );
}
