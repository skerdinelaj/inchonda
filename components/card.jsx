import Button from "./button";

export default function Card(props) {
  return (
    <div className="bg-white px-2 py-2 border m-6 border-gray-200 rounded-md shadow-md sm:px-6">
      <div className="flex flex-col flex-wrap sm:flex-nowrap">
        <div className="bg-fuchsia-900 text-white font-bold text-xs py-4 px-3 w-fit rounded-full absolute top-20 right-3">NEU</div>
        <div className="my-2 col">
          <h3 className="text-lg leading-6 font-bold text-gray-900">
            Willkommenspaket im Dezember
          </h3>
        </div>
        <div className=" pl-2">
          <div>
            <label>- Hausreinigung</label>
          </div>
          <hr />
          <div className="mb-2">
            <label>Im Wert von € 2995.90</label>
          </div>
          <div className=" font-medium text-gray-900">
            <label>Bei Pflegegrad 2 ubernimmt die Kasse 100% der Kosten</label>
          </div>
          <Button name="Unverbindlich Anfragen" handleClick={props.handleClick}></Button>
          <div className="text-fuchsia-700 text-center">
              <label>Prufen ob Pflegezuchuss auf mich zutrifft</label>
          </div>
        </div>
      </div>
    </div>
  );
}
