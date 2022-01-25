import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import "./submit.css";
// import DataTable from "examples/Tables/DataTable";
import PostData from "../data/AmarthaPermohonanData.json";

function SubmitSelected() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <h1>Hello There</h1>
        {PostData.map((dataPokokDebitur) => (
          <h1> {dataPokokDebitur.namaDebitur}</h1>
        ))}
      </div>

      {/* <container>
        <div className="identitas">
          <p>Pemohon</p>
          <Form>
            <Form.Group controlId="form.Nama">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Enter nama" />
            </Form.Group>
            <Form.Group controlId="form.Indentitas">
              <Form.Label>jenis identitas</Form.Label>
              <Form.Control type="text" placeholder="Enter Jenis Identitas" />
            </Form.Group>
            <Form.Group controlId="form.No">
              <Form.Label>No identitas</Form.Label>
              <Form.Control type="text" placeholder="Enter Identitas" />
            </Form.Group>
            <Form.Group controlId="form.Alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" placeholder="Enter Alamat" />
            </Form.Group>
            <Form.Group controlId="form.Alamat">
              <Form.Label>Kode Pos</Form.Label>
              <Form.Control type="text" placeholder="Enter Kode Pos" />
            </Form.Group>
            <Form.Group controlId="form.Agama">
              <Form.Label>Agama</Form.Label>
              <Form.Control type="text" placeholder="Enter Agama" />
            </Form.Group>
            <Form.Group controlId="form.TempatLahir">
              <Form.Label>Tempat Lahir</Form.Label>
              <Form.Control type="text" placeholder="Enter Tempat Lahir" />
            </Form.Group>
            <Form.Group controlId="form.TglLahir">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control type="text" placeholder="Enter Tanggal Lahir" />
            </Form.Group>
            <Form.Group controlId="form.Stat">
              <Form.Label>Status Perkawinan</Form.Label>
              <Form.Control type="text" placeholder="Enter Status" />
            </Form.Group>
            <Form.Group controlId="form.Pekerjaan">
              <Form.Label>Pekerjaan</Form.Label>
              <Form.Control type="text" placeholder="Enter Pekerjaan" />
            </Form.Group>
            <Form.Group controlId="form.Warga">
              <Form.Label>Kewarganegaraan</Form.Label>
              <Form.Control type="text" placeholder="Enter Warga negara" />
            </Form.Group>
          </Form>
        </div>
        <div className="informasi">
          <p>informasi</p>
          <Form>
            <Form.Group controlId="form.NPWP">
              <Form.Label>No NPWP</Form.Label>
              <Form.Control type="text" placeholder="Enter NPWP" />
            </Form.Group>
            <Form.Group controlId="form.Pend">
              <Form.Label>Pendidikan</Form.Label>
              <Form.Control type="text" placeholder="Enter Pendidikan" />
            </Form.Group>
            <Form.Group controlId="form.Gol">
              <Form.Label>Gol Darah</Form.Label>
              <Form.Control type="text" placeholder="Enter Gol Darah" />
            </Form.Group>
            <Form.Group controlId="form.No">
              <Form.Label>No HP</Form.Label>
              <Form.Control type="text" placeholder="Enter No HP" />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>
            <Form.Group controlId="form.Ibu">
              <Form.Label>Nama Ibu Kandung</Form.Label>
              <Form.Control type="text" placeholder="Enter Nama Ibu Kandung" />
            </Form.Group>
            <Form.Group controlId="form.CP">
              <Form.Label>Kontak Person</Form.Label>
              <Form.Control type="text" placeholder="Enter CP" />
            </Form.Group>
          </Form>
        </div>
        <div className="pasangan">
          <p>Pasangan</p>
          <Form>
            <Form.Group controlId="form.NamaP">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Enter nama" />
            </Form.Group>
            <Form.Group controlId="form.NIK">
              <Form.Label>NIK</Form.Label>
              <Form.Control type="text" placeholder="Enter NIK" />
            </Form.Group>
            <Form.Group controlId="form.Tgl">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control type="text" placeholder="Enter Tanggal Lahir" />
            </Form.Group>
            <Form.Group controlId="form.Pekerjaan">
              <Form.Label>Pekerjaan</Form.Label>
              <Form.Control type="text" placeholder="Enter Pekerjaan" />
            </Form.Group>
          </Form>
        </div>
        <div className="rac-deg">
          <p>
            Usia Mitra/Calon Mitra saat mengajukan minimal 21 tahun atau 18 tahun bagi yang telah
            menikah{" "}
          </p>
          <p>
            Usia Mitra/Calon Mitra saat mengajukan minimal 21 tahun atau 18 tahun bagi yang telah
            menikah{" "}
          </p>
          <p>
            Usia Mitra/Calon Mitra saat mengajukan minimal 21 tahun atau 18 tahun bagi yang telah
            menikah{" "}
          </p>
        </div>
        <div className="table">
          <div className="tbl">
            <DataTable
              table={{
                columns: [
                  { Header: "Institusi", accessor: "name", width: "100px" },
                  { Header: "Plafond", accessor: "position", width: "100px" },
                  { Header: "Baki Debet", accessor: "office" },
                  { Header: "Jatoh Tempo", accessor: "age", width: "100px" },
                  { Header: "Kolektabilitas", accessor: "kol", width: "100px" },
                ],
                rows: [
                  {
                    name: "BCA",
                    position: "Rp. 50.000.000",
                    office: "Rp. 270.000",
                    age: "22 Sept 2025",
                    kol: "kol 1",
                  },
                  {
                    name: "BNI",
                    position: "Rp. 50.000.000",
                    office: "Rp. 270.000",
                    age: "22 Sept 2025",
                    kol: "kol 1",
                  },
                  {
                    name: "BRI",
                    position: "Rp. 50.000.000",
                    office: "Rp. 270.000",
                    age: "22 Sept 2025",
                    kol: "kol 1",
                  },
                ],
              }}
            />
          </div>
        </div>
      </container> */}
    </DashboardLayout>
  );
}

export default SubmitSelected;
