import { useState } from "react";
import { Header } from "../../components/Layout/Header";
import Buttons from "../../components/ui/buttons/Buttons";
import { MdOutlineAdd, MdDragIndicator } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

export function TasksPage({ theme, setTheme }) {

  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [review, setReview] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <section className="p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div>
            <p className='text-2xl font-bold'>Tasks</p>
            <p className=' text-gray-500'>
              Organise your tasks efficiently.
            </p>
          </div>
          <Buttons variant="primary" className="flex" >
            <MdOutlineAdd />New Task</Buttons>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 font-semibold items-center">
              <p>To Do</p>
              <p className="bg-black text-white rounded-2xl px-2 py-0.5">0</p>
            </div>

            <div className="border rounded border-(--border) p-2 bg-gray-200 min-h-150 space-y-2">
              <section className="flex border rounded border-(--border) shadow flex-col p-2 bg-white gap-2" draggable>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <MdDragIndicator color="gray" className="cursor-grab" size={20} />
                    <div>
                      <p>Web Development</p>
                      <p className="text-xs text-gray-400">Allan Rodney Maniago</p>
                    </div>

                  </div>
                  <BiDotsVerticalRounded color="gray" className="hover:text-black hover:cursor-pointer" size={20} />
                </div>

                <div className="pl-7 space-y-2 text-gray-400 text-sm">
                  <p className="line-clamp-3 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
                  <div>
                    <p>High</p>
                    <p>Category</p>
                  </div>
                  <div className="space-y-1">
                    <p>Date</p>
                    <p>5h estimated</p>
                  </div>

                </div>

              </section>
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 font-semibold items-center">
              <p>In Progress</p>
              <p className="bg-black text-white rounded-2xl px-2 py-0.5">0</p>
            </div>

            <div className="border rounded border-(--border) p-2 bg-gray-200 min-h-150 space-y-2">

            </div>
          </div>
        </section>
      </section>
    </>
  );
}