import { useNavSearchContext } from "../../context/navSearchProvider";

const searchBarFilterMod = (data, input) => {
  console.log(data, input);
  let inputUpperCase = input.toUpperCase();
  let searchBarDummy = [];
  searchBarDummy = Object.values(data).filter((item) => {
    let categoryName = item.categoryName;
    let title = item.title;
    let brand = item.brand ? item.brand : "";
    return (
      inputUpperCase === categoryName.toUpperCase() ||
      inputUpperCase === title.toUpperCase() ||
      inputUpperCase === brand.toUpperCase()
    );
  });
  console.log("yoyoy", searchBarDummy === undefined);
  if (searchBarDummy.length === 0 && input !== "") {
    alert("empty");
    return -1;
  } else {
    return searchBarDummy;
  }
};
export default searchBarFilterMod;
