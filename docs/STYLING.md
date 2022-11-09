# Styling

To avoid style clashes, when declaring styles rules in components, use highly specific selectors by including a component-level class selector. Add a class name to the component if necessary.

e.g, for a Footer component

In /components/Footer/Footer.jsx,

	import './Footer.css'
	
	function Footer() {
		return(
			<footer className="footer">
				<img src="path/to/image" alt="description"/>
			</footer>
		);
	}
	
	export default Footer;

In /components/Footer/Footer.css,

Correct:

	.footer img {
		width: 50%;
	}
Wrong:

	img {
		width: 50%;
	}

In the second case, the `width: 50%` might get applied to an `img` element in different component which may not be our intention. 
