import { MdDragIndicator } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSortable } from '@dnd-kit/react/sortable';
import { useDraggable } from "@dnd-kit/react";
import { RestrictToWindow } from '@dnd-kit/dom/modifiers';

export function DraggableTask({ id, task, index, column }) {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: 'item',
    accept: 'item',
    group: column,
    modifiers: [RestrictToWindow]
  });


  return (
    <section className={`flex border rounded-lg border-(--border) shadow flex-col p-2 bg-white gap-2 touch-none w-full  ${isDragging ? "opacity-30" : "opacity-100"}
      `} ref={ref}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <MdDragIndicator color="gray" className={`cursor-grab active:cursor-grabbing `} size={20} />
          <div>
            <p>{task.title}</p>
            <p className="text-xs text-gray-400">Allan Rodney Maniago</p>
          </div>

        </div>
        <BiDotsVerticalRounded color="gray" className="hover:text-black hover:cursor-pointer" size={20} />
      </div>

      <div className="pl-7 space-y-2 text-gray-400 text-sm">
        <p className="line-clamp-3 ">Description</p>
        <div>
          <p>Priority</p>
          <p>Category</p>
        </div>
        <div className="space-y-1">
          <p>DeadLine</p>
          <p>estimated time</p>
        </div>
      </div>
    </section>

  )
}