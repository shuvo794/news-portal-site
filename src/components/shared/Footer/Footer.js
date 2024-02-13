import { Box, Button, Container, Typography } from '@mui/material';

import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from 'next/link';

const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/category",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "About",
    pathName: "/about",
  },
  {
    route: "Contuct",
    pathName: "/contuct",
  },
];

const Footer = () => {
    return (
      <Box className="bg-black px-2 py-10">
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

          <Box className="text-center w-full">
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
                </Box>
                <Typography variant='body2' color='gray' textAlign='center'>
                    @2023 by The News Site Desgin by Shuvo
                </Typography>
        </Container>
      </Box>
    );
};

export default Footer;