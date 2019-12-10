import PicassoBook from '~/.storybook/components/PicassoBook'

import { Select } from '../Select'

const page = PicassoBook.createPage(
  'Select',
  `Selects are interactive elements that prompt users to make selections 
  or take actions from a set of list of available options.`,
  'Forms'
)

page.createTabChapter('Props').addComponentDocs({
  component: Select,
  name: 'Select',
  additionalDocs: {
    options: {
      type: {
        description: `
{\n
  value: string\n
  text: string\n
}: Option
        `
      }
    }
  }
})

page
  .createChapter()
  .addExample('Select/story/Default.example.jsx', 'Default')
  .addExample('Select/story/Native.example.jsx', 'Native')
  .addExample('Select/story/Disabled.example.jsx', 'Disabled')
  .addExample('Select/story/Error.example.jsx', 'Error')
  .addExample('Select/story/WithIcon.example.jsx', 'With Icon')
  .addExample('Select/story/Loading.example.jsx', 'Loading')
  .addExample('Select/story/Sizes.example.jsx', 'Sizes')
  .addExample('Select/story/FullWidth.example.jsx', 'Full width')
  .addExample('Select/story/ShrinkWidth.example.jsx', 'Shrink width')
  .addExample('Select/story/ChosenOption.example.jsx', {
    title: 'Chosen option',
    description:
      'Renders Select component with already chosen one of the options'
  })
  .addExample('Select/story/CustomOptions.example.jsx', {
    title: 'Custom options',
    description:
      'Options of the Select component could be not only text, but custom components'
  })
  .addExample('Select/story/CustomDisplayValue.example.jsx', {
    title: 'Custom display value',
    description: 'Display value of selected value in input can be customized'
  })
  .addExample('Select/story/Multiple.example.jsx', {
    title: 'Multiple options',
    description: 'Select component allows to select multiple options'
  })
  .addExample('Select/story/AutoFocus.example.jsx', {
    title: 'Auto focus',
    description:
      'Demonstrate auto focus capability by switching visibility of Select'
  }) // picasso-skip-visuals