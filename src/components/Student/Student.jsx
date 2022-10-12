import Score from "../Score/Score";

const Student = ({student}) => {
  return ( 
    <>
    <h2>{student.name}</h2>
    <h3>{student.bio}</h3>
    <h2>Scores</h2>
    {student.scores.map(score =>
      <Score key={student.scores} score={score}/>
      )}
    </>
  );
}

export default Student ;