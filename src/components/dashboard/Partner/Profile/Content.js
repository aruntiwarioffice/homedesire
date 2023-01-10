import ChangePassword from './ChangePassword/Content';
import classes from './Content.module.css';

const PartnerProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Partner Profile</h1>
      <ChangePassword />
    </section>
  );
};

export default PartnerProfile;
