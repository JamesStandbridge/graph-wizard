import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import './App.css';

import Header from './layout/header/Header';
import PageContent from './layout/page-content/PageContent';
import Footer from './layout/footer/Footer';
import theme from './theme/theme';
import i18n from './i18n/i18n';

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <ThemeProvider theme={theme}>
                    <Header />
                    <PageContent />
                    <Footer />
                </ThemeProvider>
            </StyleSheetManager>
        </I18nextProvider>
    );
}

export default App;
