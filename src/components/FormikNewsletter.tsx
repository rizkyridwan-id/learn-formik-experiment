import { Form, Formik, FormikHelpers } from "formik";
import { FormNewsletter } from "../interface/form.interface";
import Button from "./Button";
import * as yup from "yup";
import FormikInput from "./FormikInput";

export default function FormikNewsletter() {
  const initialValues: FormNewsletter = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const handleSubmit = (
    values: FormNewsletter,
    { setSubmitting }: FormikHelpers<FormNewsletter>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
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

  return (
    <div className="rounded-2xl p-4 flex flex-col my-4 bg-white w-3/4 md:w-7/12 mx-auto">
      <h1 className="text-2xl text-slate-600 font-semibold text-center">
        Formik Newsletter
      </h1>
      <h2 className="text-lg text-slate-400 font-light italic text-center">
        note: Based on tutorial, see github commit log for detailed steps
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-12 w-full gap-x-8">
            <FormikInput
              id="firstName"
              name="firstName"
              type="text"
              label="First Name"
              className="col-span-12 md:col-span-6"
            />

            <FormikInput
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name"
              className="col-span-12 md:col-span-6"
            />

            <FormikInput
              id="email"
              name="email"
              type="email"
              label="Email"
              className="col-span-12 md:col-span-6"
            />

            <div className="col-span-12 text-right ">
              <Button type="submit" isSubmitting={isSubmitting}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
