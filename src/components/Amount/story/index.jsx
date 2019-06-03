import PicassoBook from '~/.storybook/components/PicassoBook'

import { Amount } from '../Amount'

const page = PicassoBook.createPage(
  'Amount',
  'Use `Amount` to render formatted amount with a currency'
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: Amount, name: 'Amount' })

page
  .createChapter()
  .addExample('Amount/story/Default.example.jsx', 'Default')
  .addExample('Amount/story/Currency.example.jsx', 'EUR Currency example')
