import PicassoBook from '~/.storybook/components/PicassoBook'

import { Pagination } from '../Pagination'

const page = PicassoBook.createPage(
  'Pagination',
  'Component which allows navigating long data lists.'
)

page.createTabChapter('Props').addComponentDocs({
  component: Pagination,
  additionalDocs: {
    onPageChange: {
      type: {
        name: 'function',
        description: '(pageNumber: number) => void'
      }
    }
  },
  name: 'Pagination'
})

page
  .createChapter()
  .addExample('Pagination/story/Default.example.jsx', 'Default')
  .addExample('Pagination/story/Variants.example.jsx', 'Variants')
  .addExample('Pagination/story/Disabled.example.jsx', 'Disabled')