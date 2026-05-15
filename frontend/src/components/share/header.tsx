interface IProp{
    title:string,
    descr:string,
    subTitle?:string
}

export const DashboardHearder = ({title,descr,subTitle}:IProp) =>{
    return (
       <div className="py-10 flex flex-col gap-5">
          <div className="flex gap-3">
            <h1 className="font-bold text-3xl text-white dark:text-dark underline">{title}</h1>
            <h1 className="font-bold text-3xl  text-white dark:text-dark">{subTitle}</h1>
          </div>
          <p className=" text-white dark:text-dark text-xl">{descr}</p>
       </div> 
    )
}