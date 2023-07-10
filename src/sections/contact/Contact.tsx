import { TextField } from "@mui/material"
import "./Contact.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from 'notistack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact: FC = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <section id="contact">

      <div className="container contact__container">

        <div className="contact__left">


          <h1 className="contact__header">Get In Touch</h1>
          <p>Shoot me a message via any of the links below </p>
          <div className="icons">
            <a href="tel:+9779840527839">
              <WhatsAppIcon sx={{ fontSize: "60px", color: "#128c7e" }} className="icons__features" />
            </a>
            <a href="https:www.instagram.com">

              <InstagramIcon sx={{ fontSize: "60px", color: "#E1306C" }} className="icons__features" />
            </a>
            <a href="https:www.facebook.com">

              <FacebookIcon sx={{ fontSize: "60px", color: "#0165E1" }} className="icons__features" />
            </a>

          </div>

        </div>
        <div className="contact__right">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: ''
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Please enter your Name"),
              email: Yup.string().email("Email must be valid").required("Enter your email address"),
              message: Yup.string().max(50).required("Message field is required.")
            })}
            onSubmit={async (values) => {
              try {
                //api calls
                // alert("submitteed")
                enqueueSnackbar('Message sent sucessfully', {
                  variant: 'success',
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                });

                values.email = "",
                  values.name = "",
                  values.message = ""



              } catch (error) {
                //eroor handling
                enqueueSnackbar('Failed to send Message', {
                  variant: 'error',
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                });
              }

            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values

            }): JSX.Element => (


              <form noValidate onSubmit={handleSubmit}>


                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  margin="normal"
                  label="Your Name"
                  // autoFocus
                  helperText={touched.name && errors.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />


                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  margin="normal"
                  label="Email Address"
                  // autoFocus
                  helperText={touched.email && errors.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined" />



                <TextField

                  error={Boolean(touched.message && errors.message)}
                  fullWidth
                  margin="normal"
                  label="Enter your Query"
                  // autoFocus
                  helperText={touched.message && errors.message}
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.message}
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <button className="btn primary">Send</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Contact