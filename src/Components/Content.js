const Content = () => {

    const handleTech = () => {
        const names = ['React', 'Node', 'Flutter']
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleTech()} !
            </p>
        </main>
    )
}

export default Content