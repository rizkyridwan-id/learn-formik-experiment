import { Formik, FormikHelpers } from "formik";
import { FormValues } from "../interface/form.interface";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

export default function FormikVerbose() {
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
        Formik Verbose Version
      </h1>
      <h2 className="text-lg text-slate-400 font-light italic text-center">
        note: See the script to see the differences.
      </h2>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          touched,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 w-full gap-x-8"
          >
            <Input
              label="Your Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
              className="col-span-12 md:col-span-6"
            />
            <Input
              label="Your Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
              className="col-span-12 md:col-span-6"
            />
            <TextArea
              label="Your Address"
              name="address"
              error={errors.address && touched.address && errors.address}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              className="col-span-12"
            />
            <div className="col-span-12 text-right ">
              <Button isSubmitting={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
