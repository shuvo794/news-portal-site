import { Grid } from '@mui/material';
import LatestNews from '@/components/ui/LatestNews/LatestNews'
const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
          <h2>Sidebar</h2>
        </Grid>
       </Grid>
    </>
  );
};

export default HomePage;