import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestTasks } from '../../actions/tasks';

class Index extends React.Component
{
    componentDidMount()
    {
        const { dispatch } = this.props;
        dispatch(requestTasks());
    }

    render()
    {
        const title = (<h1>Title</h1>);

        let taskNodes = null;
        if (this.props.tasks) {
            taskNodes = this.props.tasks.map((task) => {
                return (
                    <li key={task.id} className="list-item">
                        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                    </li>
                );
            });
        }

        const linkCreate = (<Link to={`/new`}>Create</Link>);

        return (
            <ul>
                {title}
                {linkCreate}
                {taskNodes}
            </ul>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isFetching: state.tasksReducer.isFetching,
        tasks: state.tasksReducer.tasks,
    }
}

export default connect(mapStateToProps)(Index);