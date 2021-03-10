import classes from "./Button.module.css";
function Button({children}){
   return <button className={classes.Button}>{children}</button>
}
;
export default Button;