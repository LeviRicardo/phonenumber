import * as S from './styles'

function SubmitButton({submit}) {
    return(
        <S.WrapperAll>
            <S.Wrapper>
            <span onClick={submit}>
                Submit
            </span>
            </S.Wrapper>
        </S.WrapperAll>
    )
}

export default SubmitButton;