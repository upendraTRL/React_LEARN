import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('React');

    const handleTech = () => {
        const names = ['React', 'Node', 'Flutter']
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        console.log("You clicked it!");
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked!`);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name} !
            </p>
            <button onClick={handleTech}>Tech!</button>
            <button onClick={() => handleClick2("Upendra")}>Click It!</button>
            <button onClick={(e) => handleClick3(e)}>Click It!</button>
        </main>
    )
}

export default Content