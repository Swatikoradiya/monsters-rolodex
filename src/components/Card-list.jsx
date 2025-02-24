import "./Card-list.css";
import {Card} from "./card/Card";

export const CardList = ({monsters}) => {
    return <div className="card-list">
        {monsters.map(monster => (
            <Card key={monster.id} monsters={monster}></Card>
        ))}
    </div>
}