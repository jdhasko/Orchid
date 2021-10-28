import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import CustomText from '../custom-components/CustomText'

const Root = styled(View)`
    width: 100%;
    height:100%;
    background-color: ${props => props.theme.colors.lightPink};
`
const LoginPanel = styled(View)`
    width: 80%;
    height: auto;
    margin:auto;
    border-radius: 16px;
    align-items:center;
    background-color: ${props => props.theme.colors.baseColor};
`

const LoginScreen = () => {
    return (
        <Root>
            <LoginPanel>
            <CustomText color="white" fontSize="md">BEJELENTKEZÉS</CustomText>

            </LoginPanel>
        </Root>
    )
}

export default LoginScreen
