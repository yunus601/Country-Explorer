function ButtonPrimary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="mx-auto rounded-lg bg-brand-blue px-8 py-4 text-xl font-bold text-blue-50 shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer focus-visible:outline-blue-600 transition-colors duration-200"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
