function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z"
      ></path>
    </svg>
  );
}

function AddNoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 1v3H1v2h3v3h2V6h3V4H6V1zM3 20.007V11h2v8h8v-5c0-.55.45-1 1-1l5-.001V5h-8V3h9.007c.548 0 .993.456.993 1.002V15l-6 5.996L4.002 21A1 1 0 0 1 3 20.007m15.171-5.008L15 15v3.169z"
      ></path>
    </svg>
  );
}

export { MenuIcon, AddNoteIcon };
