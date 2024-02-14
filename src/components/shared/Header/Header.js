import Image from 'next/image';
import headerLogo from '../../../assets/Logo (4).png'
import { Box, Typography } from '@mui/material';
import { displayCurrentDate } from '@/utils/displayCurrentDate';
const Header = () => {
  const currentDate = displayCurrentDate();
    return (
      <Box className="w-full">
        <Image
          className="mx-auto"
          src={headerLogo}
          width={400}
          height={50}
          alt="logo"
        />
        <Typography
          className="mt-5"
          variant="body1"
          color="gray"
          textAlign="center"
        >
          All Jurnalist Write articel here
        </Typography>
        <Typography variant="body2" className="mb-5" textAlign="center">
          {currentDate}
        </Typography>
      </Box>
    );
};

export default Header;