import classes from './Content.module.css';

const RegisterContent = () => {
  return (
    <div className={classes.radioButton}>
      <input type="radio" id="radio1" name="radios" value="all" checked />
      <label for="radio1">Books</label>
      <input type="radio" id="radio2" name="radios" value="false" />
      <label for="radio2">Snippets</label>
      <input type="radio" id="radio3" name="radios" value="true" />
      <label for="radio3">Quizzes</label>
    </div>
  );
};

export default RegisterContent;
