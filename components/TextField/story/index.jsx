import PicassoBook from '../../../.storybook/components/PicassoBook'

const page = PicassoBook.createPage(
  'TextField',
  `Input fields are UI elements through which users submit information to the system. 
  Input fields should be clearly labeled by the topic to ensure users know exactly what is being asked of them.`
)

page
  .addExample('TextField/story/Default-example.jsx', 'Default')
  .addExample('TextField/story/WithIcon-example.jsx', 'With icon')
  .addExample('TextField/story/Error-example.jsx', 'Error')
  .addExample('TextField/story/Multiline-example.jsx', 'Multiline | Textarea')
