import React from "react";

import { Card, Grid, Typography } from "@mui/material";
import { configuration } from "../configuration";

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
        <Card
          raised
          sx={{ width: "100%", backgroundColor: "pink", height: "300px" }}
        >
          ESTE ES UN BANNER DE INFORMACION
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography>Selecciona una categoría</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {configuration.products.categories.map((category) => (
            <Grid item xs={2}>
              <Card raised>{category}</Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
