function Articles2 ({ items } ){
    const result2 = [];
    for (const item of items) {
        result2.push(<p>{item}</p> );
    }
    return(<article>{result2}</article>);
  }
  
  export default Articles2;