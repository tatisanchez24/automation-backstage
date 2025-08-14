import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

export const createDateAction = () => {
  return createTemplateAction({
    id: 'custom:date',
    description: 'Genera la fecha actual en formato YYYY-MM-DD',
    schema: {
      input: {},
      output: {
        now: zod => zod.string(),
      },
    },
    async handler(ctx) {
      const now = new Date().toISOString().split('T')[0]; // formato YYYY-MM-DD
      ctx.output('now', now);
    },
  });
};
