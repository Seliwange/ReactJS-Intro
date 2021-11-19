import './post.css';

export default function Post(props){
    const name = props.author.name;
    const nickname = props.author.nickname;
    const photo = props.author.photo;
    const content = props.content;
    const image = props.image;
    const date = props.date;

    return (
        <div className="post">
            <div className="post__wrapper">
                <img className="post__avatar" src={photo} alt={name} />
                <div className="post__inner">
                    <div className="post__header">
                        <h1 className="post__author-name">{name}</h1>
                        <p className="post__author-nickname">{nickname}</p>
                        <span className="post__dot">&#183;</span>
                        <p className="post__date">{date}</p>
                    </div>
                    <p className="post__content">{content}</p>
                    <img className="post__img" src={image} alt="ray" />
                </div>
            </div>
        </div>
    );
}