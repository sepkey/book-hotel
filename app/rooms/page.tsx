import Counter from "../_components/Counter";

export type User = { id: string; name: string };

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await res.json()) as User[];
  console.log(data, "this will be shown in the node runtime");

  return (
    <div>
      <Counter users={data} />
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
