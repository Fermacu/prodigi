import React from "react";

//UI Material
import { Button, Grid, Stack, Typography } from "@mui/material";

//Configuration
import { configuration } from "../configuration";

export default function AppViewport({ page }) {
  return (
    <Grid
      container
      sx={{
        p: 2,
        backgroundColor: configuration.customization.backgroundColor,
      }}
    >
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>LOGO DE LA TIENDA</Typography>
          <Stack direction="row" spacing={1}>
            <Button>Nosotros</Button>
            <Button>Contacto</Button>
            <Button>Ayuda & Soporte</Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
        {page}
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography>FOOTER DE LA TIENDA</Typography>
      </Grid>
    </Grid>
  );
}
