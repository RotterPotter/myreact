import Avatar from './general_components/Avatar'
import Username from './general_components/Username'

function Post() {
    return (
        <>
            <div className="post">
                <div className="post__header">
                    <div className="user_info">
                        <Avatar></Avatar>
                        <Username></Username>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post