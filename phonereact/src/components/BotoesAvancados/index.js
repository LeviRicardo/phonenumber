import { useState } from 'react'
import * as S from './styles'

function BotoesAdvanced({botoes}) {

    const [advanced, setAdvanced] = useState(0)

    const toggleAdvanced = () => {
        if (advanced === 0) {
          setAdvanced(2)
        } else {
          setAdvanced(0)
        }
      }
    return(
        <S.WrapperAll>
            <div onClick={toggleAdvanced}>Advanced Mode</div>
            
            
            { advanced ?
            <S.Wrapper>
                {botoes.map(item => <span onClick={item.noclick}> {item.nome}
                {item.sup ? <sup>{item.sup}</sup>:""} </span>)}
            </S.Wrapper>
            :""
            }


        </S.WrapperAll>
    )
}

export default BotoesAdvanced;