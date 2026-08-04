import { useParams, Link } from "react-router";
import { Header } from "../components/Layout/Header";
import { MdArrowBack } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ClientViewBoxes } from "../components/Layout/Clients/View/ClientViewBoxes";
import { useEffect, useState } from "react";



export function ClientPage({ theme, setTheme, setClientData, clientData }) {
  const { id } = useParams();

  const viewClient = clientData.find(data => data.id === id);

  if (!viewClient) {
    return (
      <>
        <Header theme={theme} setTheme={setTheme} />
        <div className="p-5">Loading client...</div>
      </>
    );
  } else {
    return (
      <>
        <Header theme={theme} setTheme={setTheme} />

        <section className="flex flex-col p-5 gap-5">

          <section className="flex justify-between sm:hidden">
            <Link to={'/clients'} className="underline flex gap-2 items-center"><MdArrowBack />/clients</Link>
            <div className="relative">
              <button className="border border-(--border) p-2 cursor-pointer" >
                <BiDotsVerticalRounded size={20} />
              </button>

              {/* <div className={`right-0 border rounded flex flex-col w-40 shadow border-(--panel)`} >
              <p className="font-semibold border-b border-b-gray-100 p-2">Actions</p>
              <div className="flex ">
                / <p>Set Active</p>
              </div>
            </div> */}
            </div>

          </section>

          <section className="flex justify-between items-center">
            <div className="flex gap-10 w-full">
              <Link to={'/clients'} className="underline gap-2 items-center hidden sm:flex"><MdArrowBack />/clients</Link>
              <section className="grid grid-rows-1 sm:flex gap-5 w-full items-center ">
                <div className="flex flex-col sm:items-center">
                  <p className="text-2xl font-semibold">{viewClient.name}</p>
                  <div className="text-sm">
                    <p>Email: {viewClient.email}</p>
                    <p>Phone No.: {viewClient.phone}</p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <p>Status</p>
                  <p>Priority</p>
                </div>
              </section>
            </div>
            <div className="justify-self-end hidden sm:block relative">
              <button className="border border-(--border) p-2 cursor-pointer"  >
                <BiDotsVerticalRounded size={20} />
              </button>

              {/* <div className={`right-0 border rounded flex flex-col w-40 shadow border-(--panel)`} >
              <p className="font-semibold border-b border-b-gray-100 p-2">Actions</p>
              <div className="flex ">
                / <p>Set Active</p>
              </div>
            </div> */}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-2 md:max-w-1/2">
            <ClientViewBoxes />
          </section>
        </section>
      </>
    );

  }
}