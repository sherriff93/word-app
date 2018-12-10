import styled, {injectGlobal} from 'styled-components'

export default injectGlobal `
            :root {
              --headerBackgroundColour: #1E252F;
              --sidebarBackgroundColour: #2C3645;
              --sidebarTextColour: white;
              --mainBackgroundColour: #F4F5F8;
              --dictionaryHoverBackgroundColour: #455265
              --dictionarySelectedBackgroundColour: #1E252F
              --dictionaryMainHeaderBackgroundColour: #38475f
              --dictionaryMainWordFormColour: #616161
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
