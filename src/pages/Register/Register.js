import * as Yup from "yup";
import { Form, Formik } from "formik";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import FormikControl from "../../components/formikComponents/FormikControl";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("نام الزامی است"),

  lastName: Yup.string().required("نام خانوادگی الزامی است"),

  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),

  phone: Yup.string()
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست")
    .required("شماره موبایل الزامی است"),

  password: Yup.string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .required("رمز عبور الزامی است"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور الزامی است"),
});

const Register = () => {
  return (
    <AuthLayout title="ثبت نام">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="row">
              <FormikControl
                formik={formik}
                control="input"
                type="text"
                name="firstName"
                label="نام"
              />

              <FormikControl
                formik={formik}
                control="input"
                type="text"
                name="lastName"
                label="نام خانوادگی"
              />
            </div>

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
              type="tel"
              name="phone"
              label="شماره موبایل"
            />

            <FormikControl
              formik={formik}
              control="input"
              type="password"
              name="password"
              label="رمز عبور"
            />

            <FormikControl
              formik={formik}
              control="input"
              type="password"
              name="confirmPassword"
              label="تکرار رمز عبور"
            />

            <button type="submit" className="btn btn-primary w-100 mt-3">
              ثبت نام
            </button>
          </Form>
        )}
      </Formik>

      <h6 className="register-text text-center mt-4 text-light">
        قبلاً ثبت‌نام کرده‌اید؟
        <span
          className="text-primary fw-bold me-2"
          style={{ cursor: "pointer" }}
        >
          ورود
        </span>
      </h6>
    </AuthLayout>
  );
};

export default Register;
