import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [showbtn, setshowbtn] = useState(false);
    const [todos, setTodos] = useState([
        {
            title: "Hey",
            desc: "I am a good todo"
        },
        {
            title: "Hey Another todo",
            desc: "I am a good todo too"
        },
        {
            title: "Hey I am grocery todo",
            desc: "I am a good todo but I am grocery todo"
        },
    ]);

    const Todo = ({ todo }) => {
        return (
            <div>
                <div>{todo.title}</div>
                <div>{todo.desc}</div>
            </div>
        );
    };

    return (
        <>
            <div>
                {todos.map((todo) => {
                    return <Todo key={todo.title} todo={todo} />;
                })}
            </div>
        </>
    );
}

export default App;
