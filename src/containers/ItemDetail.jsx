import {connect} from 'react-redux';
import _ from 'lodash';

import ItemDetailComponent from '../components/ItemDetail';

const mapStateToProps = (state, ownProps) => {
    // console.info('container ItemDetail mapStateToProps', state, ownProps);
    return {item: _.find(state.giphy.items, (item) => { return item.id === ownProps.params.id; })}
};

export default connect(mapStateToProps)(ItemDetailComponent)
