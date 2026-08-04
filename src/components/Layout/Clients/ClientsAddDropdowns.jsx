import { dropdowns } from "../../../data/dropdowns";

export function ClientsAddDropdowns({ theme, setTheme }) {

  return (
    <>
      {dropdowns.map((dropdown) => (
        <div key={dropdown.fieldName} className="flex flex-col gap-0.5">
          <label htmlFor={dropdown.fieldName} className="font-semibold">{dropdown.label}</label>
          <div className="flex items-center gap-1 p-0.5
            text-base
             focus-within:border-blue-500
             focus-within:border
             focus-within:rounded">
            <select name={dropdown.fieldName} id={dropdown.id} className={`outline-0 border-(--border) border rounded w-full p-2 ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-white text-neutral-900'}`} >
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