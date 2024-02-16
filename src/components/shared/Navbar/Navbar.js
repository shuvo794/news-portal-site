"use client"

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../../assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Header from "../Header/Header";

// Navbar Menu
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
    route: "Categories",
    pathName: "/categories",
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

function Navbar() {
  return (
    <>
      <Header/>
      <AppBar className="bg-black" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="" />

            <Box className="text-center w-full">
              {navItems.map((item) => (
                <Link key={item} href={item.pathName}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                "& svg": {
                  color: "white",
                },
              }}
            >
              <Stack direction="row">
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
