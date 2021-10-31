import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components'
import CustomText from './CustomText'
import PropTypes from 'prop-types'
import { prototype } from 'react-native/Libraries/Image/ImageBackground'

const StyledButton = styled(TouchableOpacity)`
    background-color: ${props => props.theme.colors[props.background]|| props.background || 'gray' };
    padding:8px 16px;
    border-radius: 8px;
    width: ${props => props.width || 'auto'};
    align-items: center;
`

const Container = styled(View)`
    flex-direction: row;
    align-items:center;
`
const IconImage= styled(Image)`
    height: 30px;
    width: 30px;
    margin: 8px 16px ;
`

const CustomButton = (props) => {

    const {text, imgUrl, onPress, textColor,bold} = props

    return (
        <StyledButton onPress={onPress} {...props}>
            <Container >
                <IconImage source={require('../../assets/imgs/GoogleLogo.png')} />
                <CustomText bold={bold} color={textColor}>{text}</CustomText>
            </Container>
        </StyledButton>
    )
}

CustomButton.propTypes =
{
    text: PropTypes.string,
    onPress: PropTypes.func,
    icon:PropTypes.node,
    bold: PropTypes.bool,
}

export default CustomButton
