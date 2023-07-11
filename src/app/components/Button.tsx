import Image from "next/image";
import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function Button({
  title,
  selected,
}: {
  title: string;
  selected?: boolean;
}) {
  return (
    <button
      className={`flex w-52 h-14 ${
        selected && "bg-white"
      }  rounded-2xl items-center`}
    >
      <CreditCardIcon
        className={`w-8 h-8 m-3 rounded-xl ${
          selected ? "bg-teal-300 text-white" : "bg-white text-teal-300"
        }  p-2`}
      />
      <p
        className={`font-bold ${selected ? "text-gray-700" : "text-gray-400"}`}
      >
        {title}
      </p>
    </button>
  );
}
