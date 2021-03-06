import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getuser } from "../../redux/actions/getusers";
import { Card, Button } from "react-bootstrap";
import { deleteuser } from "../../redux/actions/deleteusers";

// import "./DeleteUser.css";

export const DeleteUser = () => {
  const { userinfo, username } = useSelector((state) => ({
    userinfo: state.users.user,
    username: state.auth.username,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuser(username));
  }, []);
  console.log(userinfo);
  console.log(userinfo.displayName);
  console.log(userinfo.updatedAt);

  const handleDelete = (username) => {
    dispatch(deleteuser(username));
  };


  return (
    <>
      <Card style={{ width: "18rem", position: "absolute", left: "40%" }}>
        <Card.Img
          variant="top"
          src="https://frodsham.gov.uk/wp-content/uploads/2019/05/profile-photo-placeholder.jpg"
        />
        <Card.Body>
          <Card.Title>{userinfo.username}</Card.Title>
          <Card.Text>
            <strong>Display Name:</strong> {userinfo.displayName}
          </Card.Text>
          <Card.Text>
            <strong>Created At:</strong> {userinfo.createdAt}
          </Card.Text>
          <Card.Text>
            <strong>Updated At:</strong> {userinfo.updatedAt}
          </Card.Text>
          
            <Button
              variant="outline-danger"
              onClick={(evt) => {
                alert("This Page Will Be PERMENATELY Deleted");
                handleDelete(userinfo.username);
              }}
            >
              Deactivate Account
            </Button>{" "}
         
        </Card.Body>
      </Card>
    </>
  );
};
