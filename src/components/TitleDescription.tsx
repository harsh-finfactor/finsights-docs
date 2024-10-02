import { Typography } from "@mui/material";
import Title, { ITitleProps } from "./Title";

export interface ITitleDescriptionProps extends ITitleProps {
    description: string;
}

export default function TitleDescription(props: ITitleDescriptionProps) {
    const { title, description } = props;
    return (
        <>
            <Title title={title} />
            <Typography
                fontSize={14}
                gutterBottom
            >
                {description}
            </Typography>
        </>
    );
}