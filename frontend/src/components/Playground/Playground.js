import React from 'react'
// import { create } from 'domain';
import styled from 'styled-components'
// import Sample from '../Samples/Sample';


export default function Playground() {

    const createTable = (x,y) => {
        
        let rows = Array(x).fill(0);
        let colums = Array(y).fill(0);
        
        let i = 0;
        
        let columList = colums.map(() => {
            i++
            return <th key={i}></th>
        })
        
        let tableList = rows.map(() => {
            i++
            return <tr key={i}>{columList}</tr>
        })

        return tableList
    }
    createTable()
    
    const btnClick = () =>{
        if (audioList.length === 1){
            audioList.filter(e => true)
        }
        else{
            audioList.push(audio)
        }
    }


    // let beat = 0
    /*setInterval(() =>{
        beat === 8 ? beat = 1 : beat++
        
        if (beat === 1){
            audioList.map(aud => {
                aud.play();
            })
        }
        else if (beat === 8){
            audioList.map(aud => {
                aud.load();
            })            
        }

        
    }, 1000)*/

    let MusicButton = styled.div`
    display:inline-block;
    background:#747474;
    width:40px;
    height:40px;
    `
    const audio = new Audio(require('../../audio/Bass.mp3'))
    let audioList = []
    return (
        <div>
            <MusicButton className="musicButton" onClick={btnClick}></MusicButton>
            {/* <table className="musicTable">
                <tbody>
                    {createTable(20,20)}                 
                </tbody>
            </table>  
            <Sample />         */}
        </div>
    )
}
