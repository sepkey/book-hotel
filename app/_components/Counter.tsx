"use client";
import { useState } from "react";
import type { User } from "../rooms/page";

type Props = { users: User[] };
export default function Counter({ users }: Props) {
  const [count, setCount] = useState(0);

  console.log(users);
  return (
    <div>
      <p> there are {users.length} in my parent</p>
      rooms
      <button onClick={() => setCount((s) => s + 1)}>{count}</button>
    </div>
  );
}
