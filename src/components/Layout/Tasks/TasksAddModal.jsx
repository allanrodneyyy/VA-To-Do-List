import { MdOutlineAdd } from "react-icons/md";
import Buttons from "../../ui/buttons/Buttons";
import { TasksAddModalDropdowns } from "./TasksAddModalDropdowns";
import { TasksAddModalTextfields } from "./TasksAddModalTextfields";

export function TasksAddModal({ tasksDialogRef, clientData }) {
  const handleCloseModal = () => {
    tasksDialogRef.current.close();
  }


  return (
    <dialog ref={tasksDialogRef} className="m-auto w-[90%] sm:max-w-4/5 md:max-w-3/5 lg:max-w-2/5 backdrop:backdrop-contrast-50 p-5 rounded-xl">
      <form className="text-sm sm:text-base">
        <header className="mb-5">
          <div className="flex justify-between">
            <p className="font-bold">Create New Task</p>
            <p className="cursor-pointer" onClick={handleCloseModal}>X</p>
          </div>
          <p className="text-gray-400">Add a new task to your board</p>
        </header>
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-5">
          <TasksAddModalTextfields />
          <TasksAddModalDropdowns clientData={clientData} />
          <div className="flex flex-col gap-0.5">
            <label htmlFor='category' className="font-semibold">
              Category
            </label>
            <div className={`p-1 flex text-base focus-within:border focus-within:rounded focus-within:border-blue-500`}>
              <input id='category' name='category' className="outline-0 border-(--border) border rounded w-full p-1.5" />
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor='hours_take' className="font-semibold">
              Estimated Hours
            </label>
            <div className={`p-1 flex text-base focus-within:border focus-within:rounded focus-within:border-blue-500`}>
              <input id='hours_take' name='hours_take' className="outline-0 border-(--border) border rounded w-full p-1.5" type="number" />
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor='date' className="font-semibold">
              Deadline
            </label>
            <div className={`p-1 flex text-base focus-within:border focus-within:rounded focus-within:border-blue-500`}>
              <input id='date' name='date' className="outline-0 border-(--border) border rounded w-full p-1.5" type="date" />
            </div>
          </div>
        </section>
        <footer className="flex justify-end gap-2">
          <Buttons variant="primary" type="submit" className="flex" >
            <MdOutlineAdd />
            Create Task
          </Buttons>
        </footer>
      </form>
    </dialog>
  );
}