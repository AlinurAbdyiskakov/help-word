
import List from "./components/list/List";
 import Paragraps from "./components/list/Paragraps";
 import Articles from "./components/list/Articles";
 import Articles2 from "./components/list/Articles2";
 import Articles3 from "./components/list/Articles3";
 import Articles4 from "./components/list/Articles4";
//  import Quotes from "./components/list/Quotes";

function App() {
  return (
    <div className="App">
      
    <List items={["Appple","Kiwe"]}/>
    <Paragraps items={["Apple","Kiwe"]}/>
     <Articles items={["Граната","Картошка"]}/>
     <Articles2 items={["Banana","limon"]}/>
     <Articles3 items={["Мандарины","Виноград"]}/>
     <Articles4 items={["Вишния","Апелсины"]}/>
 
    {/* <Quotes items={["Appple","Kiwe"]}/>  */}
   
    </div>
  );
}

export default App;
