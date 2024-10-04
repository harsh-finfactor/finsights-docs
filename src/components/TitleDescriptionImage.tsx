import { Box, Typography } from "@mui/material";
import Title from "./Title";
import { ITitleDescriptionProps } from "./TitleDescription";
import { FunctionComponent, SVGProps } from "react";

interface ITitleDescriptionImage extends ITitleDescriptionProps {
    svg: FunctionComponent<SVGProps<SVGSVGElement>>;
    imagePosition: "top" | "right";
    maxWidth: number;
}

export default function TitleDescriptionImage(props: ITitleDescriptionImage) {
    const { title, description, svg: Svg, maxWidth } = props;
    return (
        <Box maxWidth={maxWidth}>
            <Svg />
            <Title title={title} paddingTop={1} />
            <Typography
                fontSize={14}
                gutterBottom
                textAlign="start"
            >
                {description}
            </Typography>
        </Box>
    );
}