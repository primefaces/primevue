import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, OUTPUT_DIR } = resolvePath(import.meta.url);

fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE.md'), `${OUTPUT_DIR}/LICENSE.md`);

clearPackageJson(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));
