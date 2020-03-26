import LineChart from '../LineChart'

import PicassoBook from '~/.storybook/components/PicassoBook'

const page = PicassoBook.section('Charts').createPage(
  'LineChart',
  'This is what we can do with charts for now'
)

page.createTabChapter('Props').addComponentDocs({
  component: LineChart,
  name: 'LineChart',
  additionalDocs: {
    data: {
      name: 'data',
      type: {
        name: '[]',
        description: '{ [key: string]: string | number }: HighlightData'
      },
      description: 'A list of data points to be rendered as a line chart',
      required: true
    },
    lines: {
      name: 'lines',
      type: {
        name: 'ChartLine',
        description: '{ [key: string]: string }'
      },
      description:
        'A dictionary of each line name as a key and color as a value',
      required: true
    },
    unit: {
      name: 'unit',
      type: 'string',
      description: 'Text label to be displayed on the Y axis',
      defaultValue: 'd'
    },
    height: {
      name: 'height',
      type: 'number',
      description: 'Fixed height of chart',
      defaultValue: '200px'
    },
    tooltip: {
      name: 'tooltip',
      type: 'boolean',
      description: 'Toggle tooltip on hover',
      defaultValue: false
    },
    customTooltip: {
      name: 'customTooltip',
      type: 'ReactElement',
      description: 'Requires `tooltip` to be `true`'
    },
    highlightsData: {
      name: 'highlightsData',
      type: {
        name: '[]',
        description: `{
            from: number
            to: number
            color: string
          }: HighlightData`
      },
      description: 'A list of regions to be highlighted'
    },
    referenceLineData: {
      name: 'referenceLineData',
      type: {
        name: '[]',
        description: `{
          y: number
          color: string
        }: ReferenceLineType`
      },
      description:
        'Will display a full-width horizontal dashed line at the specified height in the specified color'
    }
  }
})

page
  .createChapter()
  .addExample('LineChart/story/Default.example.tsx', 'Default')
  .addExample('LineChart/story/Multiple.example.tsx', 'Multiple Lines')
  .addExample('LineChart/story/Complex.example.tsx', 'Complex')
