# API

- [Flex](#flex)
	- [FlexContainer](#flexcontainer)
	- [FlexChild](#flexchild)

### Flex

If you are not sure how these arguments affect the components, I reccomend [this](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) as an excellent resource for CSS flexbox. The base buildingblocks (FlexContainer, FlexChild) are mimicking standard flex behaviour (they just render a div with inlined flex magic). You can use them as if you would any div with CSS.

The Arguments are named after their respective CSS names without the flex-prefix and camelcased.

#### FlexContainer
```html
<FlexContainer props="value">
	{children}
</FlexContainer>
```
###### alignContent (align-content)
`flex-start | flex-end | center | space-between | space-around | stretch`

###### alignItems (align-items)
`flex-start | flex-end | center | baseline | stretch`

###### children
`react.element`

###### className
optional className for the component

###### direction (flex-direction)
`row | row-reverse | column | column-reverse`

###### display
`flex | inline-flex`

###### flow (flex-flow)
Takes direction and wrap. Also takes precedence over both arguments if given.

###### id
optional id for the components

###### justifyContent (justify-content)
`flex-start | flex-end | center | space-between | space-around`

###### style
style object

###### wrap (flex-wrap)
`nowrap | wrap | wrap-reverse`


#### FlexChild
```html
<FlexChild props="value">
	{children}
</FlexChild>
```

###### alignSelf (align-self)
`auto | flex-start | flex-end | center | baseline | stretch`

###### basis
`<number>`

###### children
`react.element`

###### className
optional className for the components

###### flex
Shorthand for `grow`, `shrink` and `basis` combined. Takes precedence over all three arguments.

###### grow
`<number>`

###### id
optional id for the components

###### order
`<number>`

###### shrink
`<number>`

###### size
`<length> | auto`

###### style
style object