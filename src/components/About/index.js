import {h} from 'preact';
import Style from './style.scss';

const About = ({about}) => (
	<div className="main__container-about">
		<div className="main__tag">About Me</div>
		<p className="main__headline">
			Experienced and ambitious web developer and speaker, focused on new
			and scalable technologies, who loves sharing knowledge and cares about
			self-improvement. Enjoys talking in events and meetings about:
			<br/>
			<ul class='talks'>
			<li><a href='https://speakerdeck.com/vitormalencar/getting-started-with-progressive-web-apps'>⚛ Progressive web apps</a></li>
			<li><a href='https://slides.com/robertovitormaia/deck-4-13-15/fullscreen'>ƛ Funcional programming</a></li>
			<li><a href='https://speakerdeck.com/vitormalencar/ionic-rocks'>⚡️ Hybrid development.</a></li>
			</ul>
		</p>
	</div>
);

export default About;
