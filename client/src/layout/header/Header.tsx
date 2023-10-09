import { PiGraphBold } from 'react-icons/pi';
import LanguageSelector from '../../components/form/language-selector/LanguageSelector';
import {
    HeaderContainer,
    HeaderRightActions,
    HeaderLogo,
    HeaderTitle,
    LayoutMenu,
    LayoutMenuItem,
} from './header.styled';
import { FaDrawPolygon } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { useAppStore } from '../../state-manager/app-store/appStore';

type Props = {};

const Header = ({}: Props) => {
    const currentLayout = useAppStore((state) => state.currentLayout);
    const setLayout = useAppStore((state) => state.setLayout);

    return (
        <HeaderContainer>
            <HeaderLogo>
                <PiGraphBold />
                <HeaderTitle>GraphWizard</HeaderTitle>
                <LayoutMenu>
                    <LayoutMenuItem
                        color={'#009be4'}
                        selected={currentLayout === 'algorithm'}
                        onClick={() => setLayout('algorithm')}
                    >
                        <FaCode />
                    </LayoutMenuItem>
                    <LayoutMenuItem
                        color={'#f9bd38'}
                        selected={currentLayout === 'graph'}
                        onClick={() => setLayout('graph')}
                    >
                        <FaDrawPolygon />
                    </LayoutMenuItem>
                </LayoutMenu>
            </HeaderLogo>
            <HeaderRightActions>
                <LanguageSelector />
            </HeaderRightActions>
        </HeaderContainer>
    );
};

export default Header;
