import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import toast from "react-hot-toast";
import { registerUser } from "../services/auth.service";

YupPassword(yup); // extend yup

const schema = yup.object().shape({
  firstName: yup.string().required("input required"),
  lastName: yup.string().required("input required"),
  email: yup
    .string()
    .required("input required")
    .email("please input email type"),
  password: yup
    .string()
    .required("input required")
    .password()
    .min(8, "must have at lease 8 charectors") // disable minimum characters completely
    .minLowercase(0)
    .minSymbols(0)
    .minUppercase(1, "must have at lease 1 Uppercase charector"), // add an additional rule
});

type FormData = yup.InferType<typeof schema>;

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const userCredential = await registerUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password!
      );
      if (userCredential.user != null) {
        toast.success("ลงทะเบียนสำเร็จ !", {
          style: {
            borderRadius: "50px",
          },
        });
        navigate("/");
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        
        toast.error("มี email นี้ในระบบแล้ว", {
          style: {
            borderRadius: "50px",
          },
        });
      } else {
        toast.error(error.message, {
          style: {
            borderRadius: "50px",
          },
        });
      }
    }
  };

  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://warin.go.th/">
          Warinchamrab Hospital
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Card sx={{ px: 5, py: 2, width: 500, marginTop: 8 }}>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <HowToRegRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="secondary">
              ลงทะเบียนผู้ใช้ใหม่
            </Typography>
            <Box
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("firstName")}
                    error={errors.firstName ? true : false}
                    helperText={errors.firstName && errors.firstName.message}
                    fullWidth
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("lastName")}
                    error={errors.lastName ? true : false}
                    helperText={errors.lastName && errors.lastName.message}
                    fullWidth
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("email")}
                    error={errors.email ? true : false}
                    helperText={errors.email && errors.email.message}
                    fullWidth
                    label="Email Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("password")}
                    error={errors.password ? true : false}
                    helperText={errors.password && errors.password.message}
                    fullWidth
                    label="Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ลงทะเบียน
              </Button>
              <Grid container justifyContent="flex-start" spacing={1}  >
                <Grid item   style={{paddingTop: 20}} flexGrow={1}>
                  <RouterLink to="/" style={{ textDecoration: "none" , paddingTop: 2 , marginLeft: 5}}>
                    <HomeIcon fontSize="large" color="secondary" style={{marginLeft: 20}}/>
                  </RouterLink>
                </Grid>
                <Grid item textAlign={"end"}  style={{paddingTop: 25}}>
                  <RouterLink to="/login" style={{ textDecoration: "none" }} >
                    <Typography variant="body1" color="warning">
                    Already have an account? Sign in
                    </Typography>
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
