import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Avatar, AvatarGroup } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CandidatePage() {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); // Retrieve userId from local storage

  useEffect(() => {
    axios.get('http://localhost:5000/candidates')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {
        console.error('Error fetching candidates', error);
      });
  }, [userId, navigate]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Candidate Page
        </Typography>
        {candidates.length === 0 ? (
          <Typography variant="h6" gutterBottom>
            No candidates available.
          </Typography>
        ) : (
          <List>
            {candidates.map(candidate => (
              <ListItem key={candidate._id} divider>
                <AvatarGroup max={4} sx={{ marginRight: 2 }}>
                  <Avatar alt={candidate.username} src={candidate.avatar || "/images/default-avatar.png"} />
                </AvatarGroup>
                <ListItemText primary={candidate.username} secondary={`Votes: ${candidate.voteCount}`} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
}

export default CandidatePage;
