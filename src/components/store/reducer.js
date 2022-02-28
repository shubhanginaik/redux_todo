import * as actionTypes from './actions';

const initialNotes ={
    notes:[
        {
          id: 1,
          title: "Create clean app",
          task: "npx create-react-app",
          done: true,
        },
        {
          id: 2,
          title: "Install Redux",
          task: "npm install redux",
          done: false,
        },
        {
          id: 3,
          title: "Install Complementary Packages​",
          task: "npm install react-redux and npm install --save-dev redux-devtools",
          done: false,
        },
        {
            id: 4,
            title: "Install react-redux package​",
            task: "npm install react-redux and npm install --save-dev redux-devtools",
            done: false,
          },
      ],
}
     
const reducer= (state=initialNotes, action) =>{
    switch(action.type){
        case actionTypes.ADD_TODO:
            return {
                notes:[
                    ...state.notes,
                    {
                        id:new Date().valueOf(),
                        ...action.payload,
                        done:false,
                    },
                ],
            };
            case actionTypes.REMOVE_TODO:
                const updatearray = state.notes.filter((item) => item.id !== action.id);
             return{
                 ...state,
                 notes:updatearray,
             };
            case actionTypes.DONE_NOTE:
                 const doneToggle = state.notes.map((item) =>{
                     return item.id === action.id
                     ? {...item,done: !item.done}
                     : {...item};
                 });
                 return {
                     ...state,
                     notes: doneToggle,
                 };
            default:
               return state;
    }
    
}

export default reducer;