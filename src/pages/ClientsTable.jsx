import { ClientsData } from "../model/ClientsData";

export function ClientsTable() {


  const clientsData = new ClientsData('Clients');
  const datas = clientsData.clientsList;

  const tableHeads = [
    'Client Name',
    'Status',
    'Priority',
    'Active Tasks',
    'Hours Logged',
    'Contact',
    'Actions'
  ]

  console.log(datas);

  return (
    <section className="max-h-96 overflow-x-auto">
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
          {datas.map((data) => (
            <tr key={data.name} className="border-l border-b border-r border-gray-200 hover:bg-gray-50 ">
              <td className="p-3"> {data.name} </td>
              <td> {data.status} </td>
              <td> {data.priority} </td>
              <td> { } </td>
              <td> { } </td>
              <td> {data.phone ? data.phone : '-'} </td>
              <td className="text-center ">
                <button className="cursor-pointer hover:bg-gray-100 px-5 rounded py-1">
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