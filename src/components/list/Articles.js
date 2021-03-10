function Articles ({ items } ){
  const result3 = [];
  for (const item of items) {
      result3.push(<p>{item}</p> );
  }
  return(<article>{result3}</article>);
}

export default Articles;