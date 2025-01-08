import React ,{useState} from 'react'

const list=[{name:'rahul'},{name:'seenam'}]
 const SearchableList=()=>{
const [searchList, setSearchlist] = useState(list)
const onSearch=e=>{
 const filteredList= list?.filter(item=>item.name.includes(e?.target?.value))
 console.log("hello search",filteredList);
 
 setSearchlist(filteredList)
}
  return (
    <div>
        <div className='search-input'>
        <input onChange={onSearch}/>
        </div>
        <div className='search-list'>
            <ul>
          {searchList?.map((item,index)=><li key={String(index)}>{item?.name||'No data'}</li>)}
          </ul>
        </div>
    </div>
  )
}
export default SearchableList