import { useFormik } from "formik";
import { FormNewsletter } from "../interface/form.interface";
import Button from "./Button";
import Input from "./Input";

export default function FormikNewsletter() {
  const initialValues: FormNewsletter = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const handleSubmit = (values: FormNewsletter) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validate = (values: FormNewsletter) => {
    const errors: Partial<Record<keyof FormNewsletter, string>> = {};
    if (!values.firstName) {
      errors.firstName = "Firstname is Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Lastname is Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email Address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate,
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
          value={formik.values.firstName}
          error={formik.errors.firstName && formik.errors.firstName}
          className="col-span-12 md:col-span-6"
        />

        <Input
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={formik.errors.lastName && formik.errors.lastName}
          className="col-span-12 md:col-span-6"
        />

        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && formik.errors.email}
          className="col-span-12 md:col-span-6"
        />

        <div className="col-span-12 text-right ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
