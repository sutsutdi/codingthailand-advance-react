import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
  colors,
} from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { Link as RouterLink } from "react-router-dom";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Warinchamrab Hospital
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            I-Claim HICM
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.info"
              gutterBottom
            >
              ระบบ การเรียกเก็บค่าบริการประกันชีวิต
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.info"
              gutterBottom
            >
              Warinchamrab Hospital
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" component={RouterLink} to="/login">
                เข้าระบบ
              </Button>
              <Button
                variant="outlined"
                color="error"
                component={RouterLink}
                to="/register"
              >
                ลงทะเบียน
              </Button>
              <Button
                variant="outlined"
                color="success"
                component={RouterLink}
                to="/dashboard"
              >
                Dashboard
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
