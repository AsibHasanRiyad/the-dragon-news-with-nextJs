import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
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
    route: "Post",
    pathname: "/post",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

const Footer = () => {
  return (
    <Box className="bg-black px-4 py-10">
      <Container>
        <Box
          className="text-center"
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
        </Box>
        {/* nav items */}
        <Box className="text-center w-full my-6">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className=" text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography className=" text-gray-300 text-xs text-center">
          @{new Date().getFullYear()} || The Dragon News || Designed by
          Programming Hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
