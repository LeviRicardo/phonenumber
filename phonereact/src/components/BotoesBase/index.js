import * as S from './styles'

function BotoesBase({botoes}) {
    return(
        <S.WrapperAll>
        <S.Wrapper>
            {botoes.map(item => <span onClick={item.noclick}> {item.nome} </span>)}
        </S.Wrapper>
        </S.WrapperAll>
    )
}

export default BotoesBase;