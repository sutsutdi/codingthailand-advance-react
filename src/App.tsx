import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "@fontsource/prompt";
import { PhotoCamera } from "@mui/icons-material";

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
        hicim.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  let checked: boolean = true
  // const changemode = ()=>{
  //   checked = !checked
  //   theme.palette.mode = "light"
  // }

  return (
    <div>
      <Container sx={{ padding: 5 }}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              alert("clicked");
            }}
          >
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color={"warning"}>
            Warning
          </Button>

          <Button variant="contained" color="error">
            Error
          </Button>
          <IconButton color="warning">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <Switch
            checked={checked}
            // onChange={changeMode}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Stack>
        <Stack
          spacing={1}
          direction="column"
          justifyContent="center"
          justifyItems={"center"}
        >
          <Box textAlign={"center"} color={"primary"} padding={5}>
            <Typography component="h1" variant="h4" color={"primary"}>
              Vite + React ไทยแลนด์
            </Typography>
            <Typography variant="body1">
              Click on the Vite and React logos to learn more
            </Typography>
          </Box>
        </Stack>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            component={Paper}
            elevation={6}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "success.dark" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" color={"success.light"}>
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color={"primary"} />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
