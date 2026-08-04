import { useParams, Link } from "react-router";
import { Header } from "../components/Layout/Header";
import { MdArrowBack } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ClientViewBoxes } from "../components/Layout/Clients/View/ClientViewBoxes";



export function ClientPage({ theme, setTheme }) {
  const { id } = useParams();



  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <section className="flex flex-col p-5 gap-5">
        <title></title>
        <section className="flex justify-between sm:hidden">
          <Link to={'/clients'} className="underline flex gap-2 items-center"><MdArrowBack />/clients</Link>
          <button className="border border-(--border) p-2 cursor-pointer" ><BiDotsVerticalRounded size={20} /></button>
        </section>

        <section className="flex justify-between items-center">
          <div className="flex gap-10 w-full">
            <Link to={'/clients'} className="underline gap-2 items-center hidden sm:flex"><MdArrowBack />/clients</Link>
            <section className="grid grid-rows-1 sm:flex gap-5 w-full items-center ">
              <div className="flex flex-col sm:items-center">
                <p className="text-2xl font-semibold">Allan Rodney Maniago</p>
                <div className="text-sm">
                  <p>Email: allanrodneymaniago@gmail.com</p>
                  <p>Phone No.: 12383366</p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <p>Status</p>
                <p>Priority</p>
              </div>
            </section>
          </div>
          <div className="justify-self-end hidden sm:block">
            <button className="border border-(--border) p-2 cursor-pointer" ><BiDotsVerticalRounded size={20} /></button>
          </div>
        </section>

        {/* <section className="flex justify-between sm:items-center border">
          <div className="flex gap-5">
            <Link to={'/clients'} className="underline  gap-2 items-center hidden sm:flex"><MdArrowBack />/clients</Link>
            <section className="flex flex-col sm:gap-5 gap-1 ">
              <p className="border">Allan Rodney Maniago</p>
              <div className="flex gap-5">
                <p>Status</p>
                <p>Priority</p>
              </div>
            </section>
          </div>
          <div className="justify-self-end hidden sm:block">
            <button className="border border-(--border) p-2 cursor-pointer" ><BiDotsVerticalRounded size={20} /></button>
          </div>
        </section> */}

        <section className="grid grid-cols-2 gap-2 md:max-w-1/2">
          <ClientViewBoxes />
        </section>
      </section>
    </>
  );
}