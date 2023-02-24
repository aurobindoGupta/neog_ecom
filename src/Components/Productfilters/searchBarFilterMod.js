
const searchBarFilterMod = (data, input) => {
  console.log(data, input);
  let inputUpperCase = input.toUpperCase();
  let searchBarDummy = [];
  searchBarDummy = Object.values(data).filter((item) => {
    let categoryName = item.categoryName;
    let title = item.title;
    let brand = item.brand ? item.brand : "";
    return (
      categoryName.toUpperCase().includes(inputUpperCase) ||
      title.toUpperCase().includes(inputUpperCase) ||
      brand.toUpperCase().includes(inputUpperCase)
    );
  });
  console.log("yoyoy", searchBarDummy === undefined);
  if (searchBarDummy.length === 0 && input !== "") {
    //! add toast
    alert("No Match");
    return -1;
  } else {
    return searchBarDummy;
  }
};
export default searchBarFilterMod;
