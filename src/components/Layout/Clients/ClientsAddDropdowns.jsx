export function ClientsAddDropdowns({ theme, setTheme }) {
  const dropdowns = [{
    fieldName: "status",
    label: 'Status',
    options: [
      {
        id: 1,
        label: "Active",
      },
      {
        id: 2,
        label: "On Hold",
      },
      {
        id: 3,
        label: "Completed",
      }]
  },
  {
    fieldName: "priority",
    label: 'Priority',
    options: [
      {
        id: 1,
        label: "Low",
        selected: true
      },
      {
        id: 2,
        label: "Medium",
      },
      {
        id: 3,
        label: "High",
      }]
  }]


  return (
    <>
      {dropdowns.map((dropdown) => (
        <div key={dropdown.fieldName} className="flex flex-col gap-0.5">
          <label htmlFor={`${dropdown.fieldName}`} className="font-semibold">{dropdown.label}</label>
          <div className="flex items-center gap-1 p-0.5
            text-base
             focus-within:border-blue-500
             focus-within:border
             focus-within:rounded">
            <select name={`${dropdown.id}`} id={`${dropdown.fieldName}`} className={`outline-0 border-(--border) border rounded w-full p-2 ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-white text-neutral-900'}`} >
              {
                dropdown.options.map((option, index) => (
                  <option key={option.id} value={option.id} >{option.label}</option>
                ))
              }
            </select >
          </div>
        </div>
      ))}
    </>
  );
}