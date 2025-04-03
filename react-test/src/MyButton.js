export default function MyButton() {
  function handleClick() {
    alert ('you clicked me!');
  }  
  
  return (
      <button onClick={handleClick}
      >I'm My button component
      </button>
    )
  }