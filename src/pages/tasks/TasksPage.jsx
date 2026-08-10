import { useEffect, useState, useRef } from "react";
import { Header } from "../../components/Layout/Header";
import Buttons from "../../components/ui/buttons/Buttons";
import { MdOutlineAdd } from "react-icons/md";
import { Tasks } from "../../data/tasks";
import { TasksBoard } from "../../components/Layout/Tasks/TasksBoard";
import { DragDropProvider } from "@dnd-kit/react";
import { PointerSensor, PointerActivationConstraints } from '@dnd-kit/dom';
export function TasksPage({ theme, setTheme, tasks, setTasks, tasksRef }) {

  const todoTasks = tasks.filter(task => Number(task.status_id) === 1);
  const progressTasks = tasks.filter(task => Number(task.status_id) === 2);
  const reviewTasks = tasks.filter(task => Number(task.status_id) === 3);
  const doneTasks = tasks.filter(task => Number(task.status_id) === 4);

  const taskBoards = [{
    id: 1,
    name: 'To Do',
    datas: todoTasks
  }, {
    id: 2,
    name: 'In progress',
    datas: progressTasks
  }, {
    id: 3,
    name: 'Review',
    datas: reviewTasks
  }, {
    id: 4,
    name: 'Done',
    datas: doneTasks
  }]


  function handleDragEnd(event, manager) {
    const { operation, canceled } = event;
    const { source, target } = operation;

    if (canceled || !target) return;

    if (source.id === target.id) return

    setTasks((prev) => {
      const draggedTask = prev.find(d => d.id === source.id);
      const isDraggedToAnotherTask = prev.find(d => d.id === target.id);
      const newStatusId = isDraggedToAnotherTask ? isDraggedToAnotherTask.status_id : target.id;
      const updatedTasks = prev.map((data) => {
        if (data.id === source.id)
          return {
            ...data,
            status_id: newStatusId
          }
        return data;
      });
      return updatedTasks
    });

    // if (!over) return;

    // if (active.id === over.id) {
    //   return;
    // }

    // setTasks((prev) => {
    //   const draggedTask = prev.find(d => d.id === active.id);
    //   const isDraggedToAnotherTask = prev.find(d => d.id === over.id);
    //   const newStatusId = isDraggedToAnotherTask ? isDraggedToAnotherTask.status_id : over.id;
    //   const updatedTasks = prev.map((data) => {
    //     if (data.id === active.id) {
    //       data.status_id = newStatusId;
    //     }
    //     return data;
    //   });
    //   return updatedTasks
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


        <DragDropProvider
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
            {taskBoards.map((board) => (
              <TasksBoard key={board.id} title={board.name} status_id={board.id} tasks={board.datas} />
            ))}
          </section>

        </DragDropProvider>

      </section>
    </>
  );
}