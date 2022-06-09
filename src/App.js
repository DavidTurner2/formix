import ToDoClass from './ToDoClass';
import {useFormik} from 'formik';
function App() {


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },  onSubmit: values => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });


  return (
    <div>
       <form onSubmit={formik.handleSubmit}>
   
      
       <label htmlFor="email">Email</label>
        <input
          id="emailField"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}

        <div>Password</div>
       <input
         id="pswField"
         name="password"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.password}
       /> {formik.errors.password ? <div id="pswError" style={{ color: "red" }}> {formik.errors.password}</div> :null}
       <button type="submit">Submit</button>
     </form>
      {/* <ToDoClass /> */}
    </div>
  );
}

export default App;
