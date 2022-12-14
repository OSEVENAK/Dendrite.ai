import React from "react";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamServices";

function Discover() {
 const {data, isFetching, error} = useGetTopChartsQuery();
  
  if(isFetching) return <Loader/>
const genreTitle = "Pop"
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-content items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map(({title}, index)=> <option key={index}>{title}</option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
     { data?.map((song, i)=> <SongCard
      key={song.key}
      song={song}
      i={i}
     />)}
      </div>
    </div>
  );
}

export default Discover;
