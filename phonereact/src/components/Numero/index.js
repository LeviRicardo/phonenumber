import * as S from './styles'

function Numero({numero}) {
    return(
        <S.Wrapper>
            <div>Please Enter Your Phone Number</div>
            <span>{numero}</span>
        </S.Wrapper>
    )
}

export default Numero