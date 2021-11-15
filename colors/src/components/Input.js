import {useState} from 'react'
import Styled from './Styled'

function HexValidator(hexValue) {
    const regExp = /^#[0-9a-f]{6}$/i
    return regExp.test(hexValue)
}

function Rgb(hexValue) {
    const array = hexValue.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    const res = `rgb(${array[0]},${array[1]},${array[2]})`
    return res
}

const HexForm = ({onChangeBackground, initialValue}) => {
    const initialRgb = Rgb(initialValue)
    const [rgb, setRgb] = useState(initialRgb)

    function handleSubmit(e) {
        e.preventDefault()
    }

    function onChangeHandle(e) {
        const {value} = e.target
        console.log('1',value)
        if (value.length === 7) {
            console.log('2',value)
            const isValidHex = HexValidator(value)
            const rgbOut = isValidHex ? Rgb(value) : 'Ошибка' 
            if (isValidHex) onChangeBackground(value)
            setRgb(rgbOut)
        } 
    }

    return (
        <Styled onSubmit={handleSubmit}>        
            <input id="hex" name="hex" defaultValue={initialValue} onChange={onChangeHandle}/>
            <output id="rgb" name="rgb">{rgb}</output>
        </Styled>
    )
}

export default HexForm