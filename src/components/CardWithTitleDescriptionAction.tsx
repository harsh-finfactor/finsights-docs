import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import Title from "./Title";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface ICardWithTitleDescriptionAction {
    title: string;
    description: string
    actionText: string;
    actionClick: () => void;
}

export default function CardWithTitleDescriptionAction(props: ICardWithTitleDescriptionAction) {
    const { title, description, actionText, actionClick } = props;
    return (
        <Card sx={{ maxWidth: 275, borderRadius: 4, border: "1px solid #D4CDE9", boxShadow: "3px 3px #C4AEFF" }}>
            <CardActionArea onClick={actionClick}>
                <CardContent>
                    <Title title={title} paddingTop={0} />
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: 2 }}>
                    <Typography color="#4D2FA3">{actionText}</Typography>
                    <span>
                        <ChevronRightIcon sx={{ color: "#4D2FA3" }} />
                    </span>
                </CardActions>
            </CardActionArea>
        </Card >
    );
}