function List({items}){
    const output = items.map(item => <li>{item}</li>)

    return(
        <ul>{output}</ul>
    )
}
export default List;