const categoryFilterMod=( checkFilter,data)=>{
    let filteredProductDataDummy=[];
    Object.keys(checkFilter).map((itm) => {
        if (checkFilter[itm].checked === true) {
        //   checkFilterDummy.push(checkFilter[itm]);
          filteredProductDataDummy.push(
            ...Object.values(data).filter(
              (item) => item.categoryName === checkFilter[itm].categoryName
            )
          );
        }
    });
    console.log("CAtegoryFilter",filteredProductDataDummy);
    return filteredProductDataDummy

}
export default categoryFilterMod;