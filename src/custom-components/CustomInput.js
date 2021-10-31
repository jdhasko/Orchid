import React from 'react'
import { View, TextInput } from 'react-native'
import styled from 'styled-components'

const Container = styled(View)`
    padding: 8px;
    background: white;
    width:100%;
    font-size: ${props => props.theme.fontSizes.sm};
`
const InputField = styled(TextInput)`
    width: 100%;
`

const CustomInput = () => {
    return (
        <Container>
            <InputField></InputField>
        </Container>
    )
}

export default CustomInput
