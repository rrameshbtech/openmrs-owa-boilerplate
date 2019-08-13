import React, { useEffect, useState } from "react";

export const Header = () => {
  const [authentication, setAuthentication] = useState(null);
  useEffect(() => {
    const requestSettings = {
      credentials: "include",
      headers: new Headers({
        Accept: "application/json"
      })
    };

    fetch("/openmrs/ws/rest/v1/session", requestSettings)
      .then(response => {
        return response.json();
      })
      .then(session => {
        setAuthentication(session);
      });
  }, []);

  return (
    <header>
      <img className="logo" alt="OpenMRS Logo" src="img/logo.png"></img>
      <span>Hi, {authentication ? authentication.user.display : ""}</span>
    </header>
  );
};

export default Header;
