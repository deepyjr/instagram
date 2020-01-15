import React  from 'react'
import CommentItem from "./CommentItem"
import ImageContent from "./Capture.JPG"
import Like from "./Like.png"
import Partager from "./Partager.png"
import Comment from "./Comment.png"
import LikeImg from "./Img-Like.png"
import "./Post.css"



const Post = () => {
    
    return (
        <div className="Post">
            <div className="Post-Header">
                <div >
                <img className="Post-Image-Header" src="https://www.troiscouleurs.fr/wp-content/uploads/2019/06/Paint-anna.jpg" alt="Chris" />
                </div>
                <div className="Post-Name-Location-Container">
                    <div className="Post-Name"><span>annapolina_</span></div>
                    <div className="Post-Location"><span>Paris, France</span></div>
                
                </div>
                
            </div>
            <div className="Content">
                <img className="Post-IMG" src={ImageContent} alt="Grapefruit slice atop a pile of other slices"></img>
            </div>
            <div className="Bottom">
                <div className="Bottom-Content-Action">
                    <img className="like-IMG" src={Like} alt="Grapefruit slice atop a pile of other slices"></img>
                    <img className="comment-IMG" src={Comment} alt="Grapefruit slice atop a pile of other slices"></img>
                    <img className="share-IMG" src={Partager} alt="Grapefruit slice atop a pile of other slices"></img>
                </div>
                <div className="Like-Content">
                    <img className="liked-IMG" src={LikeImg} alt="Grapefruit slice atop a pile of other slices"></img>
                    <p>Aimé par <strong>nikita_bellucci</strong> et 1349 likes</p>
                </div>
                <div className="Legend">
                    <div className="Legend-Name"><p><strong>annapolina_</strong></p></div>
                    <div className="Content-Legend"><p> Champagne is always a good idea... Oh hello monday. May the force be with you.</p></div>
                </div>
                <div className="Comment">
                    <div className="Comment-More"><span>Afficher les 56 commentaires pck j'ai pâs vérouillé mon pc (tkt j'ai changé que ça)</span></div>
                    <CommentItem style={{marginTop:"150px"}}></CommentItem>
                    <CommentItem></CommentItem> 
                    <CommentItem></CommentItem>
                </div>
            </div>
        </div>
        
    );
}

export default Post;