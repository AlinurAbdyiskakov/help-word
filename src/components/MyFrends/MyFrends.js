import classes from "./MyFrends.module.css";
function MyFrends({children}){
   return <button className={classes.MyFrends}>{children}</button>
}
;
export default MyFrends;