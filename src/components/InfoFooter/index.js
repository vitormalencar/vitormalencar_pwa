import {h} from 'preact';
import Icon from '../Icon';
import Style from './style.scss';

const InfoFooter = () => (
	<div className="info-footer">
		<div className="info-footer__social">
			<a
				href="https://twitter.com/vitormalencar"
				target="_blank"
				rel="noopener"
				className="fa fa-twitter info-footer__social-icon--twitter">
				<Icon icon='TWITTER' color='white' size='22'/>
				</a>
			<a
				href="https://github.com/vitormalencar"
				target="_blank"
				rel="noopener"
				className="fa fa-github info-footer__social-icon--github">
					<Icon icon='GITHUB' color='white' size='22'/>
				</a>
			<a
				href="https://www.instagram.com/vitormalencar"
				target="_blank"
				rel="noopener"
				className="fa fa-instagram info-footer__social-icon--instagram">
					<Icon icon='INSTAGRAM' color='white' size='22'/>
				</a>
			<a
				href="https://www.linkedin.com/in/vitormalencar"
				target="_blank"
				rel="noopener"
				className="fa fa-linkedin info-footer__social-icon--linkedin">
					<Icon icon='LINKEDIN2' color='white' size='22'/>
				</a>
		</div>
	</div>
);

export default InfoFooter;
