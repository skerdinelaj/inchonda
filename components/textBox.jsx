export default function TextBox(props) {
  
    return (
      <>
      <form>
        <div className="mb-1 flex justify-center">
          <input
            type="text"
            id="text"
            className="w-64 shadow-md text-center block p-2.5 text-sm rounded-lg
            bg-white border border-gray-300 text-gray-900 
            focus:ring-fuchsia-900 focus:border-fuchsia-900"
            placeholder={props.text}
            required
          />
        </div>
        </form>
      </>
    );
  }