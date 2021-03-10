import classes from "./Limon.module.css";
function Limon({children}){
   return <button className={classes.Limon}>{children}</button>
}
;
export default Limon;