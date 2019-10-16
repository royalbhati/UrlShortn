import React from "react";
import { Input } from "../Styles/content";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useStateValue } from "../store";

const GET_URL = gql`
  {
    urls {
      shortName
    }
  }
`;

const CREATE_SHORT = gql`
  mutation App($originalUrl: String!, $shortName: String!) {
    createShort(originalUrl: $originalUrl, shortName: $shortName) {
      data {
        shortName
      }
      msg
    }
  }
`;

export default function Content() {
  const [orig, setOrig] = React.useState("");
  const [name, setName] = React.useState("");
  const [final, setResult] = React.useState({});
  const [error, setError] = React.useState("");

  const [createShort, { data }] = useMutation(CREATE_SHORT);
  const { loading, _, data: result, refetch } = useQuery(GET_URL);
  const [{ nav }, dispatch] = useStateValue();

  const handleUrl = e => {
    setOrig(e.target.value);
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const submitForm = e => {
    e.preventDefault();
    const createUrl = createShort({
      variables: { originalUrl: orig, shortName: name }
    });
    createUrl.then(resp => {
      if (resp.data.createShort.msg === "Success") {
        setResult({
          a: orig,
          b: name
        });
        dispatch({
          type: "change_nav",
          nav: "result"
        });
      } else {
        setError(resp.data.createShort.msg);
      }
    });
  };
  if (loading) return "loading.......";

  return (
    <div>
      {nav === "content" ? (
        <form onSubmit={submitForm}>
          <div>
            <div>URL</div>
            <Input>
              <input
                name="url"
                value={orig}
                onChange={handleUrl}
                type="text"
                required
                placeholder="http://www.google.com"
              ></input>
            </Input>
          </div>

          <div>
            <div>Short Name</div>
            <Input>
              <input
                name="shortname"
                value={name}
                onChange={handleName}
                type="text"
                required
                placeholder="super catchy name"
              ></input>
            </Input>
            <span style={{ fontSize: "20px", color: "pink" }}>{error} </span>
          </div>

          <button type="submit">Let's Prune</button>
        </form>
      ) : (
        <div>
          <h2>Your cute.st Url is </h2>
          <a
            href={`http://www.cute.st/${final.b}`}
          >{`http://www.cute.st/${final.b}`}</a>
        </div>
      )}
    </div>
  );
}
