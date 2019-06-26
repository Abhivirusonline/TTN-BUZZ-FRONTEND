import React from "react";
import photo from "../../Assests/IMG_20181121_132247.jpg"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const   useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }
       return(
           <Card className={classes.card}>
               <CardHeader
                   avatar={
                       <Avatar aria-label="Recipe" className={classes.avatar}>
                           <img src={props.user.photoURL} alt="" width={"100%"}/>
                       </Avatar>
                   }
                   action={
                       <IconButton aria-label="Settings">
                           <MoreVertIcon />
                       </IconButton>
                   }
                   title={props.user.displayName}
                   subheader={props.user.accountCreated}
               />
               <CardMedia
                   className={classes.media}
                   image={photo}
                   title="Abhishek"
                   width={"100%"}
                   background-size={"contain"}
               />
               <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">
                       This impressive paella is a perfect party dish and a fun meal to cook together with your
                       guests. Add 1 cup of frozen peas along with the mussels, if you like.
                   </Typography>
               </CardContent>
               <CardActions disableSpacing>
                   <IconButton aria-label="Add to favorites">
                       <FavoriteIcon />
                   </IconButton>
                   <IconButton aria-label="Share">
                       <ShareIcon />
                   </IconButton>
               </CardActions>
           </Card>
       );
}