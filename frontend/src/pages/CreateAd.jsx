import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCreateAd from "../components/FormCreateAd";

const CreateAd = () => {
  const id = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
  return (
    <div>
      <FormCreateAd/>
    </div>
  );
};

export default CreateAd;
