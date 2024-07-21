export default function reducer(state, action) {
    console.log(state, action);
    // console.log('product---------------->', typeof action.id)
    // console.log('state ----------------->',state)
    
    switch (action.type) {
      case "increase":
        return [...state,action.product]
        
      case "decrease":
        console.log('decrease state',state)
        for(let x in state){
          if(state[x].id===action.product.id){
              if (x >= 0) {
              state.splice(x,1);
              console.log('after decrease----------->',state);
              return [...state]
          }
      }
  }
   
      default:
        return "Unrecognized command";
    }
  }