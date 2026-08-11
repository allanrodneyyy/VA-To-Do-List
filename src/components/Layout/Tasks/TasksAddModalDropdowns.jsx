export function TasksAddModalDropdowns({ clientData }) {

  const dropdowns = [{
    id: 1,
    fieldName: "priority",
    label: 'Priority',
    options: clientData.map((data) => ({
      id: data.id,
      label: data.name
    }))
  }, {
    id: 2,
    fieldName: "status",
    label: 'Status',
    options: [{
      id: 1,
      label: 'To Do',
    }, {
      id: 2,
      label: 'In Progress',
    }, {
      id: 3,
      label: 'Review',
    }, {
      id: 4,
      label: 'Done'
    }]
  }, {
    id: 2,
    fieldName: "priority",
    label: 'Priority',
    options: [{
      id: 1,
      label: 'Low',
    }, {
      id: 2,
      label: 'Medium',
    }, {
      id: 3,
      label: 'High',
    }, {
      id: 4,
      label: 'Urgent'
    }]
  }]

  return (
    <>
      {
        dropdowns.map((dropdown) => (
          <div key={dropdown.fieldName} className="flex flex-col gap-0.5">
            <label htmlFor={dropdown.fieldName} className="font-semibold">{dropdown.label}</label>
            <div className="flex items-center gap-1 p-0.5
            text-base
             focus-within:border-blue-500
             focus-within:border
             focus-within:rounded">
              <select name={dropdown.fieldName} id={dropdown.id} className={`outline-0 border-(--border) border rounded w-full p-2 `} >
                {
                  dropdown.options.map((option, index) => (
                    <option key={option.id} value={option.id} disabled={option.id === 0 && true} >{option.label}</option>
                  ))
                }
              </select >
            </div>
          </div>
        ))
      }
    </>
  );
}