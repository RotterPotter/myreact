import Avatar from './general_components/Avatar'
import Username from './general_components/Username'
import Tags from './post_components/Tags'
import Image from './post_components/Image'
import LikeButton from './post_components/LikeButton'
import CommentButton from './post_components/CommentButton'
import MoreButton from './post_components/MoreButton'

function Post() {
    return (
        <>
            <div className="post">
                <div className="post__header">
                    <div className="user_info">
                        <Avatar></Avatar>
                        <Username></Username>
                    </div>
                    <Tags></Tags>
                </div>
                <div className="post__image">
                    <Image></Image>
                </div>
                <div className="post__buttons">
                    <LikeButton></LikeButton>
                    <CommentButton></CommentButton>
                    <MoreButton></MoreButton>
                </div>

            </div>
        </>
    );
}

export default Post