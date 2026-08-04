import { LuClock } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";

export function ClientViewBoxes() {
  const ClientViewBoxes = [{
    label: 'Active Tasks',
    value: 0,
    icon: <FaTasks color="gray" size={22} />
  }, {
    label: 'Total Hours worked',
    value: 0.0,
    icon: <LuClock color="gray" size={22} />
  }]

  return (
    <>
      {
        ClientViewBoxes.map((info) => (
          <section className="flex items-center bg-(--panel) p-5 gap-5 rounded-2xl hover:bg-(--hover-panel) ">
            <div className="">
              {info.icon}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">{info.label}</p>
              <p className='text-2xl font-bold '>{info.value}</p>
            </div>
          </section>
        ))
      }
    </>
  );
}