import { clientSortDropdown } from "../../../data/clientsortdropdown";
export function DropdownSort({ theme, setTheme, setSortStatus, sortStatus }) {

  return (
    <>
      {clientSortDropdown.map((dropdown) => (
        <select key={dropdown.fieldName} name={dropdown.fieldName} id={dropdown.fieldName} className={`outline-0 border-(--border) border rounded w-full sm:w-max  p-2 ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-white text-neutral-900'}`} value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}  >
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