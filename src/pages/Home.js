import Sidebar from "../components/sidebar/Sidebar";
import Table from "../components/table/Table";

const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="page-container p-3">
        <h1 className="h3 mb-0 text-gray-800">Seleccion y Descarga ASICVAL</h1>
        <div className="d-flex flex-row my-3">
          <div className="form-fields">
            <select
              class="form-select my-2"
              aria-label="Default select example"
            >
              <option selected>Provincia</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              class="form-select my-2"
              aria-label="Default select example"
            >
              <option selected>Fecha</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              class="form-select my-2"
              aria-label="Default select example"
            >
              <option selected>Mes año</option>
              <option value="1">jun 2022</option>
              <option value="2">may 2022</option>
              <option value="3">abr 2022</option>
              <option value="3">mar 2022</option>
              <option value="3">feb 2022</option>
              <option value="3">ene 2022</option>
            </select>
          </div>
          <div className="card m-auto">
              Record count
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Home;
