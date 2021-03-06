import { Container, makeStyles, Theme, Typography } from '@material-ui/core';

import { useAuth } from '../core/auth';
import { Avatar } from '../core/avatar';
import { Page } from '../layouts';
import { NavBar } from '../core/bars';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));

function ProfileEditPage() {
  const auth = useAuth();
  const classes = useStyles();
  const user = auth.getUser();

  return (
    <Page title="Profile Edit">
      <NavBar />
      <Container component="main" maxWidth="md" className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          Profile Edit
        </Typography>
        {user && (
          <Typography variant="h4">
            {user.avatar_url && <Avatar src={user.avatar_url} alt="Avatar" />} Welcome {` ${user.username}`}
          </Typography>
        )}
        <Typography variant="body2">Profile</Typography>
      </Container>
    </Page>
  );
}

export default ProfileEditPage;
