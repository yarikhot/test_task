import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addItems} from "./actions";
import {openModal} from "../../component/modal/action";
import AddModal from "./addModal";


class PathItem extends React.Component {

    static propTypes = {
        distance: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        const {id, description, distance, title } = this.props;
        this.props.dispatch(openModal({
            content: <AddModal id={id}
                               distance={distance}
                               title={title}
                               description={description}
                               onSave={addItems}/>
        }));
    }
    render() {
        return (
            <div className="path-item">
                <img src="" alt="" className="path-item__img"/>
                <p>{this.props.id}</p>
                <div className="path-item__description">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
                <span className="path-item__distance">
                    {this.props.distance}
                </span>
                <div className="path-item__arrow angle right">
                    <i className="angle right big icon" />
                </div>
                <button className="ui button" onClick={this.add}>add path</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(PathItem);
