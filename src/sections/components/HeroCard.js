import React from 'react';

function HeroCard(props) {
    const { variant = "Front" } = props;

    return (
        <div className={`w-96 aspect-4/2 flex items-center justify-center border border-gray-300 rounded-lg ${props.className}`}>
            { variant === "Front" ? (
                <img src="/img/others/marsha.png" alt="Marsha" className="max-w-full max-h-full" />
            ) : (
<img src="/img/others/marsha.png" alt="Marsha" className="max-w-full max-h-full" />
            )}
        </div>
    );
}

export default HeroCard;
