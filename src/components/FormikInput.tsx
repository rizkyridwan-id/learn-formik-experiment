import { ErrorMessage, Field } from "formik";

export default function FormikInput({
  label,
  type,
  name,
  className = "",
}: any) {
  return (
    <div className={`relative my-3 ${className}`}>
      <Field
        type={type}
        name={name}
        className={`relative h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 inline autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 w-full`}
      />
      <label
        htmlFor="id-b03"
        className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
      >
        {label}
      </label>
      <small className="absolute flex justify-between w-full px-2 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
        <span>
          <ErrorMessage name={name} component="div" />
        </span>
      </small>
    </div>
  );
}
