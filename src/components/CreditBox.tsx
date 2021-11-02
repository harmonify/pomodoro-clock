interface CreditBoxProps {
  icons: JSX.Element[];
  link: string;
  linkText: string;
}

const CreditBox : React.FC<CreditBoxProps> = (props) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <span>Made with</span>
      {props.icons.map((icon, index) => (<span key={index}>{icon}</span>) )}
      <span>by</span>
      <a className="underline outline-none hover:text-bold focus:text-bold" href={props.link}>{props.linkText}</a>
    </div>
  );
};

export default CreditBox;
