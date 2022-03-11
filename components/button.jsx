
export default function Button(props) {
  
  return (
    <>
      <div className=" block text-center py-3">
        <button
          type="button"
          className="inline-flex items-center 
            px-10 py-1 text-base font-medium rounded-md 
            shadow-sm text-white bg-fuchsia-900 hover:bg-fuchsia-700"
          onClick={props.handleClick}
        >
          {props.name}
        </button>
      </div>
    </>
  );
}
