import { useEffect, useState } from "react";
import styled from "styled-components";

const Rows = () => {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/Ved-X/assignment/orders"
    );
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Component>
      <Top>
        <p>
          <b>All Orders {users.length}</b>
        </p>
      </Top>
      <Search>
        <input
          type="text"
          placeholder="search.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Search>
      <Title>
        <div>ORDER ID</div>
        <div>CUSTOMER</div>
        <div>ADDRESS</div>
        <div>PRODUCT</div>
        <div>Date Order</div>
        <div>STATUS</div>
      </Title>
      {users
        .filter((val) => {
          if (searchTerm == "") return val;
          else if (
            val.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.product_title
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            val.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.product_description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((curr) => {
          return (
            <>
              <Vertical>
                <div>#{curr.order_id}</div>
                <div>{curr.customer}</div>
                <div>
                  {curr.country}
                  <br />
                  {curr.address}
                </div>
                <div>
                  {curr.product_title}
                  <br />
                  {curr.product_description}
                </div>
                <div>{curr.date}</div>

                <div
                  className={
                    curr.status == "Delivered"
                      ? "class1"
                      : curr.status == "Completed"
                      ? "class2"
                      : "class3"
                  }
                >
                  {curr.status}
                </div>
              </Vertical>
            </>
          );
        })}
    </Component>
  );
};

export default Rows;

const Vertical = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  font-family: montserrat;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  color: #434343;
  font-weight: 800;
  border-bottom: 1px solid #d9d9d9;
  div {
    padding: 20px 0px 20px 0px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
  :hover {
    background-color: #fafafa;
  }
  .class1 {
    background-color: #f0f8ff;
    color: #8dbbe6;
    border-radius: 10px;
    height: 10px;
  }
  .class2 {
    background-color: #f1fdf7;
    color: #1ede91;
    border-radius: 10px;
    height: 10px;
  }
  .class3 {
    background-color: #fff7ea;
    color: #ffd07e;
    border-radius: 10px;
    height: 10px;
  }
`;

const Title = styled.div`
  display: grid;
  width: 95%;
  background-color: #f2f8f8;
  border-radius: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  font-family: montserrat;
  font-size: 14px;
  color: #111;
  font-weight: 900;
  div {
    padding: 20px 0px 20px 0px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;

const Component = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  p {
    font-family: montserrat;
    color: #2bc9c8;
    font-weight: 900;
    font-size: 18px;
    text-align: left;
    width: 8%;
    padding: 20px;
    border-bottom: 5px solid #2bc9c8;
  }
`;
const Top = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  align-items: left;
  justify-content: center;
  width: 95%;
`;

const Search = styled.div`
  width: 95%;
  text-align: left;
  padding: 20px;
  input {
    width: 30%;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    box-shadow: -1px 2px 10px 0px rgba(87, 87, 87, 0.75);
    -webkit-box-shadow: -1px 2px 10px 0px rgba(87, 87, 87, 0.75);
    -moz-box-shadow: -1px 2px 10px 0px rgba(87, 87, 87, 0.75);
  }
`;
