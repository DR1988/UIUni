import React from 'react'
import s from './MainFormComponent.scss'
import PropTypes from 'prop-types'

import LineFormer from './LineFormerComponent'
import LineDescriptionComponent from './LineDescriptionComponent'
import TimeLine from './TimeLineComponent'
import NoteComponent from './NoteComponent'
import ReactionFlowComponent from './ReactionFlowComponent'

const MainFormComponent = ({
  lineFormer,
  allTime,
  handle,
  distance,
  time,
}) => (
  <div id="mainForm" className={s.mainForm}>
    <section className={s.sidebar}>
      <NoteComponent />
      <ReactionFlowComponent />
    </section>
    <section className={s['form-container']}>
      <LineDescriptionComponent lineFormer={lineFormer} />
      <section className={s['lines-keeper']}>
        {lineFormer.map(elem => <LineFormer
          key={elem.id}
          elem={elem}
          allTime={allTime}
        />,
        )}
        <TimeLine
          distance={distance}
          time={time}
          allTime={allTime}
        />
      </section>
    </section>
  </div>
)

MainFormComponent.propTypes = {

}

export default MainFormComponent
