import React from 'React';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';

const App = function() {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <UndoRedo />
        </div>
    );
};

export default App;
