import getConfig from 'next/config';
import { z } from 'zod';

const config = getConfig();

const publicRuntimeConfigSchema = z.object({ CMS: z.object({ API_URL: z.string().url(), TOKEN: z.string() }) });

export const environments = publicRuntimeConfigSchema.parse(config.publicRuntimeConfig);
