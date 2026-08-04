import { Header } from "../components/Layout/Header";
import Buttons from "../components/ui/buttons/Buttons";
import { useEffect, useRef, useState } from "react";
import { DropdownSort } from "../components/Layout/Clients/DropdownSort";
import { ClientsTable } from "../components/Layout/Clients/ClientsTable";
import { ClientsAddModal } from "../components/Layout/Clients/ClientsAddModal";
import { MdOutlineAdd, MdOutlineSearch } from "react-icons/md";
import '../App.css'

export function Clients({ theme, setTheme, clientData, setClientData, clientsRef }) {

  const dialogRef = useRef(null);
  const searchRef = useRef(null);


  const [formIsOpen, setFormIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sortStatus, setSortStatus] = useState(0);

  const addClient = (newClientData) => {
    // clientsRef.current.addClients({ id: crypto.randomUUID(), ...newClientData });
    // setClientData(prev => [...prev, newClientData])
    const newClient = {
      id: crypto.randomUUID(),
      ...newClientData
    };

    clientsRef.current.addClients(newClient);

    setClientData([...clientsRef.current.clientsList]);
  }

  const searchClients = (clients, query, status) => {
    status = Number(status);
    const searchInput = query.trim().toLowerCase();

    return clients.filter(client => {
      const matchesSearch = !searchInput ||
        client.name?.toLowerCase().includes(searchInput);

      const matchesStatus = status === 0 ||
        Number(client.status) === status;

      return matchesSearch && matchesStatus;
    });
  };

  const filteredClients = searchClients(clientData, search, sortStatus);

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
          {formIsOpen && <ClientsAddModal dialogRef={dialogRef} addClient={addClient} setFormIsOpen={setFormIsOpen} theme={theme} setTheme={setTheme} />}

        </div>

        <section className="flex  sm:grid sm:grid-cols-2 border`" >
          <div className="grid grid-cols-2 gap-2">
            <section className="flex items-center gap-2 p-1
              border border-(--border) rounded
              text-base
              focus-within:border-blue-500">
              <MdOutlineSearch size={23} color="gray" className="ml-1.5" />
              <input type="text" name="" id="" placeholder="Search client..." className="w-full outline-0" value={search}
                onChange={(e) => setSearch(e.target.value)} />
            </section>
            <section className="flex items-center">
              <DropdownSort theme={theme} setTheme={setTheme} setSortStatus={setSortStatus} sortStatus={sortStatus} />
            </section>
          </div>
        </section>

        <ClientsTable setClientData={setClientData} clientData={filteredClients} />
      </section >
    </>
  );

}