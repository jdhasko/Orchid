import React from 'react'
import { View, Text, TextInput, ImageBackground } from 'react-native'
import styled from 'styled-components'
import CustomText from '../custom-components/CustomText'
import CustomInput from '../custom-components/CustomInput'
import CustomButton from '../custom-components/CustomButton'
import GoogleLogo from '../../assets/imgs/GoogleLogo.png'

const Root = styled(View)`
    width: 100%;
    height:100%;
    background-color: ${props => props.theme.colors.backgroundGray};
`
const Background = styled(ImageBackground)`
    width:100%;
    height:100%;
`

const LoginPanel = styled(View)`
    position:absolute;
    bottom:5%;
    left:5%;
    width: 90%;
    height: auto;
    border-radius: 16px;
    align-items:center;
    background: rgba(255,255,255, 0.6);
    padding: 30px 0px;
`

const LoginScreen = () => {
    return (
        <Root>
            <Background source={require("../../assets/imgs/orchid.jpg")} resizeMode="cover">
                <LoginPanel> 
                    <CustomText padding="8px" color="black" bold fontSize="md">ORCHID BEJELENTKEZÉS</CustomText>
                    <CustomButton
                        text="BEJELENTKEZÉS"
                        textColor="googleRed"
                        bold
                        background="white"
                        width="90%"
                        imgUrl='../../assets/imgs/GoogleLogo.png'
                    />
                </LoginPanel>
            </Background>
        </Root>
    )
}

export default LoginScreen
