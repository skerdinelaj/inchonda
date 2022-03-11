export default function TextBox(props) {
  
    return (
      <>
        <div class="mb-6 flex justify-center">
          <input
            type="search"
            id="text"
            class="bg-gray-50 border border-gray-300 shadow-md text-center w-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={props.text}
            required
          />
        </div>
      </>
    );
  }