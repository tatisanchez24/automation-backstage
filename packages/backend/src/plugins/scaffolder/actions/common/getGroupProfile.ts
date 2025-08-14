import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { CatalogApi } from '@backstage/catalog-client';

export const createGetGroupProfileAction = (catalogClient: CatalogApi) => {
  return createTemplateAction({
    id: 'custom:get-group-profile',
    description: 'Obtiene el displayName y email de un grupo desde el catálogo',
    schema: {
      input: {
        groupRef: zod => zod.string(), // Ej: "group:default/infinity"
      },
      output: {
        displayName: zod => zod.string().optional(),
        email: zod => zod.string().optional(),
      },
    },
    async handler(ctx) {
      const { groupRef } = ctx.input;

      const entity = await catalogClient.getEntityByRef(groupRef);
      if (!entity) {
        throw new Error(`No se encontró el grupo con referencia ${groupRef}`);
      }

      const spec = entity.spec as {
        profile?: {
          displayName?: string;
          email?: string;
        };
      };

      const displayName = spec.profile?.displayName ?? '';
      const email = spec.profile?.email ?? '';

      ctx.output('displayName', displayName);
      ctx.output('email', email);
    },
  });
};
