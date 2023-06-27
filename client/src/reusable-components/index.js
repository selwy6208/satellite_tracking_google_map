import styled, {keyframes, css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

export const FlexContainer = styled.div`
  display: flex;
`

export const ListItem = styled.div`
  cursor: pointer;
  padding: 8px 20px;
  border-bottom: 1px solid #cebbf1;
  ${(props) =>
    props.selected &&
    css`
      background-color: #dcd2ef;
    `}
  &:hover {
    border-left: 6px solid #4611a7;
  }
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ActionContainer = styled.div`
  display: flex;
`

export const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || '#566787'};
  display: flex;
  align-items: center;
`

export const MainContentContainer = styled.div`
  margin-top: 3px;
  font-size: 15px;
`

export const TailContainer = styled.div`
  margin-top: 12px;
  font-size: 10px;
`

export const MarkerIcon = styled(FontAwesomeIcon)`
  color: #909090;
  font-size: ${(props) => props.fontSize || '10px'};
  margin-right: 5px;
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

export const EditButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
`;

export const ArrowButton = styled.button`
  border: none;
  background-color: #a3a3a3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconArea = styled(FontAwesomeIcon)`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '16px'};
`;

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

export const ModalDialog = styled.div`
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

export const FormGroup = styled.div`
  margin-bottom: 10px;
  display: block;
`

export const LabelForm = styled.div`
  font-weight: normal;
  display: block;
  margin-bottom: 0.5rem;
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
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  background-clip: padding-box;
  box-sizing: border-box;
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

export const ModalButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 10px;
  background-color: ${(props) => props.backgroundColor || 'none'};
  color: ${(props) => props.color || '#212529'};
`

export const PopupContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 300px;
`;

export const MessageContainer = styled.p`
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SatelliteDetailModal = styled.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

export const ErrorLabel = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;