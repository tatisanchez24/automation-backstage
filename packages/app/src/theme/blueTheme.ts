import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const blueTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: { main: '#074F71' },
      secondary: { main: '#43769B' },
      error: { main: '#be191f' },
      warning: { main: '#aabbcb' },
      info: { main: '#43769B' },
      success: { main: '#485e30' },
      background: {
        default: '#F6FAFE',
        paper: '#e4e9ee',
      },
      banner: {
        info: '#074F71',
        error: '#be191f',
        text: '#000000',
        link: '#43769B',
      },
      navigation: {
        background: '#074F71',
        indicator: '#43769B',
        color: '#ffffff',
        selectedColor: '#000000',
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  pageTheme: {
    home: genPageTheme({ colors: ['#074F71', '#43769B'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#074F71', '#43769B'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#074F71', '#43769B'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#074F71', '#43769B'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#074F71', '#43769B'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#074F71', '#43769B'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#074F71', '#43769B'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#074F71', '#43769B'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#074F71', '#43769B'], shape: shapes.wave }),
  },
});
