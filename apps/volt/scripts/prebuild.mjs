import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = resolve(__dirname, '../');
const workspaceDir = resolve(__dirname, '../../../');

const pkgPath = resolve(rootDir, 'package.json');

const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf-8'));
const packageJson = JSON.parse(readFileSync(resolve(workspaceDir, 'package.json'), 'utf-8'));

pkgJson.version = packageJson.version;
pkgJson.author = packageJson.author;
pkgJson.homepage = packageJson.homepage;
pkgJson.license = packageJson.license;
pkgJson.repository = { ...pkgJson.repository, ...packageJson.repository };
pkgJson.bugs = { ...pkgJson.bugs, ...packageJson.bugs };
pkgJson.engines = { ...pkgJson.engines, ...packageJson.engines };

writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 4));
