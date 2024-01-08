import headerImage from "@/assets/The Dragon News.png";
import { showCurrentDateTime } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  const currentDate = showCurrentDateTime();
  return (
    <Box>
      <Container className=" text-center my-5">
        <Image
          src={headerImage}
          alt="Dragon News"
          height={500}
          width={500}
          className="mx-auto"
        />
        <Typography className=" text-gray-700 text-base my-2 ">
          News without fear and favour
        </Typography>
        <Typography className=" text-black text-base ">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
