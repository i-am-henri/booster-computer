import { map } from '@/.map';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

export const docs = loader({
    source: createMDXSource(map),
});