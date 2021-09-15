import React from "react";


function FbPost({PostImg,userimg,username,caption,statusText,likeBtn,comBtn}){
    const divStyle = {width:'60%',margin:'5% auto',backgroundColor:'#DCDCDC',padding:'0 5%',boxSizing:'border-box'}

return(
    <div>
        
        {
            PostImg  ? 
            (
                <div style ={divStyle}>
                    <div style={{display:'flex'}}>
                    <label>
                        <img src={userimg} style={{height:'100px',display:'block'}} /> 
                    </label>
                    <h2>{username}</h2>
                    </div>
                    <p>{caption}</p>
                    <img src = {PostImg} alt='FbPostImg' />
                    <div>
                        <hr style={{color:'#F0F0F0'}}/>
                        
                    <button>{likeBtn}</button>
                    <button>{comBtn}</button>
                    </div>
                </div>
            ):
            (
                <div style = {divStyle}> 
                <div style={{display:'flex'}}>
                    <label>
                        <img src={userimg} style={{height:'100px'}} /> 
                    </label>
                    <h2>{username}</h2>
                    <br/>    
                    </div>
                <p>{statusText}</p>
                <div>
                <hr style={{color:'F0F0F0'}}/>
                        
                    <button>{likeBtn}</button>
                    <button>{comBtn}</button>
                    </div>
            </div>

            )
        }
    </div>
)


}

// function FbPost(){
//     return(
//         <div>
//             <h1>Google</h1>
//         </div>
//     )
// }
export default FbPost;