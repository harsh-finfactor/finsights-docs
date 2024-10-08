import React, { useEffect } from "react";
import RapiDocReact from "../components/RapidDocReact";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import TitleDescription from "../components/TitleDescription";
import Title from "../components/Title";
import TitleDescriptionImage from "../components/TitleDescriptionImage";
import { ReactComponent as FinancialDataIntegrationComponent } from "../assets/financial-data-integration.svg"
import { ReactComponent as FinancialAssetCoverageComponent } from "../assets/financial-asset-coverage.svg"
import { ReactComponent as WealthScapeSequenceDiagramComponent } from "../assets/wealth-scape-sequence-diagram.svg"
import CardWithTitleDescriptionAction from "../components/CardWithTitleDescriptionAction";
import { ReactComponent as FinancialInsightsComponent } from "../assets/financial-insights.svg"
import { useLocation } from "react-router-dom";

function navigateToSection(hash: string) {
    const element = document.getElementById(hash);
    if (element) {
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

const WealthScapePage: React.FC = React.memo(() => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash.length === 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            return;
        }

        const hash = location.hash.slice(1);
        navigateToSection(hash);
    }, [location.hash]);

    return <>
        <Box sx={{
            paddingLeft: 4
        }}>
            <TitleDescription title="WealthScape" description="Our WealthScape API seamlessly integrates diverse financial data streams, providing comprehensive, data-driven insights across bank deposits, mutual funds, and equity holdings. Powered by AA Connect, MFC Connect, and market data sources, our solution unlocks the full potential of your financial platform with rich, actionable data." />
            <>
                <Title title="Why WealthScape?" />
                <Grid container spacing={3} paddingTop={1}>
                    <Grid size={4}>
                        <TitleDescriptionImage
                            title="Gain Comprehensive Financial Insights"
                            description="Leverage data from bank statements, mutual fund holdings, and equity portfolios to provide users with a holistic view of their personal finances. Track transactions, balances, and key investment activities in real-time, enabling users to make informed financial decisions."
                            svg={FinancialInsightsComponent}
                            imagePosition="top"
                            maxWidth={290}
                        />
                    </Grid>
                    <Grid size={4}>
                        <TitleDescriptionImage
                            title="Extensive Financial Data Integration"
                            description="Integrate with a wide range of financial institutions and data sources using AA Connect and MFC Connect. Seamlessly pull data from banks, brokerage firms, mutual fund providers, and market platforms such as Morningstar to deliver reliable financial insights."
                            svg={FinancialDataIntegrationComponent}
                            imagePosition="top"
                            maxWidth={290}
                        />
                    </Grid>
                    <Grid size={4}>
                        <TitleDescriptionImage
                            title="Full Spectrum of Financial Assets Coverage"
                            description="Access and analyze a wide variety of financial asset classes, including bank accounts, mutual funds, equities, and more. Our platform connects to all major financial accounts, ensuring that users can monitor and manage their entire financial portfolio in one place."
                            svg={FinancialAssetCoverageComponent}
                            imagePosition="top"
                            maxWidth={290}
                        />
                    </Grid>
                </Grid>
            </>
            <>
                <Title title="See how WealthScape can help you" />
                <Grid container spacing={3} paddingTop={1}>
                    <Grid size={4}>
                        <CardWithTitleDescriptionAction
                            title="Deposit Insights"
                            description="A set of APIs designed for data analytics and aggregation of bank data."
                            actionText="See API Reference"
                            actionClick={() => navigateToSection("deposit-insights")}
                        />
                    </Grid>
                    <Grid size={4}>
                        <CardWithTitleDescriptionAction
                            title="Mutual Fund Insights"
                            description="A set of APIs designed for data analytics and aggregation of mutual fund data."
                            actionText="See API Reference"
                            actionClick={() => navigateToSection("mutual-fund-insights")}
                        />
                    </Grid>
                    <Grid size={4}>
                        <CardWithTitleDescriptionAction
                            title="Equity Insights"
                            description="A set of APIs designed for data analytics and aggregation of equities data."
                            actionText="See API Reference"
                            actionClick={() => navigateToSection("equity-insights")}
                        />
                    </Grid>
                </Grid>
            </>
            <>
                <Title title="How WealthScape Works - Sequence Diagram" paddingBottom={4} paddingTop={6} />
                <WealthScapeSequenceDiagramComponent />
            </>
        </Box>
        <RapiDocReact
            id="test"
            spec-url={"https://dhanaprayoga.fiu.finfactor.in/pfm/v2/api-docs"}
            show-info={false}
            show-header={false}
            render-style="view"
            primary-color="#4D2FA3"
            bg-color="#FAFBFC"
            schema-style="table"
            font-size="large"
            regular-font='"Roboto","Helvetica","Arial",sans-serif'
            mono-font='"Roboto","Helvetica","Arial",sans-serif'
        >
            <span id="auth" slot="servers" /> {/* Hack to scroll to right place */}
            <span id="subscription" slot="tag--Subscription" />
            <span id="aa-connect" slot="tag--AA-Connect" />
            <span id="mfc-connect" slot="tag--MFC-Connect" />
            <span id="deposit-insights" slot="tag--Deposit-Insights" />
            <span id="mutual-fund-insights" slot="tag--Mutual-Fund-Insights" />
            <span id="equity-insights" slot="tag--Equity-Insights" />
            <span id="recurring-deposit-insights" slot="tag--Recurring-Deposit-Insights" />
            <span id="term-deposit-insights" slot="tag--Term-Deposit-Insights" />
            <span id="others" slot="tag--Others" />
        </RapiDocReact>
    </>
});

export default WealthScapePage;
