import React, {Component, Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import PhoneLink from '../../components/PhoneLink/PhoneLink'


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    

    render() {
        let childrenClass = [classes.Content];

        if(this.state.showSideDrawer){
            childrenClass.push(classes.SideDrawerOpen);
        }

        return (
            <Fragment>
                <main >
                    <Toolbar showSideDrawer={this.state.showSideDrawer}
                             isAuth={this.props.isAuthenticated}
                             drawerToggleClicked={this.sideDrawerToggleHandler}
                    />
                    <SideDrawer
                        isAuth={this.props.isAuthenticated}
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}/>
                    <div className={childrenClass.join(" ")}>
                        {this.props.children}
                    </div>
                    <PhoneLink phone='0549887777'/>
                </main>
            </Fragment>
        )
    }

}



export default Layout;