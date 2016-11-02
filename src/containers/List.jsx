import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {fetchByQuerystring} from '../actions';
import ListComponent from '../components/List';

class List extends Component {
    constructor(props) {
        super(props);
        this._inputOnChange = this._inputOnChange.bind(this);
        this.timeout = null;
    }

    render() {
        // console.info('container List', this.props);
        const {isFetching, items, query} = this.props;
        const htmlContent = isFetching ? <p>Loading...</p> : <ListComponent items={items} />;

        return (
            <div>
                <input id="gif-input" type="text" placeholder="search Giphy..." defaultValue={query} ref={(r) => this.queryInput = r} onChange={this._inputOnChange} />
                {htmlContent}
            </div>
        );
    }

    _inputOnChange(event) {
        event.persist(); // avoid nullifieing
        this.queryInput.value = event.target.value; // update input value

        // throttling
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            const {dispatch} = this.props;
            const query = event.target.value;
            dispatch(fetchByQuerystring(query));
        }, 500);
    }
}

List.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
    // console.info('container List mapStateToProps', state, ownProps);
    return state.giphy;
}

export default connect(mapStateToProps)(List);
