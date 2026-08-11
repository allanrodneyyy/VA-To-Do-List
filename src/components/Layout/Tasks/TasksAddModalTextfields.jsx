export function TasksAddModalTextfields() {
  const fields = [{
    fieldName: "title",
    label: 'Title'
  }, {
    fieldName: "description",
    label: 'Description'
  }]
  return (
    <>
      {
        fields.map((field) => {
          const isTitle = field.fieldName === 'title';
          const isDescription = field.fieldName === 'description';

          return (
            <div key={field.fieldName} className="flex flex-col gap-0.5 col-span-2">
              <label htmlFor={field.fieldName} className="font-semibold">
                {field.label} {isTitle && "*"}
              </label>

              <div className={`p-0.5 flex text-base focus-within:border focus-within:rounded focus-within:border-blue-500`}>
                {isTitle ? <input id={field.fieldName} name={field.fieldName} className="outline-0 border-(--border) border rounded w-full p-1" />
                  :
                  <textarea name="notes" id="notes" className="w-full outline-0 border-(--border) border rounded p-1"></textarea>
                }
              </div>
            </div>
          );
        })}
    </>
  );
}