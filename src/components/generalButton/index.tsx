import { FC } from 'react'
import { Button } from './type'

const $helveticaRegular16 = '0.875'
const generalButton: FC<Button> = ({ height, text, backgroundColor, textColor, method }) => (
  <>
    <button className='_button' onClick={method ? method : null}> {text} </button>
    <style jsx>{`
    ._button{
      width: 100%;
      height: ${height}rem;
      background-color: ${backgroundColor};
      box-shadow: 10px 10px 20px #0000000D;
      color: ${textColor};
      border: none;
      cursor: pointer;
      font-size: ${$helveticaRegular16}rem;
      border-radius: 10px;
    }
  `}</style>
  </>
);

export default generalButton
