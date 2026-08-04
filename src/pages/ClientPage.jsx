import { useParams, Link } from "react-router";
import { Header } from "../components/Layout/Header";
import { MdArrowBack } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";



export function ClientPage({ theme, setTheme }) {
  const { id } = useParams();

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <section className="flex flex-col p-5 gap-2">
        <title></title>

        <section className="grid grid-cols-2 sm:flex sm:justify-between sm:items-center">
          <div className="sm:flex gap-2 grid grid-cols-1">
            <Link to={'/clients'} className="underline flex gap-2 items-center"><MdArrowBack />/clients</Link>
            <section className="grid grid-rows-3 sm:flex sm:gap-5 gap-1">
              <p>Name</p>
              <p>Status</p>
              <p>Priority</p>
            </section>
          </div>
          <div className="justify-self-end">
            <button className="border border-(--border) p-2 cursor-pointer" ><BiDotsVerticalRounded size={20} /></button>
          </div>
        </section>

        <section className="sm:flex grid grid-rows-3 gap-2">
          <section className="flex items-center bg-(--panel) p-5 gap-5 rounded-2xl hover:bg-(--hover-panel) ">
            <div className="">
              <FaTasks color="gray" size={22} />
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Active Tasks</p>
              <p className='text-2xl font-bold '>0</p>
            </div>
          </section>
          <section className="flex items-center bg-(--panel) p-5 gap-5 rounded-2xl hover:bg-(--hover-panel) ">
            <div className="">
              <FaTasks color="gray" size={22} />
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Active Tasks</p>
              <p className='text-2xl font-bold '>0</p>
            </div>
          </section>
          <section className="flex items-center bg-(--panel) p-5 gap-5 rounded-2xl hover:bg-(--hover-panel) ">
            <div className="">
              <FaTasks color="gray" size={22} />
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Active Tasks</p>
              <p className='text-2xl font-bold '>0</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}