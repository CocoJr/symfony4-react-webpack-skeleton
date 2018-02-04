import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestTask } from '../../actions/tasks';

class Show extends React.Component
{
    componentDidMount()
    {
        const { dispatch } = this.props;
        dispatch(requestTask());
    }

    render()
    {
        const title = (<li>Title</li>);

        return (
            <ul>
                {title}
                {this.props.task.title}
            </ul>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isFetching: state.taskReducer.isFetching,
        task: state.taskReducer.task,
    }
}

export default connect(mapStateToProps)(Show);