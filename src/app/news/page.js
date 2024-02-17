import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import top1 from '../../assets/top1.jpeg'
import lastbar from '../../assets/1.jpeg'
import lastbar4 from '../../assets/5.jpeg'
import top2 from "../../assets/2.jpeg";
import top3 from "../../assets/3.jpeg";
import lastbar2 from "../../assets/side-top-news.png";
const NewsPage = () => {
    return (
      <Box>
        <Box className="my-4">
          <Grid container spacing={3}>
            <Grid item xs className="my-5">
              <Typography variant="h5">
                Aleksei Navalny Outspoken Putin Critic Is Dead, Russian
                Authorities Say
              </Typography>
              <Divider />
              <Typography className="my-3">
                Aleksei A. Navalny, the leading opposition figure in Russia,
                died in prison, Russia’s Federal Penitentiary Service said. His
                spokeswoman said his team could not immediately confirm his
                death.
              </Typography>
              <Divider />
              <Typography className="my-3">
                Read Excerpts From Navalny’s Interview With The Times
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Image src={top1} width={800} height={500} alt="" />
            </Grid>
            <Grid item xs>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image src={lastbar} alt="HeroImage" />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom component="div">
                      Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                      Military Aid Package Yet
                    </Typography>
                    <Typography gutterBottom component="div">
                      By Shuvo - Mar 18 2023
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      It is a long established fact that a reader will be
                      distracted by the readable.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box className="my-4">
          <Grid container spacing={3}>
            <Grid item xs className="my-5">
              <Typography variant="h5">
                Trial Will Test Trump’s Limits of Reaping Political Gain From
                Legal Woes
              </Typography>
              <Divider />
              <Typography className="my-3">
                The first of four criminal trials Donald Trump is facing is set
                to begin next month, but his inner circle sees a silver lining
                in the timing. death.
              </Typography>
              <Divider />
              <Typography className="my-3">
                Read Excerpts From Navalny’s Interview With The Times
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Image src={top2} width={800} height={500} alt="" />
            </Grid>
            <Grid item xs>
              <Card>
                <CardActionArea>
                  <CardMedia>
                    <Image src={lastbar4} alt="HeroImage" />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom component="div">
                      “Bob Marley: One Love” zooms in on a period in the 1970s
                      when the reggae icon moved to London and worked on the hit
                      album “Exodus.”
                    </Typography>
                    <Typography gutterBottom component="div">
                      Here’s more on that film and other entertainment
                      highlights this weekend →
                    </Typography>
                   
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box className="my-4">
          <Grid container spacing={3}>
            <Grid item xs className="my-5">
              <Typography variant="h5">
                Trial Will Test Trump’s Limits of Reaping Political Gain From
                Legal Woes
              </Typography>
              <Divider />
              <Typography className="my-3">
                Kansas City Grappled With Shootings Long Before the Super Bowl
              </Typography>
              <Divider />
              <Typography className="my-3">
                Homicides in Kansas City, Mo., increased last year, many of them
                attributed to arguments, officials say.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Image src={top3} width={800} height={500} alt="" />
            </Grid>
            <Grid item xs>
              <Box>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Image src={lastbar2} alt="" />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid className="my-6" item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Bitcoin Climbs as Elon Musk Says Tesla
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Image src={lastbar2} alt="" />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid className="my-6" item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Bitcoin Climbs as Elon Musk Says Tesla
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Image src={lastbar2} alt="" />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid className="my-6" item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Bitcoin Climbs as Elon Musk Says Tesla
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
};

export default NewsPage;