import GraphApplication from '../../components/graph-app/GraphApplication';
import MenuApplication from '../../components/menu-application/MenuApplication';
import { PageContentContainer } from './page-content.styled';

type Props = {};

const PageContent = ({}: Props) => {
    return (
        <PageContentContainer>
            <GraphApplication />
            <MenuApplication />
        </PageContentContainer>
    );
};

export default PageContent;
