import { Box, Typography } from "@mui/material";
import Title from "./Title";
import { ITitleDescriptionProps } from "./TitleDescription";

interface ITitleDescriptionImage extends ITitleDescriptionProps {
    image: string;
    imagePosition: "top" | "right"
    maxWidth: number
}

export default function TitleDescriptionImage(props: ITitleDescriptionImage) {
    const { title, description, image, maxWidth } = props;
    return (
        <Box maxWidth={maxWidth}>
            <img src={image} alt={title} />
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