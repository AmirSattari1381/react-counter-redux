import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Alert, Badge } from "react-bootstrap";

import { increment, decrement, sign_in } from "../actions/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter); //ما ن این{} و ن return گزاشتیم باز هم میفهمه ک باید return کنه
  const login = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <Card bg="secondary" className="mx-auto w-50">
      <Card.Body className="mx-auto">
        <Alert variant="info">
          شمارش :{" "}
          <Badge pill variant="success">
            {counter}
          </Badge>
        </Alert>
        <Button
          variant="danger"
          className="fa fa-plus m-2"
          onClick={() => dispatch(increment(20))}
        />
        <Button
          variant="danger"
          className="fa fa-minus m-2"
          onClick={() => dispatch(decrement(10))}
        />
        <br />
        <button variant="primary" onClick={() => dispatch(sign_in())}>
          ورود به سایت
        </button>
      </Card.Body>
      {login ? (
        <Card.Footer className="text-center">
          <p style={{ color: "white" }}>شما وارد شده اید</p>
        </Card.Footer>
      ) : null}
    </Card>
  );
};

export default Counter;
