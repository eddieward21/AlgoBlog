import React from 'react'

type Props = {
  categories: Category[]
}

const Categories = ({categories}: Props) => {
  return (

<div className="mt-5 w-10/12 h-32 rounded-md border-x border-gray-500">

    <div className = "h-full grid grid-flow-col auto-cols-[60%] overflow-x-auto gap-2.5 overscroll-contain snap-mandatory">

    {categories.map((category) => 
    <div className='bg-black snap-start w-full h-full border border-gray-500'>
      <h1 className = "text-white">{category.title}</h1>
    </div>       
          )}
     

    </div>
</div>


    )
}

export default Categories