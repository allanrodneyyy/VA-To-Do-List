import { useEffect, useState } from "react";
import { PiCheckLight } from "react-icons/pi";
import { ClientsAddModalTextfields } from "./ClientsAddModalTextfields";
import { ClientsAddDropdowns } from "./ClientsAddDropdowns";
import { MdOutlineAdd, MdOutlineSearch } from "react-icons/md";
import Buttons from "../../ui/buttons/Buttons";
import { Clients } from "../../../data/clients";

export function ClientsAddModal({ dialogRef, setClientData, setFormIsOpen, clients }) {

  useEffect(() => {
    dialogRef.current?.showModal();
  }, [])

  const handleSubmit = (e) => {
    //Prevents the page from reloading
    e.preventDefault();
    //Get Form data in the targetted from
    //In this case, Add Client Form.
    const formData = new FormData(e.target.form);
    const clientData = Object.fromEntries(formData);

    //This should be async in the future
    clients.addClients({ id: crypto.randomUUID(), ...clientData });

    handleClose(e);
  }

  const handleClose = (e) => {
    //Prevents the page from reloading
    e.preventDefault();

    //Closing the modal
    dialogRef.current.close();

    setFormIsOpen(false);
  }

  return (
    <dialog ref={dialogRef} className="m-auto w-[90%] sm:max-w-2/5 backdrop:backdrop-contrast-50 p-5 rounded-xl">
      <form className="text-sm sm:text-base">
        <header className="mb-5">
          <section className="flex justify-between">
            <p className="font-bold">Add New Client</p>
            <button className="hover:cursor-pointer" onClick={handleClose}>x</button>
          </section>
          <section>
            <p className="text-gray-500">Create a new client profile</p>
          </section>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mb-5">

          <ClientsAddModalTextfields />
          <ClientsAddDropdowns />

          <div className="flex flex-col gap-0.5 
            cols-span-1 sm:col-span-2">
            <label htmlFor="notes" className="font-semibold">Notes</label>
            <section className="flex items-center gap-1 p-0.5
            text-base
             focus-within:border-blue-500
             focus-within:border
             focus-within:rounded">
              <textarea name="notes" id="notes" className="w-full outline-0 border-(--border) border rounded p-1"></textarea>
            </section>
          </div>
        </section>
        <footer className="flex justify-end gap-2">
          <Buttons variant="primary" type="submit" className="flex" onClick={handleSubmit}>
            <MdOutlineAdd />
            Create Client
          </Buttons>
        </footer>

      </form>


    </dialog >
  );

}
