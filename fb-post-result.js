import React from 'react';
import FbPost from './fb-post';


const FbResult = [
    {
     id : "Haider",
     userimg :"https://www.swl.in/img/testimonials/testimonials-1.png",
     username: "Haider",
     caption : "Hi I will teach you React JS",
     PostImg : "https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png" ,
     likeBtn : 'Like', 
     comBtn : 'Comment'
    
    },
    { 
        id : "Alee",
        userimg :"https://www.swl.in/img/testimonials/testimonials-1.png",
        username: 'Alee',
        statusText : 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
        likeBtn : 'Like', 
        comBtn : 'Comment'
        
       
       }
];

function FbPostResult(){
    return(
        <div>
            <FbPost/>
            {
                FbResult.map((res,index)=>{
                    console.log(res.id,index)
                    return <FbPost
                       key = {res.id + index.toString()} 
                       userimg = {res.userimg}
                       username = {res.username}
                       caption = {res.caption}
                       PostImg = {res.PostImg }
                       statusText ={ res.statusText}
                       likeBtn = {res.likeBtn}
                       comBtn = {res.comBtn}
                       />
                       
                       
                    })
                }
                

            
        </div>
    )



}
export default FbPostResult;

// function FbPostResult(){
//     return(
        
//             <FbPost/>
        
//     )
// }