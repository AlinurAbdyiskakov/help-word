import classes from "./MyWife.module.css";
function MyWife({children}){
   return <button className={classes.MyWife}>{children}</button>
}
;
export default MyWife;