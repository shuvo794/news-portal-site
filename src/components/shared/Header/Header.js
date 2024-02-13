import Image from 'next/image';
import headerLogo from '../../../assets/Logo (2).png'
import { Box, Typography } from '@mui/material';
const Header = () => {
    return (
        <Box>
            <Image className='mx-auto' src={headerLogo} width={200} height={100} alt='logo' />
            <Typography variant='body1' color='gray' align='center' mt='5'>
             All Jurnalist Write articel here
            </Typography>
        </Box>
    );
};

export default Header;