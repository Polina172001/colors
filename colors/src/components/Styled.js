import style from 'styled-components'

const Styled = style.form`
width: 150px;
    & input,
    & output {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        padding: 8px 8px;
        text-align: center;
        border: none;
        font-size: 1.1rem;
    }
    & output {
        margin-top: 3px;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
    }
`
export default Styled