import React from 'react';
import {Link} from 'react-router';

const ItemDetail = ({item}) => {
    // console.info('component ItemDetail', item);

    const htmlNotFound = <p>Not found...</p>; 
    const htmlButtonBack = <Link to="/">Voltar à lista</Link>;

    if (!item) {
        return <div>{htmlNotFound}{htmlButtonBack}</div>;
    } else {
        return (
            <div>
                {htmlButtonBack}
                <div className="gif-item"><img src={item.images.fixed_height.url} alt={item.id} /></div>
            </div>
        );
    }
};

ItemDetail.propTypes = {
    item: React.PropTypes.object
};

export default ItemDetail;
