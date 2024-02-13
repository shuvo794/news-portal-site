import Image from 'next/image';
import headerLogo from '../../../assets/Logo (2).png'
import { Box, Typography } from '@mui/material';
import { displayCurrentDate } from '@/utils/displayCurrentDate';
const Header = () => {
  const currentDate = displayCurrentDate();
    return (
      <Box>
        <Image
          className="mx-auto"
          src={headerLogo}
          width={150}
          height={100}
          alt="logo"
        />
        <Typography variant="body1" color="gray" align="center">
          All Jurnalist Write articel here
        </Typography>
        <Typography variant="body1" color="gray" align="center">
          {currentDate}
        </Typography>
      </Box>
    );
};

export default Header;