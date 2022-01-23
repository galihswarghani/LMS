/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import team2 from "assets/images/team-2.jpg";

export default function data() {
  const Author = ({ image, name, alamat }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{alamat}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Nama", accessor: "nama", width: "45%", align: "left" },
      { Header: "Tanggal Lahir", accessor: "TanggalLahir", align: "left" },
      { Header: "Nominal", accessor: "nominal", align: "center" },
      { Header: "No Hp", accessor: "noTelp", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        nama: <Author image={team2} name="Siti D" alamat="Bandung" />,
        TanggalLahir: <Job title="22 Januari 1989" />,
        nominal: <Job title="Rp. 3.000.000" description="24 Bulan" />,
        noTelp: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            082312121212
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Romlah" alamat="Bandung" />,
        TanggalLahir: <Job title="22 Januari 1989" />,
        nominal: <Job title="Rp. 3.000.000" description="24 Bulan" />,
        noTelp: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            082312121212
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Bambang" alamat="Bandung" />,
        TanggalLahir: <Job title="22 Januari 1989" />,
        nominal: <Job title="Rp. 3.000.000" description="24 Bulan" />,
        noTelp: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            082312121212
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Sugeng" alamat="Bandung" />,
        TanggalLahir: <Job title="22 Januari 1989" />,
        nominal: <Job title="Rp. 3.000.000" description="24 Bulan" />,
        noTelp: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            082312121212
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Anis" alamat="Bandung" />,
        TanggalLahir: <Job title="22 Januari 1989" />,
        nominal: <Job title="Rp. 3.000.000" description="24 Bulan" />,
        noTelp: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            082312121212
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Hariono" alamat="Bandung" />,
        TanggalLahir: <Job title="22 Januari 1989" />,
        nominal: <Job title="Rp. 3.000.000" description="24 Bulan" />,
        noTelp: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            082312121212
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      <MDButton />,
    ],
  };
}
