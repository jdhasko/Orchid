import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export const fontSizes = {
	xs: 14,
	sm: 18,
	md: 24,
	lg: 32,
	xl: 52,
	xxl: 80,
}


const Texty = styled(Text)`
    color: ${props => props.theme.colors[props.color]|| props.color || 'balck'};
    font-size: ${props => fontSizes[props.fontSize] || props.fontSize || fontSizes.sm}px;
    font-weight: ${props => props.bold ? 'bold' :  props.fontWeight || 'normal' };
    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '8px 0px'};

`


export default function CustomText(props) {

    const {children} = props

    return (
        <>
            <Texty {...props}>
                {children}
            </Texty>
        </>
    )
}
