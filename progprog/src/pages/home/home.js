import React from 'react';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import PathItem from './pathItem';
import AddModal from './addModal';
import MapInit from '../../component/modal/map';
import {addItems} from './actions';
import {openModal} from '../../component/modal/action';

class Home extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        home: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['renderItems', 'addItems']);
    }

    renderItems(item, idx) {
        return (
            <PathItem
                key={idx}
                id={item.id}
                title={item.title}
                description={item.description}
                distance={item.distance}
            />);
    }


    addItems() {
        const {id, description, distance, title} = this.props;
        this.props.dispatch(openModal({
            content: <AddModal id={id}
                               distance={distance}
                               title={title}
                               description={description}
                               onSave={addItems}/>
        }));
    }

    render() {
        const {items} = this.props.home;
        return (
            <section className="container">
                <header className="App-header">
                    <h1>Saunter</h1>
                    <button className="ui button App-header__btn" onClick={this.addItems}>add path</button>
                </header>
                <main className="content">
                    <div className="path">
                        <div className='ui input'>
                            <input type='text' placeholder='Search...'/>
                        </div>
                        {items.map(this.renderItems)}
                    </div>
                    <div className="content__map">
                        <MapInit/>
                    </div>
                </main>
            </section>

        );
    }
}


function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(Home);
