import { ChangeEvent, useState } from "react";

export default function Feedback() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);



    return (
        <div>


            {submitted ||
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true);

                }}>

                    <label htmlFor="name">Enter your name: </label>

                    <input
                        type="text"
                        name=""
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                    <label htmlFor="comment">Enter your comment here:</label>

                    <textarea
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)} />

                    <p>{comment}</p>

                    <button type="submit">Submit</button>




                </form>}

            <div>

                {submitted && <div><p>Thank you, {name}. Your comment was submitted to the oligarchy for approval.</p>
                    <p>Your comment: {comment}</p>



                    <button onClick={e => {
                        setSubmitted(false)
                        setName("")
                        setComment("")
                        
                         }}>Leave another comment</button>
                </div>}
            </div>

        </div>)


}