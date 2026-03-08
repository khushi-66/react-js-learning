import flower from './flower.jpg';


//function Card(props)
//setting default value of btntext
//function Card({username,profession,btntext="visit Me",exp})

function Card({username,profession,btntext,exp})
{
  console.log("props : ",username ,profession ,btntext,exp);
    return (
        <>
              <div className='text-black text-center bg-sky-300 rounded-xl p-4'>{btntext   || "Visit Me "}</div> 
                                                                                             {/* setting default value of btntext */}
               <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src={flower} />
          </div>
          <div className="flex items-center md:items-start">
            <span className="text-2xl font-medium">{username} </span>
            <span className="font-medium text-sky-500  ms-2">The {profession}</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
              <span   className='ms-2'>     Experience   </span>
              <span>:</span>
              <span>{exp} Years</span>
            </span>
          </div>
        </div>
        </>
    );
}

export default Card;