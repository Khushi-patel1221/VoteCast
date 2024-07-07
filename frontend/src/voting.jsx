
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, List, ListItem, ListItemText, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, AvatarGroup } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Voting() {
  const [candidates, setCandidates] = useState([]);
  const [voted, setVoted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false); // State to control dialog
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
  }, [userId]);

  const handleVote = (candidateId) => {
    console.log(`Sending vote request: userId=${userId}, candidateId=${candidateId}`);
    axios.post('http://localhost:5000/vote', { userId, candidateId })
      .then(response => {
        console.log(response.data);
        setVoted(true);
        setCandidates(candidates.map(candidate =>
          candidate._id === candidateId ? { ...candidate, voteCount: candidate.voteCount + 1 } : candidate
        ));
        setDialogOpen(true); // Open the dialog
      })
      .catch(error => {
        console.error('Error casting vote', error);
      });
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    navigate('/'); // Navigate to home page after closing the dialog
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Voting Page
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
                <ListItemText primary={candidate.username} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleVote(candidate._id)}
                  disabled={voted}
                >
                  Vote
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Vote Casted</DialogTitle>
        <DialogContent>
          <Typography>
            Your vote has been casted successfully.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Voting;
