import React from "react"
import Card from "./card"
import {Link} from "react-router-dom"
import style from "../assets/css/tagcardlist.module.css"
import stylePage from "../assets/css/searchCardbyList.module.css"
import PreLoader from "./PreLoader"



export default function SearchCardList(props){

     

    const [data,setData] = React.useState(null)
    const [currentpage, setCurrentPage] = React.useState(1)

    React.useEffect(function(){ 
        async function collectData(){
            const Response = await fetch(props.searchQuery)
            const data = await Response.json();
            setData(data)          
        }
        collectData()
    },[currentpage])

    function getPages(){

        var TotalPage = data.meta.pagination.pageCount
    
        if(TotalPage){
            const pageCountElement = []
            for (let i = 1; i <= TotalPage; i++){
              pageCountElement.push(<button onClick={onChangePage} className={currentpage == i? "tagcard-page-item-selected" : "tagcard-page-item" } value={i}>{i}</button>)
            }
            return pageCountElement
         }      
      }

      function onChangePage(event){
        let nextpage = event.target.value

        if(currentpage != nextpage){

            setData(null)
            setCurrentPage(nextpage)
           
        }

        console.log(currentpage)
    }

    function DisplayResult(){

        if(data == null){
          return(
              <PreLoader />
          )
        }

        return(
            <div className={stylePage.searchresult}>
              <div className={style.tadcardsroot}>
                      {data.data && data.data.map(assignment => {

                        console.log(assignment)
                        return (
                         
                          <Link to={`/projectinformation/${assignment.id}`}> 

                          <Card 
                              key={assignment.id}
                              state = {assignment.attributes.tag.data.attributes.name}          
                              imageUrl = {"http://localhost:1337" + assignment.attributes.project_image.data.attributes.formats.small.url}      
                              title = {assignment.attributes.project_name}
                              location = {assignment.attributes.locations.data.map(city => {
                                  return city.attributes.location
                              })}
                              developer = {assignment.attributes.developers.data.map(developName => {
                                return developName.attributes.developer_name
                              })}                  
                              occupancy = {assignment.attributes.occupancy}
            
                        />

                      </Link>
                        )
                  })}
              </div>
              <div className={style.tagcardpage}>

                 {getPages()} 

              </div>
            </div>
        )

    }

    return (

      <div className={stylePage.pageroot}>
          <DisplayResult />
      </div>

    )

}