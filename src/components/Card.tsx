import { ReactElement } from "react";

interface CardInterface {
  ({children, title} : {children: ReactElement, title: any | any[]}) : any;
}

const Card : CardInterface = ({children, title}) => {
  return (
    <div className="card bg-opacity-10 bg-white rounded-xl px-6 py-4">
      <div className="card-header flex justify-center items-center text-2xl font-semibold tracking-wider space-x-1">
        {title.map((t : any, i : number) => <span key={i}>{t}</span>)}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
