import React from "react";

type FiltersProps = {
  setParams: any;
};

function Filters({ setParams }: FiltersProps) {
  function handleSubmit(event: any) {
    event.preventDefault();
    setParams({
      name: event.target[0].value,
      status: event.target[1].value,
      species: event.target[2].value,
      type: event.target[3].value,
      gender: event.target[4].value,
    });
  }
  return (
    <div className="dark:bg-sky-950">
      <h1 className="text-center py-10 text-2xl font-bold dark:text-neutral-200">
        Find Rick and Morty Characters
      </h1>
      <form
        className="flex items-center justify-around flex-wrap pb-8"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="border-solid border-2 rounded border-gray-300 w-48 px-1 py-1"
          />
        </div>
        <div>
          <select
            name="status"
            id="status-select"
            placeholder="status"
            className="border-solid border-2 rounded border-gray-300 w-48 px-1 py-1"
          >
            <option value="">Select Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="species"
            id="species"
            placeholder="species"
            className="border-solid border-2 rounded border-gray-300 w-48 px-1 py-1"
          />
        </div>
        <div>
          <input
            type="text"
            name="type"
            id="type"
            placeholder="type"
            className="border-solid border-2 rounded border-gray-300 w-48 px-1 py-1"
          />
        </div>
        <div>
          <select
            name="gender"
            id="gender-select"
            placeholder="gender"
            className="border-solid border-2 rounded border-gray-300 w-48 px-1 py-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div>
          <button
            className="border-solid border-2 rounded border-gray-300 w-40 px-1 py-1 bg-sky-300"
            type="submit"
          >
            Filter
          </button>
          <button
            type="reset"
            className="px-3 py-1 border-2 border-gray-300 rounded mx-2 bg-red-400"
          >
            X
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filters;
