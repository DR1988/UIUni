import React from 'react'
import PropTypes from 'prop-types'

import s from './MainComponent.scss'
import MainForm from '../../containers/MainForm'
import Graphs from '../../containers/Graphs'
import FormChoserComponent from './FormChoserComponent'

const MainComponent = ({ currentForm, updateForm }) => {
  const appForms = {
    MainForm,
    Graphs,
  }

  const AppForm = appForms[currentForm]
  return (
    <div className={s.root}>
      <FormChoserComponent
        updateForm={updateForm}
      />
      <AppForm />
    </div>
  )
}

MainComponent.propTypes = {
  currentForm: PropTypes.string.isRequired,
  updateForm: PropTypes.func.isRequired,
}

export default MainComponent
