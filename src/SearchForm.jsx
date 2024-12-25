import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchTerm}  = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = e.target.elements.search.value
    if(!searchData) return;
    setSearchTerm(searchData);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          id="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;


