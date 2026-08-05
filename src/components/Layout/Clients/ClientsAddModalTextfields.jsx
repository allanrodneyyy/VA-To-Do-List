export function ClientsAddModalTextfields({ nameRef, nameIsValid, numberOnly, handleNumbers }) {
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
        fields.map((field) => {
          const isName = field.fieldName === "name";
          const isPhone = field.fieldName === "phone";
          const isEmail = field.fieldName === "email";

          return (
            <div key={field.fieldName} className="flex flex-col gap-0.5">
              <label htmlFor={field.fieldName} className="font-semibold">
                {field.label} {isName && "*"}
              </label>

              <div
                className={`p-0.5 text-base focus-within:border focus-within:rounded ${!nameIsValid && isName
                  ? "focus-within:border-red-500"
                  : "focus-within:border-blue-500"
                  }`}
              >
                <input
                  id={field.fieldName}
                  name={field.fieldName}
                  type={isEmail ? "email" : isPhone ? "tel" : "text"}
                  ref={isName ? nameRef : undefined}
                  value={isPhone ? numberOnly : undefined}
                  onChange={isPhone ? handleNumbers : undefined}
                  inputMode={isPhone ? "numeric" : undefined}
                  pattern={isPhone ? "[0-9]*" : undefined}
                  maxLength={isPhone ? 10 : undefined}
                  className="outline-0 border-(--border) border rounded w-full p-1"
                />
              </div>

              {!nameIsValid && isName && (
                <div className="flex gap-2">
                  <p className="text-xs text-red-500">This is required</p>
                  <p className="text-xs text-red-500">*</p>
                </div>
              )}
            </div>
          )
        })}
    </>
  );
}