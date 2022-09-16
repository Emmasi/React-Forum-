import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Postlayout from "./postIdLayout";

const PostID = () => {
  const [User, setUser] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const title = location.state?.title;
  console.log(title);
  const body = location.state?.body;
  console.log(body);
  const [titleState, setTitleState] = useState(title);
  const [bodyState, setBodyState] = useState(body);
  if (!titleState) {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTitleState(data[0].title);
      });
  }
  if (!bodyState) {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBodyState(data[0].body);
        console.log(data[0].body);
      });
  }
  const getuser = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getuser();
  }, []);

  return (
    <div className="userContainer">
      <h2>{titleState}</h2>
      <h3>{bodyState}</h3>
      <button>
        <Link className="btntitle" to="/">
          Till Start
        </Link>
      </button>
      {User.map((comment, i) => (
        <Postlayout
          body={comment.body}
          name={comment.name}
          email={comment.email}
          key={i}
        />
      ))}
    </div>
  );
};
export default PostID;
