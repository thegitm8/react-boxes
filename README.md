# :package: React Boxes
A small and independent layout library which provides easy-to-use layout templates as react components.

:exclamation: This is a work in progress and is not yet production ready.

## Features

- based on CSS3 Flexbox
- no media queries
- inline CSS
- Autoprefixed
- serverside rendering


## Install
`npm install react-boxes --save`

### Usage & Examples

```javascript
import React from 'react'
import { FlexContainer, FlexChild } from 'react-boxes/flex'

React.render(

	<FlexContainer>
		<FlexChild>
			stuff
		</FlexChild>
	</FlexContainer>,

	getElementById('mount-point')

)

```

For more, visit the [API page](./docs/API.md).