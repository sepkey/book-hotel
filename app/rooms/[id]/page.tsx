import { Room } from "@/app/_types";

type Props = {
  params: { id: string };
};

export default async function RoomPage({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/rooms/${params.id}`, {
    cache: "no-cache",
  });

  console.log(res);

  const room = (await res.json()) as Room;

  console.log(room);
  return <div>{room.name}</div>;
}
