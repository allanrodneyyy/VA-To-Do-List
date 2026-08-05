import { useEffect } from "react";
import { Clients } from "../../../data/clients";
import Buttons from "../../ui/buttons/Buttons";
import { Link } from "react-router";
import { priorityDropdown, statusDropdown } from "../../../data/dropdowns";


export function ClientsTable({ clientData }) {

  const tableHeads = [
    'Client Name',
    'Status',
    'Priority',
    'Active Tasks',
    'Hours Logged',
    'Contact',
    'Actions'
  ]


  function DisplayStatusAndPriority({ id, field }) {

    const dropdown = field === 'status' ? statusDropdown : priorityDropdown;

    if (!id) return null;
    if (field === 'status') {
      const status = dropdown[0].options.find(op => op.id === Number(id));
      return status ? status.label : null;
    } else {
      const priority = dropdown[0].options.find(op => op.id === Number(id));
      return priority ? priority.label : null;
    }
  }



  return (
    <section className="overflow-x-auto">
      <table className="overflow-y-scroll w-full text-sm sm:text-base">
        <thead className="w-full border  border-gray-200">
          <tr>
            {tableHeads.map((title) => (
              <th key={title} className="text-gray-500 p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {clientData.map((data) => (
            <tr key={data.id} className="border-l border-b border-r border-gray-200 hover:bg-gray-50 ">
              <td className="p-3 flex gap-2 items-center font-semibold">
                <p className="border py-1.5 px-3 rounded-3xl border-gray-300">
                  {data.name.substring(0, 2)}
                </p>
                {data.name}
              </td>
              <td className="text-center">
                <DisplayStatusAndPriority id={data.status} field='status' />
              </td>
              <td className="text-center"><DisplayStatusAndPriority id={data.status} /> </td>
              <td className="text-center font-mono text-sm">0</td>
              <td className="text-center font-mono text-sm"> {'0.0h'} </td>
              <td className="text-center"> {data.phone ? data.phone : '-'} </td>
              <td className="text-center ">
                <Link className="cursor-pointer hover:bg-gray-200 px-5 rounded py-1" value={data.id}
                  to={`/client/${data.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
} 