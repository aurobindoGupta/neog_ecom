const ratingFilterMod = (rating, data) => {
  let filteredRatingData = [];
  if (rating === "4-star") {
    filteredRatingData.push(
      ...Object.values(data).filter((item) => item.rating === 4)
    );
    if (filteredRatingData.length === 0) {
      alert("No Product Matching");
    }
  } else if (rating === "3-star") {
    filteredRatingData.push(
      ...Object.values(data).filter((item) => item.rating === 3)
    );
    if (filteredRatingData.length === 0) {
      alert("No Product Matching");
    }
  } else if (rating === "2-star") {
    filteredRatingData.push(
      ...Object.values(data).filter((item) => item.rating === 2)
    );
    if (filteredRatingData.length === 0) {
      alert("No Product Matching");
    }
  } else if (rating === "1-star") {
    filteredRatingData.push(
      ...Object.values(data).filter((item) => item.rating === 1)
    );
    if (filteredRatingData.length === 0) {
      alert("No Product Matching");
    }
  } else {
    console.log("something WRONG/No rating");
  }

  console.log(filteredRatingData);
  return filteredRatingData;
};
export default ratingFilterMod;
