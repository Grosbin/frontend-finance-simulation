import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { SplitButton } from "primereact/splitbutton";
import { useDispatch, useSelector } from "react-redux";

import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';

import { TabMenu } from 'primereact/tabmenu';

// import { message, professor, startLogout, student } from "../../actions/auth";
// import { motion } from "framer-motion";
// import { variantsNavbar } from "../../helpers/framerValues";

export const Navbar = () => {
  const navigate = useNavigate();

  let items = [
    {
      label: "Inicio",
      command: () => {
        navigate("/");

      },
    },
    {
      label: "Documentación",
      command: () => {
        navigate("/documentacion");

      },
    },
    {
      label: "Acerca de",
      command: () => {
        navigate("/acerca");

      },
    },
  ];

  const end = (
    <img
      onClick={() => navigate("/")}
      alt="logo"
      src="logo-is.png"
      // onError={(e) => (e.target.src = "logo.png")}
      height="50"
      className="mr-2"
    ></img>
  );



  return (
    <div
      className={`header`}
    >

      <Menubar
        model={items}
        // start={<InputText placeholder="Buscar" type="text" />}
        end={end}
      />

    </div>
  );
};
