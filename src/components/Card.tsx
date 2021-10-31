interface CardProps {
  children: React.ReactNode;
}

interface CardHeaderProps {
  content: string;
}

const Card : React.FC<CardProps> = (children) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const CardHeader : React.FC<CardHeaderProps> = (content) => {
  return (
    <div className="card-header">
      {content}
    </div>
  );
};

const CardBody : React.FC = (children) => {
  return (
    <div className="card-body">
      {children}
    </div>
  );
};

export default Card;
export { CardHeader, CardBody };
