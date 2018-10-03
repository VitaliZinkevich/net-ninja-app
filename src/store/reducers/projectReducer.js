
const initState={
    projects: [
        {id: 1, title: 'first', content: 'lorem'},
        {id: 2, title: 'second', content: 'lorem'},
        {id: 3, title: 'third', content: 'lorem'},
    ]

}

const projectReducer = (state=initState, action)=>{
    
    switch (action.type) {

        case 'CREATE_PROJECT':
          console.log('create', action);
          return state
          
        case 'CREATE_PROJECT_ERROR':
          console.log('create', action.err);
          return state

        default: 
           return state  
      }
    
    
}

export default projectReducer