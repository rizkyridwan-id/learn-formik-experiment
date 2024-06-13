import FormikConcise from "./components/FormikConcise";
import FormikNewsletter from "./components/FormikNewsletter";
import FormikVerbose from "./components/FormikVerbose";

function App() {
  return (
    <div className="flex w-full p-4 flex-col bg-slate-100">
      <h1 className="text-3xl font-bold">Formik Experiment</h1>
      <FormikVerbose />
      <FormikConcise />
      <FormikNewsletter />
    </div>
  );
}

export default App;
