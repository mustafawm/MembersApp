import React from 'react';
import axios from 'axios';

import Member from './Member';

export default class MemberList extends React.Component {
    state = {
        members: [],
        loading: false
    };

    componentDidMount() {
        this.setState({ loading:true });

        axios.get('https://api.randomuser.me/?nat=AU&results=12')
                .then(response => {
                    this.setState({
                        members: response.data.results,
                        loading:false
                    });
                })
                .catch(err => console.error(err));
    }

    render() {
        const { members, loading } = this.state;

        return (
            <div className="member-list">
            	<h1>Society Members</h1>

                {
                    (loading) ?
                        <span>loading...</span>
                    :
                        <span>{members.length} members</span>
                }
                {
                    (members.length) ?
                        members.map( (member, idx) =>
                        <Member key={idx}
                                name={member.name.first + ' ' + member.name.last}
                                email={member.email}
                                thumbnail={member.picture.thumbnail}
                        />)
                    :
                        <span>no members yet :( </span>
                }
            </div>
        )
   }
}

