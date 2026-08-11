import { closestCenter } from "@dnd-kit/collision";
import { DraggableTask } from "./DraggableTask";
import { useDroppable } from "@dnd-kit/react";

export function TasksBoard({ title, status_id, tasks }) {
  const { isDropTarget, ref } = useDroppable({
    id: status_id,
    collisionDetector: closestCenter,

  });

  return (
    <>
      <div className="flex flex-col gap-2 " ref={ref}>
        <div className="flex gap-2 font-semibold items-center">
          <p>{title}</p>
          <p className="bg-black text-white rounded-2xl px-2 py-0.5">{tasks.length}</p>
        </div>

        <div className={`border rounded-lg  p-2  min-h-150 space-y-2 ${isDropTarget ? "border-green-400 bg-gray-50 " : "border-(--border) bg-gray-200"}`} >
          {tasks.map((task, index) => (
            <DraggableTask key={task.id} id={task.id} task={task} index={index} />
          ))}
        </div>
      </div >
    </>

  )
}