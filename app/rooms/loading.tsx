import Spinner from "@/_components/Spinner";

export default function loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
      <p className="text-primary-500">Loading room data...</p>
    </div>
  );
}
