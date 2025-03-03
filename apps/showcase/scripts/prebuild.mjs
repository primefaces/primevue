import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = path.resolve(__dirname, '../');
const workspaceDir = path.resolve(__dirname, '../../../');

const pkgPath = path.resolve(rootDir, 'package.json');
const packageJsonPath = path.resolve(workspaceDir, 'package.json');

const pkgJson = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }));
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, { encoding: 'utf-8' }));

pkgJson.version = packageJson.version;
pkgJson.author = packageJson.author;
pkgJson.homepage = packageJson.homepage;
pkgJson.license = packageJson.license;
pkgJson.repository = { ...pkgJson.repository, ...packageJson.repository };
pkgJson.bugs = { ...pkgJson.bugs, ...packageJson.bugs };
pkgJson.engines = { ...pkgJson.engines, ...packageJson.engines };

fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 4));
