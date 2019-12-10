# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.4.3](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.4.2...@toptal/picasso-lab@1.4.3) (2019-12-10)

**Note:** Version bump only for package @toptal/picasso-lab





## [1.4.2](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.4.1...@toptal/picasso-lab@1.4.2) (2019-12-10)

**Note:** Version bump only for package @toptal/picasso-lab





## [1.4.1](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.4.0...@toptal/picasso-lab@1.4.1) (2019-12-10)

**Note:** Version bump only for package @toptal/picasso-lab





# [1.4.0](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.3.0...@toptal/picasso-lab@1.4.0) (2019-12-09)


### Features

* **DatePicker:** [FX-608] Add default icon ([#944](https://github.com/toptal/picasso/issues/944)) ([9b0240f](https://github.com/toptal/picasso/commit/9b0240f4ecda048198774be588da7ec25c59f883))





# [1.3.0](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.2.3...@toptal/picasso-lab@1.3.0) (2019-12-09)


### Features

* **Datepicker:** general improvements ([#943](https://github.com/toptal/picasso/issues/943)) ([667612a](https://github.com/toptal/picasso/commit/667612a7460c6ee1eebeeb321bf2bf3a70c7bda4))





## [1.2.3](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.2.2...@toptal/picasso-lab@1.2.3) (2019-12-09)

**Note:** Version bump only for package @toptal/picasso-lab





## [1.2.2](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.2.1...@toptal/picasso-lab@1.2.2) (2019-12-05)

**Note:** Version bump only for package @toptal/picasso-lab





## [1.2.1](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.2.0...@toptal/picasso-lab@1.2.1) (2019-12-05)


### Bug Fixes

* fix tree-shaking ([#941](https://github.com/toptal/picasso/issues/941)) ([6a9d2a0](https://github.com/toptal/picasso/commit/6a9d2a02f8c692e3b061a026d3cc5d748e9f2263))





# [1.2.0](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.1.0...@toptal/picasso-lab@1.2.0) (2019-12-05)


### Features

* **Input:** small size variant ([#932](https://github.com/toptal/picasso/issues/932)) ([b5a049c](https://github.com/toptal/picasso/commit/b5a049c0b7659e5885674482ae75a64487d5122b))





# [1.1.0](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.0.3...@toptal/picasso-lab@1.1.0) (2019-12-05)


### Features

* **CounterBlock:** add CounterBlock component ([#935](https://github.com/toptal/picasso/issues/935)) ([33b182b](https://github.com/toptal/picasso/commit/33b182b57063f04542b6af72602a967807a55607))





## [1.0.3](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.0.2...@toptal/picasso-lab@1.0.3) (2019-12-04)

**Note:** Version bump only for package @toptal/picasso-lab





## [1.0.2](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.0.1...@toptal/picasso-lab@1.0.2) (2019-12-03)

**Note:** Version bump only for package @toptal/picasso-lab





## [1.0.1](https://github.com/toptal/picasso/compare/@toptal/picasso-lab@1.0.0...@toptal/picasso-lab@1.0.1) (2019-12-03)

**Note:** Version bump only for package @toptal/picasso-lab





# 1.0.0 (2019-12-03)


### Features

* [FX-593] Fix package json versions ([#929](https://github.com/toptal/picasso/issues/929)) ([340a01c](https://github.com/toptal/picasso/commit/340a01c1806ff9e5b9a475dd1821899c5384c33a))
* v4 ([#820](https://github.com/toptal/picasso/issues/820)) ([4378192](https://github.com/toptal/picasso/commit/437819284fe13a6385346c730912d7b94adfdf44))


### BREAKING CHANGES

* Picasso v4 release

## @toptal/picasso

- **Radio:** Changed type of the `label` prop and now `ReactNode` is allowed to pass there (https://github.com/toptal/picasso/pull/910)
- **Select:** Added loading indicator. (https://github.com/toptal/picasso/pull/829)
- **TagSelector:** Fix issue with size of the dropdown menu (https://github.com/toptal/picasso/pull/905)

### BREAKING CHANGES:
- Remove all lab components from the core Picasso and moved them to `@toptal/picasso-lab` package (https://github.com/toptal/picasso/pull/876)
- **Accordion:** Now, no styles are applied to summary and details of accordion by default. It is the responsibility of the user to style them or you have an option to use sub-components
`Accordion.Summary` and `Accordion.Details` to style summary and details according to the BASE design system (https://github.com/toptal/picasso/pull/814)
- **Autocomplete:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/858)
- **Autocomplete:** Changed type definition for Item to allow custom Item type shape (https://github.com/toptal/picasso/pull/887):
  - `onOtherOptionSelect` passing only `inputValue` instead of new `Item`
  - `getDisplayValue` item is of type `Item` not Autocomplete's Item
  - Item interface changed `text` from required to optional
  - Item allows custom props
  - onChange changed signature and got the second argument ‘options’
- **Autocomplete:** Added opportunity to hide NoOptions label via passing `null` as `options` (https://github.com/toptal/picasso/pull/901)
- **Checkbox:**: When Checkbox is used without a label, now it does not have any margins. Also, changed a type of the `label` prop and now you can pass ReactNode there (https://github.com/toptal/picasso/pull/912)
- **Dropdown:** Removed deprecated `anchorOrigin` and `transformOrigin` props (https://github.com/toptal/picasso/pull/913)
- **Icon:** Change type of color prop. Now it accepts a string.
  `<Settings16 color={palette.red.main} />` -> `<Settings16 color='red' />` (https://github.com/toptal/picasso/pull/914)
- **Image**: Change default variant type name to `rectangle` (https://github.com/toptal/picasso/pull/888)
- **Link**: Change default variant type name to `anchor` (https://github.com/toptal/picasso/pull/888)
- **Link**: Remove `invert` prop. You should control color via `color`  prop instead (https://github.com/toptal/picasso/pull/892)
- **Loaded**: Change default variant type name to `blue` (https://github.com/toptal/picasso/pull/888)
- **Logo**: Change default variant type name to `blue` (https://github.com/toptal/picasso/pull/888)
- **Logo**: Change default variant type name to `blue` (https://github.com/toptal/picasso/pull/888)
- **Modal:** Removed deprecated useModal hook. It was replaced by useModals hook (https://github.com/toptal/picasso/pull/913)
- **MonthSelect:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/911)
- **Page.Content:** Make it to be `display: flex` by default (https://github.com/toptal/picasso/pull/913)
- **PromptModal:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/911)
- **Select:** Replaced `Select` with a brand new `Select` with a search. Component API was changed 
  - value prop changed a type
  - onChange has a strict type check for the value type and not receiving a child node anymore
  - because of adding input and changing the internals of the component - markup is changed, so your unit test snapshots should be updated
  - Input component in error state doesn't have a background color anymore
  (https://github.com/toptal/picasso/pull/812)
- **Sidebar:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/876)
- **Slider:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/911)
- **TagSelector:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/858)
- **TagSelector:** Changed type definition for Item to allow custom Item type shape (https://github.com/toptal/picasso/pull/887):
  - `onOtherOptionSelect` passing only `inputValue` instead of new `Item`
  - Item interface changed `text` and `value` from required to optional
  - Item allows custom props
- **TextField:** Removed deprecated TextField component. It was replaced by Input (https://github.com/toptal/picasso/pull/913)
- **YearSelect:** Moved from lab to core Picasso (https://github.com/toptal/picasso/pull/911)

## @toptal/picasso-lab

- **DatePicker:** Change `onSelect` to `onChange` (https://github.com/toptal/picasso/pull/888)