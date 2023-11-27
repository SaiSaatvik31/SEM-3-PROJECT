import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Avatar } from "@mui/material";
function ForWhom() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/book-appointment");
  };
  const namePage = () => {
    navigate("/name");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="d-flex flex-row">
            <div className="mt-5 col-6 w-50">
              <Button onClick={namePage} variant="contained" color="primary">
                <Avatar
                  alt="Image"
                  src="https://imgs.search.brave.com/ZnZrWaDZRgPL-bh1W84_oo87O70vw2sqscE6O-MjUZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG90LWVtb3Rpb25h/bC1iZWFyZGVkLW1h/bi1wb2ludHMtaGlt/c2VsZi1zdXJwcmlz/ZWQtYmVpbmctY2hv/c2VuLWFza3MtcXVl/c3Rpb24td2l0aC1z/aG9ja2VkLWhlc2l0/YW50LWV4cHJlc3Np/b24td2VhcnMtcm9z/eS1zd2VhdGVyLWV5/ZXdlYXItcG9zZXMt/YWdhaW5zdC15ZWxs/b3ctd2FsbC13aG8t/bWVfMjczNjA5LTQy/MjIyLmpwZz9zaXpl/PTYyNiZleHQ9anBn"
                  variant="rounded"
                  sx={{ marginRight: 1 }}
                ></Avatar>
                FOR ME
              </Button>
            </div>
            <div className="mt-5 col-6 w-50">
              <Button onClick={namePage} variant="contained" color="primary">
                <Avatar
                  alt="Image"
                  src="https://imgs.search.brave.com/ZnZrWaDZRgPL-bh1W84_oo87O70vw2sqscE6O-MjUZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG90LWVtb3Rpb25h/bC1iZWFyZGVkLW1h/bi1wb2ludHMtaGlt/c2VsZi1zdXJwcmlz/ZWQtYmVpbmctY2hv/c2VuLWFza3MtcXVl/c3Rpb24td2l0aC1z/aG9ja2VkLWhlc2l0/YW50LWV4cHJlc3Np/b24td2VhcnMtcm9z/eS1zd2VhdGVyLWV5/ZXdlYXItcG9zZXMt/YWdhaW5zdC15ZWxs/b3ctd2FsbC13aG8t/bWVfMjczNjA5LTQy/MjIyLmpwZz9zaXpl/PTYyNiZleHQ9anBn"
                  variant="rounded"
                  sx={{ marginRight: 1 }}
                ></Avatar>
                SOMEONE ELSE
              </Button>
            </div>
          </div>
          <Button className="mt-5" onClick={handleBack}>
            <i class="fa-solid fa-arrow-left fa-bounce m-2"></i> Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default ForWhom;
