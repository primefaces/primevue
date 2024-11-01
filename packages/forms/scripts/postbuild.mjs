import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, copyDependencies, renameDTSFile, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, INPUT_DIR, OUTPUT_DIR } = resolvePath(import.meta.url);

copyDependencies(INPUT_DIR, OUTPUT_DIR, '/style');
renameDTSFile(OUTPUT_DIR, 'index', (name) => {
    return name !== 'types.d.ts';
});

fs.copySync(path.resolve(__dirname, '../src/types.d.ts'), `${OUTPUT_DIR}/types.d.ts`);

fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE.md'), `${OUTPUT_DIR}/LICENSE.md`);

clearPackageJson(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));
