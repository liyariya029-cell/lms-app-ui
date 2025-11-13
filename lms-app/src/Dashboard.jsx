import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";


// Stats Card Component
function StatsCard({ title, value }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default function Dashboard({ onLogout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div>

      {/* Avatar Top Right */}
      <div style={{ textAlign: "right", padding: "10px" }}>
        <Avatar
          onClick={handleMenuOpen}
          style={{ cursor: "pointer", background: "black" }}
        >
          M
        </Avatar>
  
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              onLogout(); // 
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>

      <button onClick={() => navigate("/courses")}>CourseList</button>
      {/* Dashboard Content */}
      <h2>Dashboard</h2>
      <StatsCard title="Total Users" value="120" />
    </div>
  );
}
