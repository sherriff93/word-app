import styled, {injectGlobal} from 'styled-components'

export default injectGlobal `
            :root {
              --red: #b00;
            }
            
            body {
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: "Lato","Geneva CY","Lucida Grande","Arial Unicode MS","Helvetica Neue","Helvetica","Arial",sans-serif;
            }
            
            html {
                height: 100%;
            }
            
            #root {
                height: 100%;
            }
        `
export const OuterContainer = styled.div `
            height: 100%;
        `
