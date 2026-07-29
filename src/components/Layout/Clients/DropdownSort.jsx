export function DropdownSort() {
  const dropdowns = [{
    fieldName: "status",
    label: 'Status',
    options: [
      {
        id: 0,
        label: 'All Status'
      },
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
  }]
  return (
    <>
      {dropdowns.map((dropdown) => (
        <select name={`${dropdown.id}`} id={`${dropdown.fieldName}`} className="outline-0 border-(--border) border rounded w-full p-2" >
          {
            dropdown.options.map((option, index) => (
              <option key={option.id} value={option.id} >{option.label}</option>
            ))
          }
        </select >
      ))}
    </>
  );
}