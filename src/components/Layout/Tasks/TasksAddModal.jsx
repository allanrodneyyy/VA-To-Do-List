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
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <TasksAddModalTextfields />
          <TasksAddModalDropdowns clientData={clientData} />
        </section>
      </form>
    </dialog>
  );
}