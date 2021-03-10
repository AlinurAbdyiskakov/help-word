function Articles3({ items } ){
    const result33 = [];
    for (const item of items) {
        result33.push(<p>{item}</p> );
    }
    return(<article>{result33}</article>);
  }
  
  export default Articles3;