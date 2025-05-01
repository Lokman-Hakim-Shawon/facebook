import CardApi from "../../customHooks/CardApi";

const Friends = () => {
    const cardApi='/friendsapi.json'
    return (
        <>
          <CardApi cardApi={cardApi} />  
        </>
    );
};

export default Friends;