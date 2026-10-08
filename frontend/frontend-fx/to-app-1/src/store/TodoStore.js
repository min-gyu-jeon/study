import {create} from "zustand";

export const useTodoStore = create((set,get) =>({

    todos:[
        {id:'1',text:'할 일1',done:false},
        {id:'2',text:'할 일1',done:false},
        {id:'3',text:'할 일1',done:false},
        {id:'4',text:'할 일1',done:false},
        {id:'5',text:'할 일1',done:false},
        {id:'6',text:'할 일1',done:false},
        {id:'7',text:'할 일1',done:false},
        {id:'8',text:'할 일1',done:false},
        {id:'9',text:'할 일1',done:false},
        {id:'10',text:'할 일1',done:false}
    ]

}))