import styled from 'styled-components'

export const OuterContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-columns: 1fr 2fr 1fr;
`
export const InnerContainer = styled.div`
            grid-row: 2/3;
            grid-column: 2/3;
`