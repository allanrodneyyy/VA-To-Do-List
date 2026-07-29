import { Header } from "../components/Layout/Header";
import Buttons from "../components/ui/buttons/Buttons";
import { useEffect, useRef, useState } from "react";
import { DropdownSort } from "../components/Layout/Clients/DropdownSort";
import { ClientsTable } from "../components/Layout/Clients/ClientsTable";
import { ClientsAddModal } from "../components/Layout/Clients/ClientsAddModal";
import { MdOutlineAdd, MdOutlineSearch } from "react-icons/md";
import { Clients as ClientClass } from "../data/clients";
import '../App.css'

export function Clients({ theme, setTheme }) {

  const dialogRef = useRef(null);
  const clientsRef = useRef(null);

  const [clientdata, setClientData] = useState([]);
  const [formIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    clientsRef.current = new ClientClass('Clients');
    setClientData(clientsRef.current.clientsList);
  }, []);

  const addClient = (newClientData) => {
    clientsRef.current.addClients({ id: crypto.randomUUID(), ...newClientData });
    setClientData(prev => [...prev, newClientData])
  }



  return (
    <>
      <title>Clients</title>
      <Header theme={theme} setTheme={setTheme} />

      <section className='p-5 flex flex-col gap-5'>
        <div className='flex justify-between items-center flex-wrap'>
          <section>
            <p className='text-2xl font-bold'>Clients</p>
            <p className=' text-gray-500'>
              Manage your clients.
            </p>
          </section>

          <Buttons variant="primary" className="flex"
            onClick={(e) => {
              setFormIsOpen(true)
            }} >
            <MdOutlineAdd />Add Client</Buttons>
          {formIsOpen && <ClientsAddModal dialogRef={dialogRef} addClient={addClient} setFormIsOpen={setFormIsOpen} clients={clientsRef.current} theme={theme} setTheme={setTheme} />}

        </div>

        <section className="flex  sm:grid sm:grid-cols-2 border`" >
          <div className="grid grid-cols-2 gap-2">
            <section className="flex items-center gap-2 p-1
            border border-(--border) rounded
            text-base
             focus-within:border-blue-500">
              <MdOutlineSearch size={23} color="gray" className="ml-1.5" />
              <input type="text" name="" id="" placeholder="Search client..." className="w-full outline-0" />
            </section>
            <section className="flex items-center">
              <DropdownSort theme={theme} setTheme={setTheme} />
            </section>
          </div>
        </section>

        <ClientsTable setClientData={setClientData} clientdata={clientdata} />
      </section >
    </>
  );

}