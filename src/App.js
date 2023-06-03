import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Card from "./Card";

function App() {
  const [gifUrl, setGifUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("trending");
  const [value, setValue] = useState("");

  const apiUrl = `https://g.tenor.com/v1/search?q=${search}&key=LIVDSRZULELA&limit=50`;

  async function getData() {
    setLoading(true);
    const { data } = await axios.get(apiUrl);
    setGifUrl(data.results);
    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [search]);

  function changeHandler(e) {
    setValue(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setSearch(value);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 md:w-[60%]  mx-auto"
      >
        <h1 className="text-center text-white text-xl mt-4">Gifs Finder</h1>
        <input
          className="rounded-lg p-3"
          onChange={changeHandler}
          placeholder="Search Gifs"
        />
        <div className="flex flex-wrap w-full md:h-[300px] h-[70vh] justify-center gap-2 border border-white overflow-y-auto">
          {gifUrl.map((item, index) => {
            return loading === true ? (
              <Loading key={index} />
            ) : (
              <Card src={item.media[0].nanogif.url} key={index} />
            );
          })}
        </div>
        <button className="bg-slate-500 text-white rounded-lg ">Get Gif</button>
      </form>
    </div>
  );
}

export default App;
