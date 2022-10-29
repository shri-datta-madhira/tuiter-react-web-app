import React from 'react'
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
// import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            <h1 className="text-dark">Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;