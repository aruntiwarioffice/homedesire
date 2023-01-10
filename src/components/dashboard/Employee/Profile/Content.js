import ChangePassword from './ChangePassword/Content';
import classes from './Content.module.css';

const EmployeeProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Employee Profile</h1>
      <ChangePassword />
    </section>
  );
};

export default EmployeeProfile;
