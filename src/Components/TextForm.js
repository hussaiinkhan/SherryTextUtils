import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText] = useState('')

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
    }
    
    var digits= (text.match(/\d/g) || []).length
    var spaces= (text.match(/\s/g) || []).length
  return (
    <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="Text" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Capitalize the text</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Loweralize the text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} Words {text.length} Characters and {digits} Numbers and {spaces} white spaces.</p>
            <p>{0.005 * text.split(' ').length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

            
    </>
    
    
  )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}