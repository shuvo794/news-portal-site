import { Box, Container, Typography } from "@mui/material";

import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-3">
      <Container>
        {/* <Image
          src={headingImage}
         width={250}
          alt="logo"
          className=" mx-auto"
        /> */}
        <Typography
          variant="h3"
          color="black"
          textAlign="center"
          className="my-2"
        >
          <i className="font-bold  rounded">
            The News <span className="text-red-600">Portal</span>
          </i>
        </Typography>
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
