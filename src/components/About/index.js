import {h} from 'preact';
import Style from './style.scss';

const About = ({about}) => (
	<div class="main__container-about">
		<div class="main__tag">About Me</div>
		<p class="main__headline">{about}
			<a href='https://speakerdeck.com/vitormalencar/getting-started-with-progressive-web-apps'>progressive web apps</a>,
			<a href='https://slides.com/robertovitormaia/deck-4-13-15/fullscreen'>funcional programming</a>
			and <a href='https://speakerdeck.com/vitormalencar/ionic-rocks'>hybrid apps.</a></p>
	</div>
);

export default About;
