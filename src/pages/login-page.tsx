import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { login } from "../services/auth.service";
import toast from "react-hot-toast";


YupPassword(yup); // extend yup

const schema = yup.object().shape({
  
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

export default function LoginPage() {

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
      const userCredential = await login(
        data.email,
        data.password!
      );
      if (userCredential.user != null) {
        toast.success("เข้าระบบสำเร็จ !", {
          style: {
            borderRadius: "50px",
          },
        });
        navigate("/layout");
      }
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        
        toast.error("error password", {
          style: {
            borderRadius: "50px",
          },
        });
      } else if (error.code === "auth/user-not-found") {
        toast.error("user not found !", {
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
            <Typography component="h1" variant="h5" color={'secondary'}>
              ลงชื่อเข้าใช้งาน
            </Typography>
            <Box
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register("email")}
                    error={errors.email ? true : false}
                    helperText={errors.email && errors.email.message}
                    fullWidth
                    label="Email Address"
                    sx={{bgColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],}}
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
                    sx={{bgColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],}}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                LOGIN
              </Button>
              <Grid container justifyContent="flex-start" spacing={1}  >
                <Grid item   style={{paddingTop: 20}} flexGrow={1}>
                  <RouterLink to="/" style={{ textDecoration: "none" , paddingTop: 2 }}>
                    <HomeIcon sx={{color: 'secondary.main'}} fontSize="large"  style={{marginLeft: 20}}/>
                  </RouterLink>
                </Grid>
                
                <Grid item textAlign={"end"}  style={{paddingTop: 25}}>
                  <RouterLink to="/register" style={{ textDecoration: "none" }} >
                    <Typography variant="body1" color="warning">
                       ลงทะเบียนผู้ใช้ใหม่
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
