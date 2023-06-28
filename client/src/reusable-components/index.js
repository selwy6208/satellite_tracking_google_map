import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || '#566787'};
  display: flex;
  align-items: center;
`;

export const PlusButton = styled.button`
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4611a7;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
`;

export const IconButton = styled.button`
  width: ${(props) => props.width || '30px'};
  height: ${(props) => props.height || '30px'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

export const IconArea = styled(FontAwesomeIcon)`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '16px'};
  margin-right: ${(props) => props.marginright || '5px'};
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 10px;
  background-color: ${(props) => props.backgroundColor || 'none'};
  color: ${(props) => props.color || '#212529'};
`

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${slideDown} 0.3s ease-in-out;
`;

export const Modal = styled.div`
  width: ${(props) => props.width || '400px'};
  background-color: white;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  animation: ${slideDown} 0.3s ease-in-out;
`;

export const ModalHeader = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  font-size: 20px;
  font-weight: 500;
`

export const ModalBody = styled.div`
  padding: 20px 30px;
`

export const ModalFooter = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  border-top; 1px solid #dee2e6;
  background: #ecf0f1;
`

export const FormGroup = styled.div`
  margin-bottom: 10px;
  display: block;
`

export const LabelForm = styled.div`
  font-weight: normal;
  display: block;
  margin-bottom: 8px;
`

export const InputForm = styled.input`
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: white;
  border-radius: 2px;
  border-color: #dddddd;
  box-shadow: none;
  width: 100%;
  font-size: 16px;
  padding: 6px 12px;
  background-clip: padding-box;
  box-sizing: border-box;
`

