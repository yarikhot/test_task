import React from 'react';


export default class PathItem extends React.Component {

    static propTypes = {
        distance: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="path-item">
                <img src="" alt="" className="path-item__img"/>
                <div className="path-item__description">

                </div>
                <span className="path-item__distance">
                    {this.props.distance}
                </span>
                <div className="path-item__arrow">

                </div>
            </div>
        );
    }
}
