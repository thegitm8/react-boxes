/**
 * react-boxes FlexContainer Component
 *
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */

import React from 'react'
import Prefixer from 'inline-style-prefixer'
import userAgent from './userAgent'

/* responsive Boxes Container */
export default function FlexContainer({
	children,
	style, id, className,
	display,
	flow, direction, wrap,
	justifyContent, alignItems, alignContent
}) {

	const flexDirection = direction || 'row'
	const flexWrap = wrap || 'nowrap'

	const styles = Object.assign({
	
		/* display with vendor prefixes */
		display: 		display || 'flex', 							// flex | inline-flex
		flexFlow: 		flow || `${flexDirection} ${flexWrap}`,		// shorthand flex-direction and flex-wrap: <‘flex-direction’> || <‘flex-wrap’>
		justifyContent: justifyContent || 'flex-start',				// flex-start | flex-end | center | space-between | space-around
		alignItems: 	alignItems || 'flex-start', 				// flex-start | flex-end | center | baseline | stretch
		alignContent: 	alignContent || 'stretch'					// flex-start | flex-end | center | space-between | space-around | stretch
	}, style)

	const prefixer = new Prefixer({ userAgent: userAgent() })

	const containerStyle = prefixer.prefix(styles)

	return (
		<div
			style={ containerStyle }
			id={ id || null }
			className={ className || 'flexContainer' }
		>
			{ children }
		</div>
	)

}

