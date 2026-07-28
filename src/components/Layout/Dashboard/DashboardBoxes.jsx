import {
  MdOutlineTimer,
  MdOutlinePriorityHigh,
  MdOutlinePendingActions
} from "react-icons/md";

export function DashboardBoxes() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='flex flex-col bg-(--panel) p-5 gap-3 rounded-2xl hover:bg-(--hover-panel) cursor-pointer'>
        <div className='flex justify-between font-semibold text-sm'>
          <p>Tasks Due Today</p>
          <MdOutlinePriorityHigh color='#6a7282' />
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-extrabold '>0</p>
          <p className='text-xs text-gray-500'>Need Attention</p>
        </div>
      </div>

      <div className='flex flex-col bg-(--panel) p-5 gap-3 rounded-2xl hover:bg-(--hover-panel) cursor-pointer'>
        <div className='flex justify-between font-semibold text-sm'>
          <p>Hours Worked</p>
          <MdOutlineTimer color='#6a7282' />
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-extrabold '>0h 0m</p>
          <p className='text-xs text-gray-500'>Logged Today</p>
        </div>
      </div>

      <div className='flex flex-col bg-(--panel) p-5 gap-3 rounded-2xl hover:bg-(--hover-panel) cursor-pointer'>
        <div className='flex justify-between font-semibold text-sm'>
          <p>Pending Review</p>
          <MdOutlinePendingActions color='#6a7282' />
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-extrabold '>0</p>
          <p className='text-xs text-gray-500'>Awaiting Approval</p>
        </div>
      </div>
    </div>
  )
}