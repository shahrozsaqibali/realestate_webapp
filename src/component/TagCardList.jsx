import React from 'react'
import Card from "./card"
import {Link} from "react-router-dom"
import PreLoader from "../component/PreLoader"

function TagCardList() {

  

    const [data,setData] = React.useState(null)
    const [currentpage, setCurrentPage] = React.useState(1);



    React.useEffect(function(){
  
        async function collectData(){
            const Response = await fetch(`http://localhost:1337/api/projects?pagination[page]=${currentpage}&pagination[pageSize]=12&fields[0]=project_name&fields[1]=occupancy&filters[tag][name][$contains]=Assignments&populate=locations,developers,tag,project_image`)
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

    function TagCard(){

        if(data == null){
          return(
          
          <PreLoader />
        
        )
        }

        return(
            <div>
              <div className='tadcards-root'>
                      {data.data && data.data.map(assignment => {

                        return (

                          <Link to={`/projectinformation/${assignment.attributes.id}`}> 

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
              <div className='tagcard-page'>

                 {getPages()} 

              </div>
            </div>
          )

    }
    
  return (
      <TagCard />
  )
}

export default TagCardList