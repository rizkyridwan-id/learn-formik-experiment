import { Form, Formik, FormikHelpers } from "formik";
import { FormValues } from "../interface/form.interface";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import Button from "./Button";

export default function FormikConcise() {
  const initialValues: FormValues = {
    email: "",
    address: "",
    password: "",
  };

  const validate = (values: FormValues): object => {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) errors.password = "Required";
    if (!values.address) errors.address = "Required";

    return errors;
  };

  const handleSubmit = (
    values: FormValues,
    formik: FormikHelpers<FormValues>
  ) => {
    console.log("FormValue:", values);
    alert(JSON.stringify(values, null, 2));
    setTimeout(() => {
      formik.setSubmitting(false);
    }, 1000);
  };
  return (
    <div className="rounded-2xl p-4 flex flex-col my-4 bg-white w-3/4 md:w-7/12 mx-auto">
      <h1 className="text-2xl text-slate-600 font-semibold text-center">
        Formik Concise Version
      </h1>
      <h2 className="text-lg text-slate-400 font-light italic text-center">
        note: See the script to see the differences.
      </h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-12 w-full gap-x-8">
            <FormikInput
              label="Your Email"
              type="email"
              name="email"
              className="col-span-12 md:col-span-6"
            />
            <FormikInput
              label="Your Password"
              type="password"
              name="password"
              className="col-span-12 md:col-span-6"
            />
            <FormikTextArea
              label="Your address"
              name="address"
              className="col-span-12"
            />
            <div className="col-span-12 text-right ">
              <Button isSubmitting={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
