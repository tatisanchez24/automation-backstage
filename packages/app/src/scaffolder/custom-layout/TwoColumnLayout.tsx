import { scaffolderPlugin } from '@backstage/plugin-scaffolder';
import {
  createScaffolderLayout,
  LayoutTemplate,
} from '@backstage/plugin-scaffolder-react';
import { Grid } from '@material-ui/core';

const TwoColumn: LayoutTemplate = ({ properties, description, title }) => {
  const mid = Math.ceil(properties.length / 2);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container direction="column" alignItems="flex-start">
            {properties.slice(0, mid).map(prop => (
              <Grid item key={prop.content.key} style={{ width: '100%' }}>
                {prop.content}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" alignItems="flex-end" >
            {properties.slice(mid).map(prop => (
              <Grid item key={prop.content.key} style={{ width: '100%' }}>
                {prop.content}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {description}
    </>
  );
};

export const TwoColumnLayout = scaffolderPlugin.provide(
  createScaffolderLayout({
    name: 'TwoColumn',
    component: TwoColumn,
  }),
);
