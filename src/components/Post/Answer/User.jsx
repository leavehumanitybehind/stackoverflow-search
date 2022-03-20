import classes from "../Post.module.css"

const User = ({ user }) => {
    return (
        <div className={classes.userWrapp}>
             <img src={user.profile_image} alt={`Avatar ${user.display_name}`} width="40" height="40" />
            <h3>{user.display_name}</h3>
        </div>
    )
}
export default User