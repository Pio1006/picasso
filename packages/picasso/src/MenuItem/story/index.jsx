import PicassoBook from '~/.storybook/components/PicassoBook'

import { MenuItem } from '../MenuItem'

const chapter = PicassoBook.connectToPage(page =>
  page
    .createChapter('Menu.Item', `An Item component`)
    .addExample('MenuItem/story/Router.example.jsx', 'Usage with react-router')
)

const componentDocs = PicassoBook.createComponentDocs(MenuItem, 'Menu.Item')

export default {
  chapter,
  componentDocs
}