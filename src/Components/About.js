import React from 'react'

export default function About(props) {
  return (
    <div className="container">
        <h2 className={`mb-3 text-${props.mode==='light'?'dark':'light'}`} > What is SherryTextUtils?</h2>
        <div className="card">
            <div className="card-body" style={{backgroundColor: props.mode==='light'?'white':'rgb(214, 196, 196)'}}>
                <p>Step into the world of SherryTextUtils, where we turn the ordinary into the extraordinary with a touch of text magic. Our mission is simple: to make your words shine and your reading experience exceptional. Whether you're in the mood for a bit of uppercase grandeur or craving the understated charm of lowercase elegance, SherryTextUtils is your go-to destination. But we don't stop there—immerse yourself in a tailored reading environment with our carefully curated light and dark modes. It's not just about changing text; it's about transforming your entire digital experience. SherryTextUtils is more than a tool; it's a partner in your creative journey, committed to delivering the ultimate user experience. Join us as we redefine the way you interact with text, one captivating word at a time.</p>
            </div>
        </div>
    </div>
  )
}
