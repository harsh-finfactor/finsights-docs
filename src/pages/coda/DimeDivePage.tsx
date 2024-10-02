import React from "react";
import RapiDocReact from "../../components/RapidDocReact";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import TitleDescription from "../../components/TitleDescription";
import Title from "../../components/Title";
import TitleDescriptionImage from "../../components/TitleDescriptionImage";
import FinancialInsights from "../../assets/financial-insights.png";
import FinancialDataIntegration from "../../assets/financial-data-integration.png"
import FinancialAssetCoverage from "../../assets/financial-asset-coverage.png"
import WealthTrackSequenceDiagram from "../../assets/wealth-track-sequence-diagram.png"
import CardWithTitleDescriptionAction from "../../components/CardWithTitleDescriptionAction";

const DimeDivePage: React.FC = React.memo(() => {
    return <>
        <Box sx={{
            paddingLeft: 4
        }}>
            <TitleDescription title="WealthTrack" description="Our WealthTrack API seamlessly integrates diverse financial data streams, providing comprehensive, data-driven insights across bank deposits, mutual funds, and equity holdings. Powered by AA Connect, MFC Connect, and market data sources, our solution unlocks the full potential of your financial platform with rich, actionable data." />
            <>
                <Title title="Why WealthTrack?" />
                <Grid container spacing={3} paddingTop={1}>
                    <Grid size={4}>
                        <TitleDescriptionImage
                            title="Gain Comprehensive Financial Insights"
                            description="Leverage data from bank statements, mutual fund holdings, and equity portfolios to provide users with a holistic view of their personal finances. Track transactions, balances, and key investment activities in real-time, enabling users to make informed financial decisions."
                            image={FinancialInsights}
                            imagePosition="top"
                            maxWidth={290}
                        />
                    </Grid>
                    <Grid size={4}>
                        <TitleDescriptionImage
                            title="Extensive Financial Data Integration"
                            description="Integrate with a wide range of financial institutions and data sources using AA Connect and MFC Connect. Seamlessly pull data from banks, brokerage firms, mutual fund providers, and market platforms such as Morningstar to deliver reliable financial insights."
                            image={FinancialDataIntegration}
                            imagePosition="top"
                            maxWidth={290}
                        />
                    </Grid>
                    <Grid size={4}>
                        <TitleDescriptionImage
                            title="Full Spectrum of Financial Assets Coverage"
                            description="Access and analyze a wide variety of financial asset classes, including bank accounts, mutual funds, equities, and more. Our platform connects to all major financial accounts, ensuring that users can monitor and manage their entire financial portfolio in one place."
                            image={FinancialAssetCoverage}
                            imagePosition="top"
                            maxWidth={290}
                        />
                    </Grid>
                </Grid>
            </>
            <>
                <Title title="See how WealthTrack can help you" />
                <Grid container spacing={3} paddingTop={1}>
                    <Grid size={4}>
                        <CardWithTitleDescriptionAction
                            title="Deposit Insights"
                            description="A set of APIs designed for data analytics and aggregation of bank data."
                            actionText="See API Reference"
                            actionClick={() => {

                            }}
                        />
                    </Grid>
                    <Grid size={4}>
                        <CardWithTitleDescriptionAction
                            title="Mutual Fund Insights"
                            description="A set of APIs designed for data analytics and aggregation of mutual fund data."
                            actionText="See API Reference"
                            actionClick={() => {

                            }}
                        />
                    </Grid>
                    <Grid size={4}>
                        <CardWithTitleDescriptionAction
                            title="Equity Insights"
                            description="A set of APIs designed for data analytics and aggregation of equities data."
                            actionText="See API Reference"
                            actionClick={() => {

                            }}
                        />
                    </Grid>
                </Grid>
            </>
            <>
                <Title title="How WealthTrack Works - Sequence Diagram" />
                <img src={WealthTrackSequenceDiagram} style={{ maxWidth: 900 }} alt={"Sequence Diagram"} />
            </>
        </Box>
        <RapiDocReact
            spec-url={'/finsights-docs/dimedive.json'}
            show-info={false}
            show-header={false}
            render-style="view"
            primary-color="#4D2FA3"
            bg-color="#FAFBFC"
            schema-style="table"
            font-size="large"
            regular-font='"Roboto","Helvetica","Arial",sans-serif'
            mono-font='"Roboto","Helvetica","Arial",sans-serif'
        />
    </>
});

export default DimeDivePage;
