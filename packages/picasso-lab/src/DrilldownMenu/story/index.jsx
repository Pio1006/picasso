import DrilldownMenu from '../DrilldownMenu'
import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Picasso Lab').createPage(
  'DrilldownMenu',
  `
    Nested menu list.
  `
)

page
  .createTabChapter('Props')
  .addComponentDocs({ component: DrilldownMenu, name: 'Drilldown' })

page
  .createChapter()
  .addExample('DrilldownMenu/story/Default.example.tsx', 'Default')
  .addExample('DrilldownMenu/story/Dropdown.example.tsx', 'Dropdown')
