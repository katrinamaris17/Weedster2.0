import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    red: {
        color: '#A4C820',
    },
    background: {
        backgroundColor: 'white',
    },
    postTitle: {
        backgroundColor: '#90b144',
        color: 'white',
        paddingLeft: 8,
    },
    post: {
        width: '100%',
    },
  });


export default function() {
    const [ postInput, setPostInput ] = useState('');
    const [posts, setPost] = useState([]);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(() => {
        axios.get('/api/post')
            .then(res => {
                console.log(res.data);
                setPost(res.data);
            });
    }, []);

    const changeHandler = (e) => {
        console.log(e.target.value);
        setPostInput(e.target.value)
    }

    const clickHandler = async () => {

        const res = await axios.post('/api/post', { 
            post: postInput,
            // category: categoryInput,

         });
        console.log(res.data);
        const newPostsState = [res.data, ...posts];
        setPost(newPostsState);
        setPostInput('');
        // fetch("/apix/post", {
        //     method: "post", 
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //       },
        //     body: JSON.stringify({post})
        // })
        // .then(r=>r.json())
        // .then(r=>{console.log(r)})
    }
    return (
        <>
            <textarea 
            rows="5" 
            cols="100" 
            onChange={changeHandler}
            value={postInput}
            />
            <br />
            <button onClick={clickHandler} className={classes.red}>Submit</button>

            {
                posts?.map((post, index) => {
                    return (
                        <div>
                        <Card className={`${classes.background} ${classes.root} ${classes.post}`} key={post.id}>
                        <CardContent>
                          <Typography className={classes.postTitle} color="textPrimary" gutterBottom backgroundColor="#FFFFFF">
                            <h1>{post.title}</h1>
                          </Typography>
                          <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                            {post.caption}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {post.category}
                            <br />
                            {}
                          </Typography>
                        </CardContent>
                      </Card>
                      <br></br>
                      </div>
                    );
                })
            }
        </>
    ) 
}

