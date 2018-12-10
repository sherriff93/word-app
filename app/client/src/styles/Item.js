import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const StyledItem = styled.li `
            border-radius: 4px;
            height: 50px;
            width: 100%;
            background: #e7e7ea;
            list-style: none;
            padding: 20px 20px 20px 20px;
            margin: 10px 0 10px 0;
            display: flex;
            align-items: center;
            box-shadow: 3px 3px 5px 0px #c7c7c7;
            box-sizing: border-box;
            justify-content: space-between;
        `
export const Name = styled.span `
            
        `
export const TrashIcon = styled(FontAwesomeIcon) `
            cursor: pointer;
            float: right;
        `