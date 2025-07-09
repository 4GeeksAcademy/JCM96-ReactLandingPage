import React from "react";
const Card = ({ imageUrl, title, text, buttonText, buttonLink }) => {
    const cardInlineStyles = {
        width: '18rem',
    };

    return (
        <div className="card" style={cardInlineStyles}>
     
            <img src={imageUrl} alt={title} className="card-img-top" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
            </div>
        </div>
    );
};

export default Card;