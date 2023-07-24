import classes from "./ProjectCard.module.css"
const ProjectCard =(props)=>{
return(
    <div className={classes.cardLayout}>
        {props.children}
    </div>
)
}
export default ProjectCard;