declare var TEST_ENV: string // defined by ENV

import _ from 'lodash'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconCode from '@material-ui/icons/Code'

import Editor from '../Editor'
import ComponentRenderer from '../ComponentRenderer'
import Spacer from '../../../components/Spacer'
import { Accordion, Button } from '../../../components'
import styles from './styles'
import { Classes } from '../../../components/styles/types'

interface Props {
  src: string
  classes: Classes
}

class CodeExample extends React.Component<Props, {}> {
  state = {
    sourceCode: '',
    isEditorVisible: false
  }

  componentDidMount() {
    const sourceCode = this.getOriginalSourceCode()
    this.setState({ sourceCode })
  }

  getOriginalSourceCode = () => {
    const { src } = this.props
    return require(`!raw-loader!../../../components/${src}`)
  }

  handleShowEditor = () => {
    const { isEditorVisible } = this.state
    this.setState({ isEditorVisible: !isEditorVisible })
  }

  handleChangeCode = _.debounce((value: string) => {
    this.setState({ sourceCode: value })
  }, 400)

  render() {
    const { src, classes } = this.props
    const { sourceCode, isEditorVisible } = this.state

    const SourceCodeEditor = (
      <div className={classes.editor}>
        <Editor
          id="some-component-example"
          mode="jsx"
          value={sourceCode}
          onChange={this.handleChangeCode}
        />
      </div>
    )

    /* When we are building storybook for visual tests we want to have
     * only actual component without source code editor
     */
    if (TEST_ENV === 'visual') {
      return <ComponentRenderer sourceCode={sourceCode} exampleCodePath={src} />
    }

    return (
      <div className={classes.root}>
        <div className={classes.component}>
          <Spacer className={classes.componentRenderer} top={2} bottom={2}>
            <ComponentRenderer sourceCode={sourceCode} exampleCodePath={src} />
          </Spacer>
          <Button
            className={classes.sourceCodeButton}
            variant="basic"
            size="small"
            icon={<IconCode />}
            onClick={this.handleShowEditor}>
            Edit code
          </Button>
        </div>
        <div>
          <Accordion Details={SourceCodeEditor} expanded={isEditorVisible} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CodeExample)
