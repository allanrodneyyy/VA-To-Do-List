export function ClientsAddModalTextfields() {
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
            <label htmlFor={`${field.fieldName}`} className="font-semibold">{field.label}</label>
            <div className="flex items-center gap-1 p-0.5
            text-base
             focus-within:border-blue-500
             focus-within:border
             focus-within:rounded">
              <input type="text" id={`${field.fieldName}`} name={`${field.fieldName}`} className="outline-0 border-(--border) border rounded w-full p-1" />
            </div>
          </div>
        ))
      }
    </>
  );
}