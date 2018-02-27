import React, { Component } from 'react'
import s from './ValveLineComponent.scss'

import PropTypes from 'prop-types'
import getUniqTimeLines from '../../../helpers/getUniqTimeLines'
import templates from '../../../helpers/templates/Templates'

const { LineTemplate } = templates
class ValveLineComponent extends Component {
  constructor(props) {
    super(props)
    this.linesTemplate = []
    this.resultLines = {}
  }

  componentWillMount() {
    // const { changes } = this.props.elem
    const { elem } = this.props
    this.resultLines = getUniqTimeLines(elem)
    this.linesTemplate = LineTemplate(this.resultLines, this.props.allTime)
  }

  componentWillReceiveProps(nextProps) {
    // this.resultLines = getUniqTimeLines(nextProps.elem.changes)
    this.resultLines = getUniqTimeLines(nextProps.elem)
    this.linesTemplate = LineTemplate(this.resultLines, nextProps.allTime)
  }
  render() {
    return (
      <div className={s['time-box_keeper']}>
        {/* <div className={s['time-box']}> */}
          { this.linesTemplate }
        {/* </div> */}
      </div>
    )
  }
}

ValveLineComponent.propTypes = {

}

export default ValveLineComponent
