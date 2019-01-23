import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../authentication/actions';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '186667235953-j2fte15v0l536qg9f09iqsuaiearrt4o.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
onAuthChange = (isSignedIn) => {
    if (isSignedIn) { 
        console.log("I'm signed in")
        this.props.signIn(this.auth.currentUser.get().getBasicProfile());
    } else {
        console.log("I 'm not signed in")
        this.props.signOut();
    }
};

onSignInClick = () => {
    this.auth.signIn();
};

onSignOutClick = () => {
    this.auth.signOut();
}

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">

                <i className="google icon" />
                Sign In with Google
                </button>
            
            );
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}>
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return { isSignedIn: state.user.isSignedIn };
};

export default connect(
    mapStateToProps,
     { signIn, signOut }) (GoogleAuth);