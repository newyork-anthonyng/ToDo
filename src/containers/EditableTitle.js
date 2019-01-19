import { connect } from 'react-redux'
import { editTitle } from '../actions'
import Title from '../components/Title'

const mapStateToProps = state => ({
    title: state.title
})

const mapDispatchToProps = dispatch => ({
    onChange: e => {
        dispatch(editTitle(e.target.value));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Title)