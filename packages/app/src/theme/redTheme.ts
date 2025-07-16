import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const redTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: { main: '#7F1C19' },
      secondary: { main: '#be191f' },
      error: { main: '#be191f' },
      warning: { main: '#d6d6d6' },
      info: { main: '#be191f' },
      success: { main: '#485e30' },
      background: {
        default: '#fff8f8',
        paper: '#F2F2F2',
      },
      banner: {
        info: '#7F1C19',
        error: '#be191f',
        text: '#000000',
        link: '#be191f',
      },
      navigation: {
        background: '#7F1C19',
        indicator: '#be191f',
        color: '#ffffff',
        selectedColor: '#000000',
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  pageTheme: {
    home: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
    documentation: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave2 }),
    tool: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.round }),
    service: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
    website: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
    library: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
    other: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#7F1C19', '#be191f'], shape: shapes.wave }),
  },
});