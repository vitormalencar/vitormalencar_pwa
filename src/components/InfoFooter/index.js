import {h} from 'preact';
import Icon from '../Icon';
import Style from './style.scss';

const InfoFooter = () => (
	<div className="info-footer">
		<div className="info-footer__social">
			<a
				href="skype:vitormalencar?userinfo"
				target="_blank"
				rel="noopener"
				className="info-footer__social-icon--skype">
				<Icon icon='SKYPE' color='white' size='22'></Icon>
				skype
			</a>
			<a
				href="https://twitter.com/vitormalencar"
				target="_blank"
				rel="noopener"
				className="info-footer__social-icon--twitter">
				<Icon icon='TWITTER' color='white' size='22'/>
        twitter
			</a>

			<a
				href="https://github.com/vitormalencar"
				target="_blank"
				rel="noopener"
				className="info-footer__social-icon--github">
				<Icon icon='GITHUB' color='white' size='22'/>
        github
			</a>
			<a
				href="https://www.instagram.com/vitormalencar"
				target="_blank"
				rel="noopener"
				className="info-footer__social-icon--instagram">
				<Icon icon='INSTAGRAM' color='white' size='22'/>
        instagram
			</a>
			<a
				href="https://www.linkedin.com/in/vitormalencar"
				target="_blank"
				rel="noopener"
				className="info-footer__social-icon--linkedin">
				<Icon icon='LINKEDIN' color='white' size='22'/>
        linkedin
			</a>

		</div>
	</div>
);

export default InfoFooter;
