import { useEffect, useState, useRef } from "react";
import { Header } from "../../components/Layout/Header";
import Buttons from "../../components/ui/buttons/Buttons";
import { MdOutlineAdd, MdDragIndicator } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Tasks } from "../../data/tasks";

export function TasksPage({ theme, setTheme }) {

  const [tasks, setTasks] = useState([]);
  const tasksRef = useRef([]);
  const taskDraggedId = useRef(null);


  useEffect(() => {
    tasksRef.current = new Tasks('Tasks');
    setTasks(tasksRef.current.tasksList);
  }, []);

  const todoTasks = tasks.filter(tasks => tasks.status_id === 1);
  const progressTasks = tasks.filter(tasks => Number(tasks.status_id) === 2);
  const reviewTasks = tasks.filter(tasks => tasks.status_id === 3);
  const doneTasks = tasks.filter(tasks => tasks.status_id === 4);




  const handleDragStart = (e, id) => {
    taskDraggedId.current = id;
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleOnDrop = (e, status_id) => {
    e.preventDefault();

    const id = taskDraggedId.current;

    let draggedTask = tasks.find(task => task.id === id);

    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(tasks =>
        tasks.id === id ? { ...tasks, status_id } : tasks);

      return updatedTasks
    });

    // setTasks(prevTasks => {
    //   const updatedTasks = prevTasks.map(task =>
    //     task.id === id
    //       ? { ...task, status_id }
    //       : task
    //   );
    //   const updatedTask = updatedTasks.find(task => task.id === id);
    //   saveData(id, updatedTask);

    //   return updatedTask;
    // });

  }

  function saveData(id, draggedTask) {
    tasksRef.current.removeTasks(id);
    tasksRef.current.addTasks(draggedTask);
  }

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
              <p className="bg-black text-white rounded-2xl px-2 py-0.5">{todoTasks.length}</p>
            </div>

            <div className="border rounded border-(--border) p-2 bg-gray-200 min-h-150 space-y-2"
              onDragOver={handleDragOver}
              onDrop={(e) => handleOnDrop(e, 1)}>
              {todoTasks.map((task) => (
                <section key={task.id} className="flex border rounded border-(--border) shadow flex-col p-2 bg-white gap-2" draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <MdDragIndicator color="gray" className="cursor-grab" size={20} />
                      <div>
                        <p>{task.title}</p>
                        <p className="text-xs text-gray-400">Allan Rodney Maniago</p>
                      </div>

                    </div>
                    <BiDotsVerticalRounded color="gray" className="hover:text-black hover:cursor-pointer" size={20} />
                  </div>

                  <div className="pl-7 space-y-2 text-gray-400 text-sm">
                    <p className="line-clamp-3 ">{task.description}</p>
                    <div>
                      <p>{task.priority_id}</p>
                      <p>{task.category}</p>
                    </div>
                    <div className="space-y-1">
                      <p>{task.deadline}</p>
                      <p>{task.hours}h estimated time</p>
                    </div>
                  </div>
                </section>
              ))
              }
            </div>
          </div>

          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 font-semibold items-center">
              <p>In Progress</p>
              <p className="bg-black text-white rounded-2xl px-2 py-0.5">0</p>
            </div>

            <div className="border rounded border-(--border) p-2 bg-gray-200 min-h-150 space-y-2"
              onDragOver={handleDragOver}
              onDrop={(e) => handleOnDrop(e, 2)}>
              {progressTasks.map((task) => (
                <section key={task.id} className="flex border rounded border-(--border) shadow flex-col p-2 bg-white gap-2" draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <MdDragIndicator color="gray" className="cursor-grab" size={20} />
                      <div>
                        <p>{task.title}</p>
                        <p className="text-xs text-gray-400">Allan Rodney Maniago</p>
                      </div>

                    </div>
                    <BiDotsVerticalRounded color="gray" className="hover:text-black hover:cursor-pointer" size={20} />
                  </div>

                  <div className="pl-7 space-y-2 text-gray-400 text-sm">
                    <p className="line-clamp-3 ">{task.description}</p>
                    <div>
                      <p>{task.priority_id}</p>
                      <p>{task.category}</p>
                    </div>
                    <div className="space-y-1">
                      <p>{task.deadline}</p>
                      <p>{task.hours}h estimated time</p>
                    </div>
                  </div>
                </section>
              ))
              }
            </div>
          </div>
        </section>
      </section>
    </>
  );
}