import React from 'react'

export default function Upload() {

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label><input id="title" type="text" required></input>
                <input accept="audio/*" type="file" required></input>
                <input type="submit" value="Upload"></input>
            </form>
        </div>
    )
}
