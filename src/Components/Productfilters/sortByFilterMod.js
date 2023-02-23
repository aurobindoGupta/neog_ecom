const sortByFilterMod=(data,sortBy)=>{
    let filteredSortData = [];
    switch (sortBy) {
      case "LowToHigh":
        
          filteredSortData.push(
            ...Object.values(data).sort(
              (a, b) => Number(a.price) - Number(b.price)
            )
          );      
          console.log("LOW_HIGH",filteredSortData);
        break;
      case "HighToLow":     
          filteredSortData.push(
            ...Object.values(data).sort((a, b) => {
              if (Number(a.price) < Number(b.price)) {
                return 1;
              } else {
                return -1;
              }
            })
          );
          console.log("HIGH_LOW",filteredSortData);        
        break;
      default:
        console.log("Wrong Sort/No sort");
        filteredSortData = -1;
    }
    return filteredSortData;
}
export default sortByFilterMod;