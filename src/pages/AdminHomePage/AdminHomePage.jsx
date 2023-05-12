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
          <Button href="/admin/reporteClientes">Reporte Clientes</Button>
          <Button href="/admin/reporteProveedores">Reporte Proveedores</Button>
          <Button href="/admin/ventasyCompras">Ventas y Compras</Button>
        </div>
        <div className="roww">
          <Button href="/admin/materiasPrimas">Materias Primas</Button>
          <Button href="/admin/productos">Productos</Button>
          <Button href="/admin/empleados">Empleados</Button>
        </div>
        <div className="roww">
          <Button  href="/admin/deudores">Deudores</Button>
          </div>
      </div>
      
    </Layout>
  );
}

export default AdminHomePage;
