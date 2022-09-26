/////working with multiple state variables
  // will be using  line 6 state


function handleFilterChange(event){
    setFilterBy(event.target.value);
  }
     return(
      <select name="filter" onChange={handleFilterChange}>
         <option value="All">All</option>
         <option value="American">American</option>
         <option value="Sichuan">Sichuan</option>
         <option value="Thai">Thai</option>
         <option value="Mexican">Mexican</option>
      </select>
     );
    
     /* const foodsToDisplay= foods.filter((food)=>{
      if(filterBy ==='All'){
        return true
      }else{
        return food.cuisine ===filterBy
      }
  
      });
      */
  
     
  