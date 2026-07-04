import * as Yup from "yup";
import { Form, Formik } from "formik";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import FormikControl from "../../components/formikComponents/FormikControl";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),

  password: Yup.string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

function Login() {
  return (
    <AuthLayout title="ورود به حساب">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="mb-4">
            <FormikControl
              formik={formik}
              control="input"
              type="email"
              name="email"
              label="ایمیل"
            />

            <FormikControl
              formik={formik}
              control="input"
              type="password"
              name="password"
              label="رمز عبور"
            />

            <button type="submit" className="btn btn-primary w-100 mt-3">
              ورود
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/register">
        <h6 className="register-text text-center text-light ">
          هنوز حساب کاربری ندارید؟
          <span className="text-dark me-2" style={{ cursor: "pointer" }}>
            ثبت‌نام
          </span>
        </h6>
      </Link>
    </AuthLayout>
  );
}

export default Login;
