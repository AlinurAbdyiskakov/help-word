import classes from "./Example.module.css";
function Example({children}){
    return <div className={classes.Example}>{children}</div>
}
export default Example;