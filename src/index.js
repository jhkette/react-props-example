import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';


function Avatar ({hash}){
  var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src={url}
        className="avatar"
        alt="avatar" />
    )
};

function Message ({text}){
  
    return (
        <div className="message">
            {text}
        </div>
    )
}
const Time = ({time}) => {
  const timeString = moment(
    time
  ).fromNow();
  return(
  <span className="time">
    {timeString}
  </span>
  );
}
const ReplyButton = () =>
  <i className="fa fa-reply \
     reply-button" />;

const RetweetButton = () =>
  <i className="fa fa-retweet \
     retweet-button" />;

const LikeButton = () =>(
  <i className="fa fa-heart \
     like-button" />);

const MoreOptionsButton = () =>
  <i className="fa fa-ellipsis-h \
     more-options-button" />;


const NameWithHandle = ({author}) =>{
  const { name, handle } = author;
  return (
    <span
      className="name-with-handle">
      <span className="name">
        {name}
      </span>
      <span className="handle">
        @{handle}
      </span>
    </span>
  );
}



var testTweet = {
  message: "Something about cats.",
  gravatar: "27ecfa773b892c6759b68a338d76a554",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
};



function Tweet({tweet}) {
    return (
      <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author = {tweet.author}/>
          <Time time = {tweet.timestamp} />
          <Message text ={tweet.message} />
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    );
  }
  



  ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root'));
  
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

