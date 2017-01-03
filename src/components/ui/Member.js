import React from 'react';
import FaShield from 'react-icons/lib/fa/shield';

export default class Member extends React.Component {

    render() {
        const { name, email, thumbnail, admin, makeAdmin } = this.props;

        return (<div className="member">
            <h1> {name} {(admin) ? <FaShield /> : '' } </h1>
            <a onClick={makeAdmin}> Make admin </a>
            <img src={thumbnail} alt='profile picture' />
            <p>
                <a href={`mailto:${email}`} > {email} </a>
            </p>
        </div>);
    }
}

