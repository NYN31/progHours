import SettingsLayout from "@/components/SettingsLayout"
import { useFormik } from "formik"
import * as Yup from "yup"
import { FormControl, Input, Label, ErrorMessage } from "@/components/Form"
import { Helmet } from "react-helmet-async"

const accountSchema = Yup.object().shape({
  name: Yup.string().trim(),
  uid: Yup.string().trim().length(7, "Invalid University ID"),
  email: Yup.string().trim().email("Invalid email"),
  currentPassword: Yup.string().trim(),
  newPassword: Yup.string().trim(),
  confirmPassword: Yup.string().trim(),
})

const AccountSettings = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      uid: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: accountSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <SettingsLayout>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <form className="space-y-12">
        <div className="space-y-6">
          <h3 className="mb-8">Change Account Settings</h3>
          <FormControl isInvalid={formik.touched.name && formik.errors.name}>
            <Input
              type="text"
              placeholder=" "
              {...formik.getFieldProps("name")}
            />
            <Label>Full Name</Label>
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.uid && formik.errors.uid}>
            <Input
              type="text"
              placeholder=" "
              {...formik.getFieldProps("uid")}
            />
            <Label>University ID</Label>
            <ErrorMessage>{formik.errors.uid}</ErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <Input
              type="email"
              placeholder=" "
              {...formik.getFieldProps("email")}
            />
            <Label>Email</Label>
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          </FormControl>
        </div>

        {/* save buttons */}
        <div className="flex items-center justify-end space-x-6">
          <button className="py-3 btn-outline" type="button">
            Cancel
          </button>
          <button className="btn-primary" type="submit">
            Save Changes
          </button>
        </div>
      </form>

      <form className="mt-24 space-y-12">
        <div className="space-y-6">
          <h3 className="mb-8">Change your Password</h3>

          <FormControl
            isInvalid={formik.touched && formik.errors.currentPassword}
          >
            <Input
              type="text"
              placeholder=" "
              {...formik.getFieldProps("currentPassword")}
            />
            <Label>Current Password</Label>
            <ErrorMessage>{formik.errors.currentPassword}</ErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched && formik.errors.newPassword}>
            <Input
              type="text"
              placeholder=" "
              {...formik.getFieldProps("newPassword")}
            />
            <Label>New Password</Label>
            <ErrorMessage>{formik.errors.newPassword}</ErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched && formik.errors.confirmPassword}
          >
            <Input
              type="text"
              placeholder=" "
              {...formik.getFieldProps("confirmPassword")}
            />
            <Label>Confirm Password</Label>
            <ErrorMessage>{formik.errors.newPassword}</ErrorMessage>
          </FormControl>
        </div>
        {/* save buttons */}
        <div className="flex items-center justify-end space-x-6">
          <button className="py-3 btn-outline" type="button">
            Cancel
          </button>
          <button className="btn-primary" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </SettingsLayout>
  )
}

export default AccountSettings
