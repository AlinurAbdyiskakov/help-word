function Paragraps ({ items } ){
  const result2 = [];
  for (const i in items) {
    result2.push(<li>{items[i]}</li>);
  }
  return(result2);
}

export default Paragraps;