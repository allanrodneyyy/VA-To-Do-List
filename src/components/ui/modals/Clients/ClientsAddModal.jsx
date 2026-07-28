import { useState } from "react";
import { PiCheckLight } from "react-icons/pi";
import { ClientsAddModalTextfields } from "./ClientsAddModalTextfields";
import { ClientsAddDropdowns } from "./ClientsAddDropdowns";

export function ClientsAddModal({ dialogRef }) {
  const [status, setStatus] = useState("Active");
  return (
    <dialog ref={dialogRef} className="m-auto w-[90%] sm:max-w-2/5 backdrop:backdrop-contrast-50 p-5 rounded-xl">
      <form className="text-sm sm:text-base">
        <header className="mb-5">
          <section className="flex justify-between">
            <p className="font-bold">Add New Client</p>
            <button onClick={(e) => { e.preventDefault(); dialogRef.current.close() }}>x</button>
          </section>
          <section>
            <p className="text-gray-500">Create a new client profile</p>
          </section>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mb-5">
          <ClientsAddModalTextfields />
          <ClientsAddDropdowns />
          <div className="flex flex-col gap-0.5 
            col-span-2">
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
        <footer>
          <button type="submit" >Create client</button>
        </footer>

      </form>


    </dialog >
  );

}
