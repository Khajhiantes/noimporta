import React from "react";
import Layout from "../../components/Layout/Layout";
import "./AdminHomePage.css";
import Title from "../../components/Title/Title";
import Button from "../../components/ButtonViolet/ButtonViolet";

function AdminHomePage() {
  return (
    <Layout area="admin">
      <div className="container">
      <Title >Bienvenidos al area de Administracion</Title>
      <div className="roww">
          <Button size='lg' href="/admin/reporteClientes">Reporte Clientes</Button>
          <Button size='lg' href="/admin/reporteProveedores">Reporte Proveedores</Button>
          <Button size='lg' href="/admin/adminVentas">Ventas y Compras</Button>
        </div>
        <div className="roww">
          <Button size='lg' href="/admin/materiasPrimas">Materias Primas</Button>
          <Button size='lg' href="/admin/reporteDeCompras">Productos</Button>
          <Button size='lg' href="/admin/empleados">Empleados</Button>
        </div>
        <div className="roww">
          <Button size='lg' href="/admin/deudores">Deudores</Button>
          </div>
      </div>
      
    </Layout>
  );
}

export default AdminHomePage;
