Available commands via `@toptal-bot`
===================

You can run some or all stages of the [jenkins job](https://jenkins.toptal.net/job/picasso-pr-specs/) which is responsible for running tests.
This job is triggered in every PR automatically with all the stages enabled, but if jenkins gets stuck or you changed the PR title and want to re-run `danger` check,
it can be useful to run just a part of the enkins pipeline or run only a specific stage like `danger`.

## Whole list of the availble commands:

- `@toptal-bot run all` - Run  whole pipeline
- `@toptal-bot run danger` - Danger checks
- `@toptal-bot run lint` - Run linter
- `@toptal-bot run test` - Run jest
- `@toptal-bot run build` - Check build
- `@toptal-bot run test:visual` - Run visual tests
- `@toptal-bot run deploy:documentation` - Deploy documentation