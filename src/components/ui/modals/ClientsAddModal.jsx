export function ClientsAddModal({ dialogRef }) {
  return (
    <dialog ref={dialogRef}>
      <p>
        Sample content
      </p>

      <button onClick={() => dialogRef.current.close()}>Close</button>
    </dialog>
  );

}
