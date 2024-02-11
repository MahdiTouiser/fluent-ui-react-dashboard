import CardComponent from '@/components/card/CardComponent';

interface CardGridProps {
  currentRows: { id: number; title: string }[];
  cardsPerRow: number;
}

const CardGrid: React.FC<CardGridProps> = ({ currentRows, cardsPerRow }) => {
  return (
    <div className="ms-Grid" dir="ltr">
      {currentRows.map((_, rowIndex) => (
        <div className="ms-Grid-row" key={rowIndex}>
          {currentRows.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map((card) => (
            <div key={card.id} className="ms-Grid-col ms-sm3" style={{ margin: '15px 0' }}>
              <CardComponent title={card.title} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
