import { Header } from "../components/Header";
import Buttons from "../utils/Buttons";
import { ClientsTable } from "./ClientsTable";
import { MdOutlineAdd, MdOutlineSearch } from "react-icons/md";
import '../App.css'

export function Clients({ theme, setTheme }) {

  return (
    <>
      <title>Clients</title>
      <Header theme={theme} setTheme={setTheme} />

      <section className='p-5 flex flex-col gap-5'>
        <div className='flex justify-between items-center flex-wrap'>
          <section>
            <p className='text-2xl font-bold'>Clients</p>
            <p className=' text-gray-500'>
              Manage your clientele.
            </p>
          </section>

          <Buttons variant="primary" className="flex "><MdOutlineAdd />Add Client</Buttons>
        </div>

        <section className="flex  sm:grid sm:grid-cols-2" >
          <div className="flex flex-wrap sm:grid sm:grid-cols-2 gap-2">
            <section className="flex items-center gap-2 p-1
            border border-(--border) rounded
            text-base
             focus-within:border-blue-500">
              <MdOutlineSearch size={23} color="gray" className="ml-1.5" />
              <input type="text" name="" id="" placeholder="Search client..." className="w-full outline-0" />
            </section>
            <section className="flex">
              <button className="">Sample</button>
            </section>
          </div>
        </section>

        <ClientsTable
        />
      </section>
    </>
  );

}