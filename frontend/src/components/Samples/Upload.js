import React,{useState} from 'react'
import Sample from './Sample'
import Axios from 'axios'

export default function Upload() {

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [audio, setAudio] = useState("")

    const changeAudio = (input) => {
        const audioFile = input.target.files[0]
        if (audioFile.size < 10000000){ //max 10 megabytes
            const reader = new FileReader();
            reader.onload = e =>{
                setAudio(e.target.result)
                document.querySelector("audio").load() 
            }
            reader.readAsDataURL(input.target.files[0])
        }
        else{
            console.error("File to Ladrge")
             //
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
        const sample = {name, title, audio}
        Axios.post('/api/samples', sample)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Name: </label><input maxLength={19}  onChange={() => setName(document.getElementById("name").value)} id="name" type="text" required></input>
                <label htmlFor="title">Title: </label><input maxLength={20} onChange={() => setTitle(document.getElementById("title").value)} id="title" type="text" required></input>
                <input id="file" accept="audio/*" type="file" onChange={changeAudio} ></input>
                <input type="submit" value="Upload"></input>
            </form>
            <div id ="samplePreview">
                <h2>Preview:</h2>
                <Sample name={name} title={title} audio={audio}/>
            </div>
        </div>
    )
}
