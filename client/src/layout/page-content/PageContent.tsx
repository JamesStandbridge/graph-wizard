import GraphApplication from '../../components/graph-app/GraphApplication';
import AlgorithmMenuApplication from '../../components/menu-application/sections/algorithm/AlgorithmMenuApplication';
import AlgorithmMenu from '../../components/applications/algorithm/AlgorithmMenu';
import { PageContentContainer } from './page-content.styled';
import { useAppStore } from '../../state-manager/app-store/appStore';
import GraphMenuApplication from '../../components/menu-application/sections/graph/GraphMenuApplication';

type Props = {};

const PageContent = ({}: Props) => {
    const currentLayout = useAppStore((state) => state.currentLayout);

    const renderLayout = () => {
        switch (currentLayout) {
            case 'algorithm':
                return (
                    <>
                        <AlgorithmMenu />
                        <GraphApplication />
                        <AlgorithmMenuApplication />
                    </>
                );
            case 'graph':
                return (
                    <>
                        <GraphApplication />
                        <GraphMenuApplication />
                    </>
                );
        }
    };

    return <PageContentContainer>{renderLayout()}</PageContentContainer>;
};

export default PageContent;
