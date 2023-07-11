import Image from "next/image";
import Button from "./Button";
import separator from "../../../public/separator.svg";

export default function Sidebar() {
  return (
    <div className="flex flex-wrap flex-col items-center min-h-screen w-64 bg-zinc-100">
      <h2 className="font-bold mt-6">ODONTOLOGY</h2>
      <Image
        src={separator}
        width={240}
        height={0}
        className="m-8"
        alt="Separator line"
      />
      <Button title="Dashboard" selected={true} />
      <Button title="Cursos" />
      <Button title="Productos" />
      <Button title="Otros" />
    </div>
  );
}
