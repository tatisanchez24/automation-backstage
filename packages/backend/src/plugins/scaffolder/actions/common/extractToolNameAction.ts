import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

export const extractToolNameAction = () => {
  return createTemplateAction({
    id: 'custom:extract-tool-name',
    description:
      'Extrae el nombre de la herramienta desde una referencia de entidad',
    schema: {
      input: {
        toolRef: zod => zod.string(),
      },
      output: {
        toolName: zod => zod.string().optional(),
      },
    },

    async handler(ctx) {
      const { toolRef } = ctx.input;

      const refParts = toolRef.split('/');
      const toolName = refParts[refParts.length - 1];
      ctx.output('toolName', toolName);
    },
  });
};
