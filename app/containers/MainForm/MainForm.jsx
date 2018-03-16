import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import { actions } from './mainFormRedux'
import MainFormComponent from '../../components/MainFormComponent'

class MainForm extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.formWidth = 1000
  }

  state = {
    distance: 0,
    time: 0,
  }
  componentDidMount() {
    // this.forceUpdate()
    // setTimeout(() => {
    //   this.setState({
    //     distance: 99.5,
    //     time: 10,
    //   })
    // }, 1500)
  }
/*   componentDidUpdate() {
    window.addEventListener('resize', () => {
      if (document.getElementById('form-Manupalation').clientWidth < this.formWidth) {
        this.formWidth = document.getElementById('form-Manupalation').clientWidth
        this.forceUpdate()
      } else if (document.getElementById('form-Manupalation').clientWidth > this.formWidth) {
        this.formWidth = document.getElementById('form-Manupalation').clientWidth
        this.forceUpdate()
      }
    })
  } */
  render() {
    console.log(this.props);
    const { mainForm, closeModal } = this.props
    const { showEditModal, selected } = mainForm
    return (<div
      id="form-Manupalation"
    >
      <MainFormComponent
       // lineFormer={lineFormer}
       // allTime={allTime}
        {...this.props}
        distance={this.state.distance}
        // distance={this.props.distance}
        // time={this.props.time}
        time={this.state.time}
      />
      <Dialog
        open={showEditModal}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <TextField
            id="fromValue"
            label="Number"
            value={selected.value}
            onChange={() => console.log(111)}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="toValue"
            label="Number"
            // value={this.state.age}
            // onChange={this.handleChange('age')}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { console.log(333); closeModal() }} color="primary">
            Disagree
          </Button>
          <Button onClick={closeModal} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}

const mapStateToProps = state => ({ mainForm: state.mainFormReducer })

export default connect(mapStateToProps, actions)(MainForm)
