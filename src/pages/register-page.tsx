import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
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
    .minUppercase(1, "must have at lease 1 Uppercase charector"), // add an additional rule
});

type FormData = yup.InferType<typeof schema>;

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
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
                    error = {errors.firstName? true: false}
                    helperText = {errors.firstName && errors.firstName.message}
                    fullWidth
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("lastName")}
                    error = {errors.lastName? true: false}
                    helperText = {errors.lastName && errors.lastName.message}
                    fullWidth
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("email")}
                    error = {errors.email? true: false}
                    helperText = {errors.email && errors.email.message}
                    fullWidth
                    label="Email Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("password")}
                    error = {errors.password? true: false}
                    helperText = {errors.password && errors.password.message}
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
              <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item>
                  <RouterLink to="/" style={{ textDecoration: "none" }}>
                    HOME
                  </RouterLink>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
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
