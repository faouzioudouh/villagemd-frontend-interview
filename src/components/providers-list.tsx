import { useState } from "react";
import {
  Select,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import { WomanOutlined, Flag, ManOutlined } from "@mui/icons-material";

const providers = [
  { id: 1, name: "Dr. John Smith", gender: "male", nationality: "US" },
  { id: 2, name: "Dr. Jane Doe", gender: "female", nationality: "UK" },
];

export const ProviderList = () => {
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedNationality, setSelectedNationality] = useState("All");

  const filteredProviders = providers.filter(() => {
    // Implement the filter logic here
    return true;
  });

  return (
    <Box margin={15}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Select
          labelId="gender-filter-label"
          id="gender-filter"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <MenuItem value="All">All genders</MenuItem>
          <MenuItem value="male">
            <ManOutlined /> Male
          </MenuItem>
          <MenuItem value="female">
            <WomanOutlined /> Female
          </MenuItem>
        </Select>
        <Select
          labelId="nationality-filter-label"
          id="nationality-filter"
          value={selectedNationality}
          onChange={(e) => setSelectedNationality(e.target.value)}
        >
          <MenuItem value="All">All nationalities</MenuItem>
          <MenuItem value="US">
            <Flag /> USA
          </MenuItem>
          <MenuItem value="UK">
            <Flag /> UK
          </MenuItem>
          <MenuItem value="MA">
            <Flag /> MA
          </MenuItem>
        </Select>
      </div>

      <Table>
        <TableBody>
          {filteredProviders.map((provider) => (
            <TableRow key={provider.id}>
              <TableCell>{provider.name}</TableCell>
              <TableCell>{provider.gender}</TableCell>
              <TableCell>{provider.nationality}</TableCell>
              {/* Add more table cells for other details */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
