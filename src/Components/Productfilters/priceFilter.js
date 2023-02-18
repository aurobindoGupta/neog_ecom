const priceFilter=(data, sliderCost)=>{
    let filteredCostDataDummy=[]
    if(data.length>0){
      filteredCostDataDummy = Object.values(data).filter((item)=>{
        return Number(item.price)<=sliderCost
      })
    }
    else{
      console.log('priceFilter.js err');
    }
    return filteredCostDataDummy;
}
export default priceFilter;