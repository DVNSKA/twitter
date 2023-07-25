import React from "react";
import "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // No need to import 'firestore' separately

const firebaseConfig = {
    apiKey: "AIzaSyAFgr5qLatupaOA1hTW0DkifzfsJmC08M4",
    authDomain: "twitter-5f23e.firebaseapp.com",
    projectId: "twitter-5f23e",
    storageBucket: "twitter-5f23e.appspot.com",
    messagingSenderId: "688305656915",
    appId: "1:688305656915:web:5da1df779ae1b452c1e2a6",
    measurementId: "G-GZ5EE27VYY"
  // Your Firebase configuration object goes here
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); // You can use the 'auth' instance if needed

function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>home</h2>
      </div>
      <Tweetbox />
      {posts.map(post => (
        <Post
          key={post.id} // Don't forget to add a unique key when mapping over an array
          displayName={post.displayName}
          userName={post.userName}
          verifed={post.verifed}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
