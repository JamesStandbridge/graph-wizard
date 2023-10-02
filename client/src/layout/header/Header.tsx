import LanguageSelector from '../../components/form/language-selector/LanguageSelector';
import { HeaderContainer, HeaderLeftActions } from './header.styled';

type Props = {};

const Header = ({}: Props) => {
    return (
        <HeaderContainer>
            <HeaderLeftActions>
                <LanguageSelector />
            </HeaderLeftActions>
        </HeaderContainer>
    );
};

export default Header;
