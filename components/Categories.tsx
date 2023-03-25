import React from 'react'

type Props = {
  categories: Category[]
}

const Categories = ({categories}: Props) => {
  return (
  <div className='pl-3 col-span-4 pt-5 w-full'> 
      <h1 className = "font-bold text-white text-xl ml-4 ">Categories</h1>

<div className="w-full">


    {categories.map((category) => 
 <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border-b border-gray-500">
 <div className="py-4">
   <div className="font-bold text-[whitesmoke] text-sm mb-2">{category.title}</div>
   <p className="text-gray-300 text-xs">
     {category.description}
   </p>
 </div>
 <div className="py-4">
   <a href = {`categories/${category.title}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 cursor-pointer">View More</a>
 </div>
</div>
          )}
     

</div>

</div>
  )

}

export default Categories