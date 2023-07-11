import { UserIcon } from "@heroicons/react/24/solid";

export default function Courses() {
  const data = [
    {
      id: 1,
      nombre: "Ortodoncia",
      duracion: "3 semanas",
      fecha_inicio: new Date(),
    },
    {
      id: 2,
      nombre: "Reconstruccion estética",
      duracion: "1 mes",
      fecha_inicio: new Date(),
    },
    {
      id: 3,
      nombre: "Puentes e implantes",
      duracion: "1 semana",
      fecha_inicio: new Date(),
    },
    {
      id: 4,
      nombre: "Coronas",
      duracion: "1 semana",
      fecha_inicio: new Date(),
    },
    {
      id: 5,
      nombre: "Extracciones",
      duracion: "3 dias",
      fecha_inicio: new Date(),
    },
    {
      id: 6,
      nombre: "Prótesis dentales",
      duracion: "1 mes",
      fecha_inicio: new Date(),
    },
  ];
  return (
    <div className="flex flex-1 flex-col bg-zinc-100 px-4 pt-4">
      <div className="flex justify-between p-4">
        <h2>Cursos</h2>
        <h2>login</h2>
      </div>
      <div className="p-4">
        <div className="m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
            <span>Curso</span>
            <span>Duracion</span>
            <span>Fecha Inicio</span>
          </div>
          <ul>
            {data.map(({ id, nombre, duracion, fecha_inicio }) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols2 items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <UserIcon
                      width={20}
                      height={20}
                      className=" text-purple-800"
                    />
                  </div>
                  <p className="pl-4">{nombre}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {duracion}
                </p>
                <p className="text-gray-600 sm:text-left text-right">
                  {fecha_inicio.getDate() +
                    "/" +
                    fecha_inicio.getMonth() +
                    "/" +
                    fecha_inicio.getFullYear()}
                </p>
                <button>Inscribirse</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
