import ChangePassword from './ChangePassword/Content';
import classes from './Content.module.css';

const CustomerProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Customer Profile</h1>
      <ChangePassword />
    </section>
  );
};

export default CustomerProfile;
