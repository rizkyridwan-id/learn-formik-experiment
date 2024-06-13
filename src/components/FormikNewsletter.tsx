import { useFormik } from "formik";
import { FormNewsletter } from "../interface/form.interface";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";

export default function FormikNewsletter() {
  const initialValues: FormNewsletter = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const handleSubmit = (values: FormNewsletter) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema: yup.ObjectSchema<FormNewsletter> = yup.object({
    firstName: yup
      .string()
      .required("Firstname is required")
      .max(15, "Must be 15 characters or less"),
    lastName: yup
      .string()
      .required("Lastname is required")
      .max(20, "Must be 20 character or less"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div className="rounded-2xl p-4 flex flex-col my-4 bg-white w-3/4 md:w-7/12 mx-auto">
      <h1 className="text-2xl text-slate-600 font-semibold text-center">
        Formik Newsletter
      </h1>
      <h2 className="text-lg text-slate-400 font-light italic text-center">
        note: Based on tutorial, see github commit log for detailed steps
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-12 w-full gap-x-8"
      >
        <Input
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          error={
            formik.touched.firstName &&
            formik.errors.firstName &&
            formik.errors.firstName
          }
          className="col-span-12 md:col-span-6"
        />

        <Input
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={
            formik.touched.lastName &&
            formik.errors.lastName &&
            formik.errors.lastName
          }
          className="col-span-12 md:col-span-6"
        />

        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email && formik.errors.email
          }
          className="col-span-12 md:col-span-6"
        />

        <div className="col-span-12 text-right ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
