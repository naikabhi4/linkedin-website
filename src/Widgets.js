import { FiberManualRecord, InfoOutlined } from '@material-ui/icons'
import React from 'react'
import "./Widgets.css"

function Widgets() {
    const newsArticle =(heading,subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                 <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoOutlined/>
            </div>
            {newsArticle("Daily recoveries outnumber new cases for 9th consecutive day in India","Top news - 3967 readers")}
            {newsArticle("New superstring theory says black holes may be portals to other universes","Top news - 3580 readers")}
            {newsArticle("Clubhouse for Android (beta) finally available globally on Google Play Store","Top news - 2927 readers")}
            {newsArticle("React new version release","Top news - 2824 readers")}
            {newsArticle("Atletico Madrid clinch La Liga title thanks to Suarez winner","Top news - 2768 readers")}
            {newsArticle("Elon Musk tweets he supports crypto in battle against fiat currencies","Top news - 2320 readers")}
        </div>
    )
}

export default Widgets
