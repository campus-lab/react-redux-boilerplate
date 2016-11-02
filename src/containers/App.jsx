import {Component} from 'react';
import {connect} from 'react-redux';

import {fetchByQuerystring} from '../actions';

class App extends Component {
    componentDidMount() {
        const {dispatch, query} = this.props;
        dispatch(fetchByQuerystring(query));
    }

    render() {
        // console.info('container App', this);
        return this.props.children;
    }
}

function mapStateToProps(state, ownProps) {
    // console.info('container App mapStateToProps', state, ownProps);
    return state.giphy;
}

export default connect(mapStateToProps)(App);
