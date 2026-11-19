<!--- <div align="center" id="top">
    <img width="500" src="./static/img/img-readme.png" />

&#xa0;

</div>
-->

<h1 align="center">
🧠 braintris
</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/biantris/braintris?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/biantris/braintris?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/biantris/braintris?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/biantris/braintris?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/biantris/braintris?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/biantris/braintris?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/biantris/braintris?color=56BEB8" />
</p>

<p align="center">
    <a href="https://twitter.com/intent/follow?screen_name=biantris_">
        <img src="https://img.shields.io/twitter/follow/biantris_?style=social&logo=twitter"
        alt="follow on Twitter">
    </a>
</p>

<div align="center">
bia knowledge base

The purpose of this repository is to publicly showcase my journey and learnings as a fullstack developer.
</div>

<p align="center">
🚧 this is a wip forever 🚧
</p>

[![documentation](https://github.com/biantris/braintris/actions/workflows/ci.yml/badge.svg)](https://github.com/biantris/braintris/actions/workflows/ci.yml)

### Getting Started

- clone this repo

```sh
> nvm use

> npm ci

> npm run start

Open in: http://localhost:3000
```

## CI/CD

Use Node.js 24 (see `.nvmrc`) and npm. Commit `package-lock.json` when
changing dependencies; CI installs the locked versions with `npm ci`.

`ci.yml` runs on pull requests, pushes to `main`, merge queues, and manual
runs. It calls `test.yml` to lint the source and build both locales. There is
no automated test suite yet; the validation consists of lint and the
production build. Successful runs on `main` then call `deploy.yml` to publish
the same build artifact to `gh-pages`.

Repository settings required for this workflow:

- Keep GitHub Pages configured to deploy from `gh-pages`, folder `/ (root)`.
- Require the `Checks / Lint and build` status check on `main`.
- Enable **Allow auto-merge** and squash merging for Dependabot auto-merge.
- Keep the `AUTOMERGE_TOKEN` Actions secret with a dedicated token that can
  write repository contents and pull requests. Unlike `GITHUB_TOKEN`, this
  token allows a merge to trigger the subsequent CI/deploy workflow.

Dependabot checks npm daily and GitHub Actions weekly. Related Docusaurus,
TypeScript ESLint, and React packages are grouped to keep versions compatible.
The auto-merge workflow only enables auto-merge for minor/patch updates from
Dependabot, subject to the required checks and branch protection rules.

Run the same validation locally:

```sh
npm ci
npm run lint
npm run build
```

## Contributions

Feel free to contribute to this project, if you find any bugs or improvements, open an issue and send a PR about it \o/
