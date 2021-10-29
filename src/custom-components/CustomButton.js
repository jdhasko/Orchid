import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import CustomText from './CustomText'
import PropTypes from 'prop-types'

const Container = styled(View)`

`

const CustomButton = (props) => {

    const {text}

    return (
        <TouchableOpacity>
            <Container {...props}>
                <CustomText>{text}</CustomText>
            </Container>
        </TouchableOpacity>
    )
}

CustomButton.PropTypes =
{
    text: PropTypes.string
}

export default CustomButton
