function Form({ children, method, action }) {
  return (
    <form method={method} action={action}>
      {children}
    </form>
  );
}
