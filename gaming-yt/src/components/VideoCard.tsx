export function VideoCard(props:any) {
    return (
      <div className="m-5 p-5">
          <img className="rounded-lg border border-gray-300 m-5" src={props.ThumBimage}></img>
          <div className="grid grid-cols-12">
              <div className="col-span-1">
              <img className={"rounded-full w-15 h-15"} src={props.profileimage}></img>
              </div>
              <div className="col-span-11 pl-5">
                  <div>
                       {/* Rega is live on yt */}
                       {props.title}
                  </div>
                  <div className="col-span-11 text-red-500">
                  {/* Valorent live */}
                  {props.gameTitle}
              </div>
              <div className="col-span-11 text-blue-200">
                  {/* 14k views | Today  */}
                  {props.views} | {props.TimeStamp}
              </div>
              </div>
          </div>
      </div>
      
    )
  }
  
  