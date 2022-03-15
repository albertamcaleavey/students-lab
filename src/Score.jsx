const Score = (props) => {
  return ( 
    <div>
      <p>Date: {props.score.date} Score: {props.score.score}</p>
    </div>
   );
}
 
export default Score;