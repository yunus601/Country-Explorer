function ButtonPrimary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="mx-auto  rounded-md bg-brand-blue px-4 py-6 mt-12 text-xl font-bold text-blue-50 shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-blue-600"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
