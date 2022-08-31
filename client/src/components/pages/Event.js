import AddEvent from '../AddEvent/AddEvent';
import auth from '../../utils/auth';


export default function Event() {
    
  if (!auth.loggedIn()){
    window.location.assign('/login');
  }
  return (
    <>
      <h1>Create Event</h1>
      <AddEvent />
    </>
  );
}
