import { Box, Container } from '@mui/material';

import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

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
        </Container>
      </Box>
    );
};

export default Footer;