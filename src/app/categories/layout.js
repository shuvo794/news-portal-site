import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";


const CategoriesLayout = ({children}) => {
    return (
      <Box>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
        <Grid item xs={3}>
        <CategoryList/>
        </Grid>
            <Grid item xs={9}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default CategoriesLayout;