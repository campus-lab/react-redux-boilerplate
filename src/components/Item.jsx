import React from 'react';
import {Link} from 'react-router';

const Item = ({item}) => {
    // console.info('component Item', item);
    return (
        <div className="gif-item">
            <Link to={`/g/${item.id}`}>
                <img src={item.images.fixed_height.url} alt={item.id} />
            </Link>
        </div>
    );
};

Item.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default Item;
