import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <Box className="bg-black text-center px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <GoogleIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <TelegramIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>

        <Typography variant="body2" color="gray" textAlign="center">
          @2024 The Dragon News. Design by Shuvo.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
