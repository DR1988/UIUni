import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MainFormComponent from '../../components/MainFormComponent'

class MainForm extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.formWidth = 1000
  }
  componentDidMount() {
    this.forceUpdate()
  }

  // componentDidUpdate() {
  //   window.addEventListener('resize', () => {
  //     if (document.getElementById('form-Manupalation').clientWidth < this.formWidth) {
  //       this.formWidth = document.getElementById('form-Manupalation').clientWidth
  //       this.forceUpdate()
  //     } else if (document.getElementById('form-Manupalation').clientWidth > this.formWidth) {
  //       this.formWidth = document.getElementById('form-Manupalation').clientWidth
  //       this.forceUpdate()
  //     }
  //   })
  // }
  render() {
    // console.log('this.props', this.props);
    const { lineFormer, allTime } = this.props.mainForm
    return (<div
      id="form-Manupalation"
    >
      <MainFormComponent
        lineFormer={lineFormer}
        allTime={allTime}
        distance={this.props.distance}
        time={this.props.time}
      />
    </div>
    )
  }
}

const mapStateToProps = state => ({ mainForm: state.mainFormReducer })

export default connect(mapStateToProps)(MainForm)
