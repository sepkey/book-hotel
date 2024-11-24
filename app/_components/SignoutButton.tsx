import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="py-3 px-5 hover:bg-accent-100 hover:text-primary-700 transition-colors flex items-center gap-4 font-semibold text-primary-600 w-full">
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
