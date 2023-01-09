import ChangePassword from './ChangePassword/Content';
import classes from './Content.module.css';

const Profile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ChangePassword />
    </section>
  );
};

export default Profile;
