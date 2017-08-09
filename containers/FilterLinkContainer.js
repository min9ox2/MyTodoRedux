import FilterLink from '../components/FilterLink'

import { connect } from 'react-redux'
import { setFilter } from '../actions'

const mapDispatchToProps = (dispatch) => {
	return {
		setFilter: (filter) => dispatch(setFilter(filter))
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentFilter: state.filterReducer,
        filter: ownProps.filter,
        label: ownProps.label
    }
}

let FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterLink)

export default FilterLinkContainer