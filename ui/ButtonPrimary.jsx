function ButtonPrimary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold rounded-md bg-brand-blue px-6 py-3 text-white shadow-sm hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent cursor-pointer transition-colors duration-200 border border-brand-blue"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
