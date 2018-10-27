import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindAll} from "lodash";
import {closeModal} from "../../component/modal/action";


class AddModal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            distance: this.props.distance,
            description: this.props.description,
            errors: {
                title: "",
                description: ""
            }
        };

        bindAll(this, ["close", "changeTitle", "changeDescription", "save"]);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    changeTitle(title) {
        this.setState({title});
    }

    changeDescription(description) {
        this.setState({description});
    }

    save() {
        const {id, title, description, distance} = this.state;
        const errorTitle = "field must not be empty";
        const errors = {
            title: "",
            description: ""
        };

        if (title === "") {
            errors.title = errorTitle;
            this.setState({errors});
            return;
        }

        if (description === "") {
            errors.description = errorTitle;
            this.setState({errors});
            return;
        }

        this.props.dispatch(this.props.onSave({id, title, description, distance}));
        this.close();
    }

    render() {
        return (
            <div>
                <div className="modal-body">
                    <p><b>ID:</b> {this.state.id} </p>
                    <div className='ui input'>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='ui input'>
                        <input type='text' placeholder='Search...' />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-default" onClick={this.close}>Close</button>
                    <button className="btn btn-success" onClick={this.save}>add item</button>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(AddModal);
