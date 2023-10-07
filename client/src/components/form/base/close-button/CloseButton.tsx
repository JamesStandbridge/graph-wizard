import { CloseButtonContainer } from './close-button.styled';
import { AiFillCloseSquare } from 'react-icons/ai';

type Props = {
    onClose: () => void;
};

const CloseButton = ({ onClose }: Props) => {
    return (
        <CloseButtonContainer onClick={onClose}>
            <AiFillCloseSquare />
        </CloseButtonContainer>
    );
};

export default CloseButton;
