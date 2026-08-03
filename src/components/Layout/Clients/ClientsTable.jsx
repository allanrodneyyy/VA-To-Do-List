import { useEffect } from "react";
import { Clients } from "../../../data/clients";
import Buttons from "../../ui/buttons/Buttons";

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

  const statuses = {
    1: 'Active',
    2: 'On hold',
    3: 'Completed'
  }


  function StatusButton({ id }) {
    return (
      <button>
        {statuses[id]}
      </button>
    )
  }


  return (
    <section className="overflow-x-auto">
      <table className="overflow-y-scroll w-full text-sm sm:text-base">
        <thead className="w-full border  border-gray-200">
          <tr>
            {tableHeads.map((title) => (
              <th key={title + crypto.randomUUID()} className="text-gray-500 p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {clientData.map((data) => (
            <tr key={data.id} className="border-l border-b border-r border-gray-200 hover:bg-gray-50 ">
              <td className="p-3"> {data.name} </td>
              <td className="text-center"> <StatusButton id={data.status} /> </td>
              <td> { } </td>
              <td> { } </td>
              <td> { } </td>
              <td> {data.phone ? data.phone : '-'} </td>
              <td className="text-center ">
                <button className="cursor-pointer hover:bg-gray-200 px-5 rounded py-1"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
} 