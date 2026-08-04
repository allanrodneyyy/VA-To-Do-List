export function ClientsAddModalTextfields({ nameRef, nameIsValid }) {
  const fields = [{
    fieldName: "name",
    label: 'Name'
  }, {
    fieldName: "company",
    label: 'Company'
  }, {
    fieldName: "email",
    label: 'Email'
  }, {
    fieldName: "phone",
    label: 'Phone'
  }]
  return (
    <>
      {
        fields.map((field) => (
          <div key={field.fieldName} className="flex flex-col gap-0.5">
            <label htmlFor={field.fieldName} className="font-semibold" >{field.label} {field.fieldName === 'name' ? '*' : ''}</label>
            <div className={` p-0.5
            text-base
             focus-within:border
             focus-within:rounded ${!nameIsValid && field.fieldName === 'name' ? 'focus-within:border-red-500' : 'focus-within:border-blue-500'}`}>
              <input type="text" id={field.fieldName} name={field.fieldName} ref={field.fieldName === 'name' ? nameRef : null}
                className="outline-0 border-(--border) border rounded w-full p-1" />
            </div>

            <div className={` ${!nameIsValid && field.fieldName === 'name' ? 'flex' : 'hidden'} gap-2`}>
              <p className="text-xs text-red-500">This is required</p>
              <p className="text-xs text-red-500">*</p>
            </div>
          </div >
        ))
      }
    </>
  );
}