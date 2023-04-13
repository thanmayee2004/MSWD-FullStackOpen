import { connect } from 'react-redux'
import { filterState } from '../reducers/filterReducer'

const Filter = props => {
  const handleChange = event => {
    const {
      target: { value },
    } = event

    props.filterState(value.toLowerCase())
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = { filterState }

const connectedFilter = connect(null, mapDispatchToProps)(Filter)

export default connectedFilter
