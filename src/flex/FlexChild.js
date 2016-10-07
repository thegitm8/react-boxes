/**
 * react-boxes FlexChild component
 *
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */

import React from 'react'
import Prefixer from 'inline-style-prefixer'
import userAgent from './userAgent'

/* responsive Boxes */
export default function FlexItem({
	children,
	style, id, className,
	flex, grow, shrink, size, basis,
	alignSelf,
	order
}) {

	/* box styles */
	const flexGrow = 	grow || '0'			// <number> ( default: 0 )
	const flexShrink = 	shrink || '1'		// <number> ( default: 1 )
	const flexBasis = 	size || 'auto'		// <length> | auto ( default: auto )

	const styles = Object.assign({
	
		flex: 			flex || `${flexGrow} ${flexShrink} ${flexBasis}`,		// shorthand for flex-grow, flex-shrink and flex-basis: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
		flexBasis: 		basis || 'auto',										// <length> | auto
		alignSelf: 		alignSelf || 'auto',									// auto | flex-start | flex-end | center | baseline | stretch
		order: 			order || null											// <integer>

	}, style)


	const prefixer = new Prefixer({ userAgent: userAgent() })

	const boxStyle = prefixer.prefix(styles)

	return (
		<div style={boxStyle} id={id} className={className}>
			{ children }
		</div>
	)

}
