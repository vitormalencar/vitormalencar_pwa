import {h} from 'preact';
import Style from './style.scss';

const About = ({about}) => (
	<div class="main__container-about">
		<div class="main__tag">About Me</div>
		<p class="main__headline">
			Experienced and ambitious web developer and speaker, focused on new and scalable technologies,
			who loves sharing knowledge and cares about self-improvement.
			Enjoys talking in events and meetings about
			<a href='https://speakerdeck.com/vitormalencar/getting-started-with-progressive-web-apps'>progressive web apps ⚛</a>,
			<a href='https://slides.com/robertovitormaia/deck-4-13-15/fullscreen'>funcional programming ƛ</a>
			and <a href='https://speakerdeck.com/vitormalencar/ionic-rocks'>hybrid development. ⚡️</a></p>
	</div>
);

export default About;
