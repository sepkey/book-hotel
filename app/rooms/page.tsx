export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data, "this will be shown in the node runtime");

  return (
    <ul>
      {data.map(({ id, name }: { id: string; name: string }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
