import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CV from "../../assets/check.pdf";
import { BiArrowBack } from "react-icons/bi";
import DownloadIcon from '@mui/icons-material/Download';
import { Alert, Autocomplete, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Formik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from 'notistack';
import axios from "axios";
import { configuration } from '../../config';
const purpose = [
    { label: 'For hiring', id: 1 },
    { label: "Gereral Purpose", id: 2 }
]

const Form = ({ setModal }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [purposeOf, setPurposeOf] = useState(purpose[0].label);
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [companyname, setCompanyName] = useState();

    // const handleName = (e: any) => {
    //     setName(e.target.value)
    // }

    // const handleEmail =(e : any) =>{
    //     setEmail(e.target.value)
    // }

    // const handleComapanyName = (e : any) =>{
    //     setCompanyName(e.target.value)
    // }

    return (
        <>
            <Dialog fullWidth maxWidth="sm" open={true}>

                <DialogTitle>
                    <Typography sx={{ fontSize: "20px", padding: "12px 0" }}>You are One step away to download ...</Typography>
                </DialogTitle>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        companyname: '',
                        purposeofdownload: '',
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required("Name field is required"),
                        email: Yup.string().email("Email must be valid").required("Enter your email address"),
                        purposeofdownload: Yup.object().shape({
                            label: Yup.string().required("Purpose of Download is required"),
                            id: Yup.number().required(),
                        }),
                    })}
                    onSubmit={async (values) => {
                        try {
                            console.log(values)
                            // api call for sucess
                            const response = await axios.post(configuration.apiUrlDownload, {
                                name : values.name,
                                email : values.email,
                                companyname : values.companyname,
                                purposeofdownload : purposeOf
                            })
                            console.log(response)
                            if (response) {
                                // console.log("hit")
                                // Trigger the download
                                const link = document.createElement('a');
                                link.href = CV;
                                link.download = 'check.pdf';
                                await link.click();

                                enqueueSnackbar('You can downloand the CV', {
                                    variant: 'success',
                                    anchorOrigin: {
                                        vertical: 'top',
                                        horizontal: 'right',
                                    },
                                });


                            }

                            setModal(prev => !prev)

                        } catch (error) {
                            // catch errorrs
                            const err = error!.response.data.errors[0].msg;
                            enqueueSnackbar(`${err}`, {
                                variant: 'error',
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                },
                            });
                        }
                    }}>

                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        touched,
                        values
                    }): JSX.Element => (
                        <>

                            <form noValidate onSubmit={handleSubmit} >

                                <DialogContent dividers sx={{ p: 2 }}>
                                    <Grid container spacing={2} flexWrap="wrap">
                                        <Grid item xs={12} lg={12}>

                                            <Grid container rowSpacing={2} key={values.name}>
                                                <Grid item xs={12}>
                                                    <TextField required
                                                        id="outlined-basic"
                                                        label="Name"
                                                        variant="outlined"
                                                        error={Boolean(touched.name && errors.name)}
                                                        fullWidth
                                                        margin="normal"
                                                        helperText={touched.name && errors.name}
                                                        name="name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        value={values.name}


                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField required
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
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        // error={Boolean(touched.email && errors.email)}
                                                        fullWidth
                                                        margin="normal"
                                                        name="companyname"
                                                        // onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        label="Company Name"
                                                        type="text"
                                                        value={values.companyname}
                                                        variant="outlined"

                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: "space-between" }}>
                                                    <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "1.2rem" }}>
                                                        Purpose of Download :
                                                    </Typography>
                                                    <Autocomplete
                                                        // disablePortal
                                                        id="combo-box-demo"
                                                        options={purpose}
                                                        defaultValue={purposeOf}
                                                        sx={{ width: 300 }}
                                                        renderInput={(params) => <TextField {...params} label="Purpose " />}
                                                        // onChange={(e, newValue) => { setPurposeOf(newValue?.label) }}
                                                        onChange={(e, newValue) => { setPurposeOf(newValue?.label); }}

                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>


                                </DialogContent>
                                <DialogActions >
                                    <a
                                        onClick={() => setModal(prev => !prev)}
                                        className="btn primary" style={{ background: "red", color: 'white' }} >
                                        <BiArrowBack />
                                        Go Back

                                    </a>

                                    {/* <a
                                    // href={CV} download
                                    className="btn primary" style={{ background: "green", color: 'white' }} type='Submit'>Download
                                    <DownloadIcon />
                                    
                                </a> */}
                                    <button className="btn primary" style={{ background: "green", color: 'white', marginLeft: '10px' }}>Download                       <DownloadIcon />
                                    </button>
                                </DialogActions>


                            </form>
                        </>
                    )}
                </Formik>
            </Dialog >

        </>
    )
}

export default Form