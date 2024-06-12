export default function Button({ isSubmitting, type, children }: any) {
  return (
    <button
      disabled={isSubmitting}
      type={type}
      className="w-full md:w-20 inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
    >
      <span>{children}</span>
    </button>
  );
}
