import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {closeModal} from './action';
import MapInit from 'map';


class Modal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    render() {
        const {isOpen, content} = this.props.modal;

        if (!isOpen) return null;

        return (
            <div className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        {content}
                        <MapInit/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default connect(mapStateToProps)(Modal);
