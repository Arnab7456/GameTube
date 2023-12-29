import { VideoCard } from "./VideoCard"

const VIDEOS =[
    {

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "Rega is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"14k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"https://yt3.ggpht.com/KLFf2hPLvG_rZwv2ZIByqrPzBwoO43FLP-Co5QN-3s2K0zXkiZz748UvaNjV5p4lu4Hm-PsP=s176-c-k-c0x00ffffff-no-rj-mo",
    title : "Viper is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"14k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "Binks is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"14k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "8Bit_Goldy is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"14k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "mamba is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"14k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "Aman is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"10k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "Scout is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"24k",
    TimeStamp:"Today"
},
{

    ThumBimage:"hero.jpg",
    profileimage :"profile.jpg",
    title : "Mortal is live, Playing Valorent",
    gameTitle : "Rank Push in Valorent",
    views :"4k",
    TimeStamp:"Today"
},
]
export const VideoGrid = () => {
    return <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
            
                ThumBimage={video.ThumBimage}
                profileimage ={video.profileimage}
                title = {video.title}
                gameTitle = {video.gameTitle}
                views = {video.views}
                TimeStamp={video.TimeStamp}
            >
                
            </VideoCard> 
        
         </div>)}
    </div>
}
 
