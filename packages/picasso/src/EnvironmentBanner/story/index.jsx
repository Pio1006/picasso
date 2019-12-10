import PicassoBook from '~/.storybook/components/PicassoBook'

import { EnvironmentBanner } from '../EnvironmentBanner'

const page = PicassoBook.createPage(
  'EnvironmentBanner',
  `Banner on page top to highlight current environment`
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: EnvironmentBanner, name: 'EnvironmentBanner' })

page
  .createChapter()
  .addExample('EnvironmentBanner/story/Variants.example.jsx', {
    title: 'Variants',
    description: 'Click to make them disappear'
  })