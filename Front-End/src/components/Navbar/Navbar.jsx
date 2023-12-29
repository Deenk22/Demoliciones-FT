import {List, ListItem, Typography} from "@mui/material";
import {navbar} from "../../constants/navbar";

export default function Navbar() {
  return (
    <nav className="nav">
      <List
        sx={{
          display: "flex",
        }}
      >
        {navbar.map((link) => {
          const {id, label} = link;
          return (
            <ListItem key={id}>
              <Typography
                textAlign={"center"}
                variant="body2"
                fontSize={"1rem"}
                component={"a"}
                href={`#${id}`}
                color={"#ffffff"}
                sx={{textDecoration: "none"}}
              >
                {label}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
}
