import { connect } from 'react-redux'
import { showVisibilityFilter } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
    isShowingCompletedTodos: state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (bool) => {
        dispatch(showVisibilityFilter(bool))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)