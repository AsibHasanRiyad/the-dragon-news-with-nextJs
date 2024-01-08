"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Header from "./Header";

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
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Post",
    pathname: "/post",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <Header />
      <AppBar position="static" sx={{ background: "black", color: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} height={100} width={150} alt="logo" />
            <Box className="text-center w-full">
              {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className=" text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            {/* icons */}
            <Box>
              <Stack
                direction="row"
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
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <YouTubeIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
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
