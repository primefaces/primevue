const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const workspaceDir = path.resolve(__dirname, '../../../');

const pkg = path.resolve(rootDir, 'package.json');

const pkgJson = require(pkg);
const packageJson = require(path.resolve(workspaceDir, 'package.json'));

pkgJson.version = packageJson.version;
pkgJson.private = false;
pkgJson.author = packageJson.author;
pkgJson.homepage = packageJson.homepage;
pkgJson.license = packageJson.license;
pkgJson.repository = { ...pkgJson.repository, ...packageJson.repository };
pkgJson.bugs = { ...pkgJson.bugs, ...packageJson.bugs };
pkgJson.engines = { ...pkgJson.engines, ...packageJson.engines };

fs.writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));
