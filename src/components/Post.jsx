import React from "react";
import {
    Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card:{
        marginBottom: theme.spacing(5)
    },
    media:{
        height: 250,
        [theme.breakpoints.down("sm")]:{
          height: 150,
        }
    },
}));

function Feed() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
          className={classes.media} 
          image="https://images.pexels.com/photos/9408954/pexels-photo-9408954.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title='My Post'
          />
          <CardContent>
            <Typography gutterBottom variant='h5'>My First Post</Typography>
            <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, omnis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, omnis. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
export default Feed;
