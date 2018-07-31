import { h } from "preact";
import Icon from "../Icon";
import Style from "./style.scss";

const InfoFooter = ({ social }) =>
  <div className="info-footer">
    <div className="info-footer__social">
      {social.map(item =>
        <a
          href={`${item.url}`}
          target="_blank"
          rel="noopener"
          className={`info-footer__social-icon--${item.name}`}>
          <Icon title={item.name} icon={`${item.name}`} color="white" size="22" />
        </a>
      )}
    </div>
  </div>;

export default InfoFooter;
