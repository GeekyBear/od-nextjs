import {
  BellAlertIcon,
  Cog6ToothIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="flex flex-1 justify-between px-4 pt-4">
      <div className="flex-1">
        <p>{"Crumbs => crumb => crumb"}</p>
        <h2>Dashboard</h2>
      </div>
      <div className="flex flex-1 flex-row items-start justify-end">
        <div className="flex flex-row bg-white rounded-2xl justify-center items-center">
          <MagnifyingGlassIcon className="w-5 h-5 m-2" />
          <input
            placeholder="Escriba aqui..."
            className="bg-none border-none focus:border-blue-400 rounded-2xl "
          />
        </div>
        <UserIcon className="w-6 text-gray-500 ml-8" />
        <p className="text-gray-500 font-bold text-xs">Sign in</p>
        <Cog6ToothIcon className="w-6 text-gray-500 mx-4" />
        <BellAlertIcon className="w-6 text-gray-500 mr-10" />
      </div>
    </div>
  );
}
