 
 
 const createProject = (project)=>{
    return ( (dispatch, getState, {getFirebase, getFirestore})=>{
        // make async
        const firestore = getFirestore()
        firestore.collection('projects').add (
            {
                ...project,
                authorFirstName: 'Vitali',
                authorLastName: 'Zinkevich',
                authorId: 1234,
                createdAt: new Date()

            }
        ).then (()=>{
            dispatch({type: 'CREATE_PROJECT', project: project})
        }).catch ((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    })
}

export default createProject