import PropTypes from "prop-types";
import styles from "./Button.module.css";
// xxx.module.css : module을 붙히면 클래스가 중첩되는 것을 방지할 수 있다.

function Button({ text, onClick }) {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
      {/* css내용을 적용시키기 위한 방법 : className={styles.btn} */}
      {/* class속성으로 css스타일을 적용시킬 수 있다. */}
      {/* css도 모듈처럼 적용시킬 수 있어 편리 */}
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
