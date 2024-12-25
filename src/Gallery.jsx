import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url =
  `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);

      return result.data;
    },
  });
  if (response.isLoading)
    return ( 
      <div className="image-container">
        <h4>Loading...</h4>
      </div>
    );
  if (response.isError)
    return (
      <div className="image-container">
        <h4>There was an error...</h4>
      </div>
    );

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <div className="image-container">
        <h4>No result found... </h4>
      </div>
    );
  }
  return (
    <section className="image-container">
      {results.map((image) => {
        const { id, alt_description } = image;
        return (
          <img
            className="img"
            key={id}
            src={image?.urls?.regular}
            alt={alt_description}
          />
        );
      })}
    </section>
  );
};
export default Gallery;
