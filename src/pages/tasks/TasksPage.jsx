import { useEffect, useState, useRef } from "react";
import { Header } from "../../components/Layout/Header";
import Buttons from "../../components/ui/buttons/Buttons";
import { MdOutlineAdd } from "react-icons/md";
import { Tasks } from "../../data/tasks";
import { TasksBoard } from "../../components/Layout/Tasks/TasksBoard";
import { TasksAddModal } from "../../components/Layout/Tasks/TasksAddModal";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { PointerSensor, PointerActivationConstraints } from '@dnd-kit/dom';
import { DraggableTask } from "../../components/Layout/Tasks/DraggableTask";


export function TasksPage({ theme, setTheme, tasks, setTasks, tasksRef, clientData }) {

  const tasksDialogRef = useRef(null);
  const previousItems = useRef(tasks);

  const taskBoards = [
    {
      id: 1,
      name: "To Do",
      datas: tasks.filter(task => Number(task.status_id) === 1)
    },
    {
      id: 2,
      name: "In progress",
      datas: tasks.filter(task => Number(task.status_id) === 2)
    },
    {
      id: 3,
      name: "Review",
      datas: tasks.filter(task => Number(task.status_id) === 3)
    },
    {
      id: 4,
      name: "Done",
      datas: tasks.filter(task => Number(task.status_id) === 4)
    }
  ];


  function handleDragEnd(event, manager) {
    const { source, target } = event.operation;

    if (event.canceled) {
      if (source.type === 'item') {
        setTasks(previousItems.current);
      }
      return;
    }
  }

  function handleDragOver(event) {
    const { source, target } = event.operation;

    if (source?.type === 'column') return;

    setTasks((items) => move(items, event));
  }


  function saveDataWhenDragged(id, draggedTask) {
    tasksRef.current.removeTasks(id);
    tasksRef.current.addTasks(draggedTask);
  }

  const saveDataWhenSubmitted = (taskData) => {
    taskData = {
      id: crypto.randomUUID(),
      ...taskData
    }
    tasksRef.current.addTasks(taskData);

    setTasks([...tasksRef.current.tasksList]);
  }


  const handleOpenModal = () => {
    tasksDialogRef.current?.showModal();
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
          <Buttons variant="primary" className="flex" onClick={handleOpenModal} >
            <MdOutlineAdd />
            New Task
          </Buttons>
          <TasksAddModal tasksDialogRef={tasksDialogRef} clientData={clientData} saveDataWhenSubmitted={saveDataWhenSubmitted} />
        </div>
        <DragDropProvider
          onDragStart={() => {
            previousItems.current = tasks;
          }}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          sensors={(defaults) => [
            ...defaults.filter((sensor) => sensor !== PointerSensor),
            PointerSensor.configure({
              activationConstraints(event, source) {
                if (event.pointerType === 'touch') {
                  return [
                    new PointerActivationConstraints.Delay({ value: 500, tolerance: { x: 5, y: 5 } }),
                  ];
                }
                return [new PointerActivationConstraints.Distance({ value: 8 })];
              },
            }),
          ]}

        >
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {taskBoards.map((board, i) => (
              <TasksBoard key={board.id} id={board.id}>
                {board.datas.map((data, index) => (
                  <DraggableTask key={data.id} id={data.id} index={index} column={board.id} task={data} />
                ))}
              </TasksBoard>
            ))
            }
          </section>

        </DragDropProvider >

      </section >
    </>
  );
}