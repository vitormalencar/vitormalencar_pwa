import { h } from "preact";
import Style from "./style.scss";

const Button = ({ mail }) =>
  <a href={mail} className="info__button">
    Let's talk
  </a>;

export default Button;
