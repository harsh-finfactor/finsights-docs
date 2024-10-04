import { Typography } from "@mui/material";

export interface ITitleProps {
    title: string;
    paddingTop?: number;
    paddingBottom?: number;
}

export default function Title(props: ITitleProps) {
    const { title, paddingTop, paddingBottom } = props;
    return (
        <Typography
            sx={{
                paddingTop: paddingTop ?? 4,
                paddingBottom: paddingBottom ?? 1,
                textAlign: "start"
            }}
            fontSize={20}
            fontWeight="bold"
        >
            {title}
        </Typography>
    );
}