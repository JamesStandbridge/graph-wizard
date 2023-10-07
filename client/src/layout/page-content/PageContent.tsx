import GraphApplication from '../../components/graph-app/GraphApplication';
import MenuApplication from '../../components/menu-application/MenuApplication';
import AlgorithmMenu from '../../components/algorithm-applications/sub-menu/AlgorithmMenu';
import { PageContentContainer } from './page-content.styled';

type Props = {};

const PageContent = ({}: Props) => {
    return (
        <PageContentContainer>
            <AlgorithmMenu />
            <GraphApplication />
            <MenuApplication />
        </PageContentContainer>
    );
};

export default PageContent;
